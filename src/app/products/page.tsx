'use client'

import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import { Suspense, useEffect, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Loading from "@/app/loading";
import { IoIosArrowDown } from 'react-icons/io';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { FaEye, FaShoppingCart  } from "react-icons/fa";
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
  _id: string;
  image: string;
  status?: string;
  productName: string;
  category: string;
  colors: string[];
  price: string;
  price_id: string;
}

const filters = [
  {
    title: "Gender",
    options: ["Men", "Women", "Unisex"]
  },
  {
    title: "Kids",
    options: ["Boys", "Girls"]
  },
  {
    title: "Shop By Price",
    options: ["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"]
  }
];

const categories = [
  "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts",
  "Jackets", "Trousers & Tights", "Shorts", "Tracksuits",
  "Jumpsuits & Rompers", "Skirts & Dresses", "Accessories & Equipment"
];

const tags = [
  "Best Selling Products", "Best Shoes", "New Basketball Shoes",
  "New Football Shoes", "New Men's Shoes", "New Running Shoes",
  "Best Men's Shoes", "New Jordan Shoes", "Best Women's Shoes",
  "Best Training & Gym"
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && category match "Shoes"] {
        productName,
        price,
        category,
        image,
        description,
        colors,
        _id,
        status
      }`;

      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
    'Gender': [],
    'Kids': [],
    'Shop By Price': []
  });

  const [sortBy, setSortBy] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortButtonRef = useRef<HTMLDivElement>(null);

  const parsePrice = (price: number | string) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^0-9.]/g, ''));
    }
    return price;
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory
      ? product.category.includes(selectedCategory)
      : true;

    const genderMatch = selectedFilters.Gender.length === 0 ||
      selectedFilters.Gender.some(gender => product.category.includes(gender));

    const kidsMatch = selectedFilters.Kids.length === 0 ||
      selectedFilters.Kids.some(kid => product.category.includes(kid));

    const priceMatch = selectedFilters['Shop By Price'].length === 0 ||
      selectedFilters['Shop By Price'].some(range => {
        const [min, max] = range.split('-').map(str => parsePrice(str.replace('Under', '').trim()));
        const productPrice = parsePrice(product.price);

        if (range.startsWith('Under')) return productPrice <= max;
        return productPrice >= min && productPrice <= max;
      });

    return categoryMatch && genderMatch && kidsMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parsePrice(a.price);
    const priceB = parsePrice(b.price);

    switch (sortBy) {
      case 'price_asc': return priceA - priceB;
      case 'price_desc': return priceB - priceA;
      default: return 0;
    }
  });

  const handleFilterChange = (filterTitle: string, option: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterTitle]: prev[filterTitle].includes(option)
        ? prev[filterTitle].filter(item => item !== option)
        : [...prev[filterTitle], option]
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortButtonRef.current && !sortButtonRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  interface CartProduct extends Product {
    quantity: number;
  }

  const handleAddToCart = (product: Product) => {
    const cartProducts: CartProduct[] = JSON.parse(localStorage.getItem('cart-products') || '[]');
    
    // Check if product already exists in cart
    const existingProduct = cartProducts.find(item => item._id === product._id);
   
    if (!existingProduct) {
       // Add the product to the cart
            const updatedCartItems = [...cartProducts, product];
            localStorage.setItem('cart-products', JSON.stringify(updatedCartItems));
      
            // Show a success toast notification
            toast.success('Your product has been added to the cart successfully!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            // Notify the user if the product is already in the cart
            toast.info('This product is already in your cart!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        };


  //   if (existingProduct) {
  //     existingProduct.quantity += 1;
  //   } 
    
    
  //   else {
  //     cartProducts.push({
  //       ...product,
  //       quantity: 1
  //     });
  //   }
  
  //   localStorage.setItem('cart-products', JSON.stringify(cartProducts));
    
  //   toast.success("Proceed to checkout now please Wait...", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     transition: Slide,
  //   });
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ToastContainer />
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
      >
        <h1 className="text-2xl lg:text-3xl font-medium animate-fade-in">
          New ({sortedProducts.length})
        </h1>
        <div className="flex gap-4 md:gap-6">
          <div className="relative" ref={sortButtonRef}>
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="text-lg">Sort By</span>
              <IoIosArrowDown className="w-5 h-5 mt-0.5" />
            </button>
            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                >
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => {
                          setSortBy('newest');
                          setIsSortOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        Newest
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSortBy('price_asc');
                          setIsSortOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        Price: Low to High
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSortBy('price_desc');
                          setIsSortOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        Price: High to Low
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      <div className="block md:hidden mb-10">
        <Sheet>
          <SheetTrigger className="bg-white p-4 rounded-lg border border-gray-200 w-auto">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="max-h-100 overflow-y-auto">
            <aside className="space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h2 className="text-lg font-medium mb-4">Categories</h2>
                <ul className="space-y-3 max-h-60 overflow-y-auto">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
                      className={`text-base cursor-pointer ${
                        selectedCategory === category
                          ? 'text-primary font-semibold'
                          : 'hover:text-primary'
                      }`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {filters.map((filter) => (
                <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={filter.title}>
                      <AccordionTrigger className="text-lg font-medium hover:no-underline">
                        {filter.title}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 space-y-3">
                        {filter.options.map((option, index) => (
                          <label key={index} className="flex items-center gap-3 hover:opacity-80">
                            <input
                              type="checkbox"
                              checked={selectedFilters[filter.title].includes(option)}
                              onChange={() => handleFilterChange(filter.title, option)}
                              className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
                            />
                            <span className="text-base">{option}</span>
                          </label>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </aside>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-6 hidden md:block">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium mb-4">Categories</h2>
            <ul className="space-y-3 max-h-60 overflow-y-auto">
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
                  className={`text-base cursor-pointer ${
                    selectedCategory === category
                      ? 'text-primary font-semibold'
                      : 'hover:text-primary'
                  }`}
                >
                  {category}
                </motion.li>
              ))}
            </ul>
          </div>

          {filters.map((filter) => (
            <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
              <Accordion type="single" collapsible>
                <AccordionItem value={filter.title}>
                  <AccordionTrigger className="text-lg font-medium hover:no-underline">
                    {filter.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 space-y-3">
                    {filter.options.map((option, index) => (
                      <label key={index} className="flex items-center gap-3 hover:opacity-80">
                        <input
                          type="checkbox"
                          checked={selectedFilters[filter.title].includes(option)}
                          onChange={() => handleFilterChange(filter.title, option)}
                          className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
                        />
                        <span className="text-base">{option}</span>
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </aside>
  
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.article
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white p-4 rounded-lg border border-gray-200 flex flex-col min-h-[400px]"
              >
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="mt-4 space-y-2 flex-grow">
                  {product.status && (
                    <span className="block text-sm font-medium text-[#9E3500] animate-pulse">
                      {product.status}
                    </span>
                  )}
                  <h2 className="text-lg font-medium line-clamp-2">{product.productName}</h2>
                  <p className="text-gray-600 line-clamp-1">{product.category}</p>
                  <p className="text-gray-600 line-clamp-1">{product.colors} Colour</p>
                  <p className="text-lg font-medium">MRP: {product.price}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white 
                             py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex-shrink-0"
                  onClick={() => {
                    console.log(`Viewing product: ${product.productName}`);
                  }}
                >
                  <FaEye className="h-5 w-5" />
                  <span>View</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 text-white 
                             py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 flex-shrink-0"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </motion.article>
            ))}
          </div>
  
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-1 text-sm border-2 cursor-pointer border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-50"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}



// interface Product {
//   _id: string;
//   image: string;
//   status?: string;
//   productName: string;
//   category: string;
//   colors: string[]; // Updated to an array of strings
//   price: string;
//   price_id: string
//   // other product properties
// };

// const filters = [
//   {
//     title: "Gender",
//     options: ["Men", "Women", "Unisex"]
//   },
//   {
//     title: "Kids",
//     options: ["Boys", "Girls"]
//   },
//   {
//     title: "Shop By Price",
//     options: ["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"]
//   }
// ]

// const categories = [
//   "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts",
//   "Jackets", "Trousers & Tights", "Shorts", "Tracksuits",
//   "Jumpsuits & Rompers", "Skirts & Dresses", "Accessories & Equipment"
// ]

// const tags = [
//   "Best Selling Products", "Best Shoes", "New Basketball Shoes",
//   "New Football Shoes", "New Men's Shoes", "New Running Shoes",
//   "Best Men's Shoes", "New Jordan Shoes", "Best Women's Shoes",
//   "Best Training & Gym"
// ]

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product" && category match "Shoes"] {
//         productName,
//         price,
//         category,
//         image,
//         description,
//         colors,
//         _id,
//         status
//       }`;

//       const data = await client.fetch(query);
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   // State management
//   type FilterOptions = {
//     [key: string]: string[];
//   };

//   const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
//     'Gender': [],
//     'Kids': [],
//     'Shop By Price': []
//   });

//   const [sortBy, setSortBy] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isSortOpen, setIsSortOpen] = useState(false);
//   const sortButtonRef = useRef<HTMLDivElement>(null);

//   // Price parser utility
//   const parsePrice = (price: number | string) => {
//     if (typeof price === "string") {
//       return parseFloat(price.replace(/[^0-9.]/g, ''));
//     }
//     return price;
//   };

//   // Filter and sort products
//   const filteredProducts = products.filter(product => {
//     const categoryMatch = selectedCategory
//       ? product.category.includes(selectedCategory)
//       : true;

//     const genderMatch = selectedFilters.Gender.length === 0 ||
//       selectedFilters.Gender.some(gender => product.category.includes(gender));

//     const kidsMatch = selectedFilters.Kids.length === 0 ||
//       selectedFilters.Kids.some(kid => product.category.includes(kid));

//     const priceMatch = selectedFilters['Shop By Price'].length === 0 ||
//       selectedFilters['Shop By Price'].some(range => {
//         const [min, max] = range.split('-').map(str => parsePrice(str.replace('Under', '').trim()));
//         const productPrice = parsePrice(product.price);

//         if (range.startsWith('Under')) return productPrice <= max;
//         return productPrice >= min && productPrice <= max;
//       });

//     return categoryMatch && genderMatch && kidsMatch && priceMatch;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     const priceA = parsePrice(a.price);
//     const priceB = parsePrice(b.price);

//     switch (sortBy) {
//       case 'price_asc': return priceA - priceB;
//       case 'price_desc': return priceB - priceA;
//       default: return 0;
//     }
//   });

//   // Handle filter changes
//   const handleFilterChange = (filterTitle: string, option: string) => {
//     setSelectedFilters(prev => ({
//       ...prev,
//       [filterTitle]: prev[filterTitle].includes(option)
//         ? prev[filterTitle].filter(item => item !== option)
//         : [...prev[filterTitle], option]
//     }));
//   };

//   // Close sort dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (sortButtonRef.current && !sortButtonRef.current.contains(event.target as Node)) {
//         setIsSortOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Page Header with Animation */}
//       <motion.header
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
//       >
//         <h1 className="text-2xl lg:text-3xl font-medium animate-fade-in">
//           New ({sortedProducts.length})
//         </h1>
//         <div className="flex gap-4 md:gap-6">
//           <div className="relative" ref={sortButtonRef}>
//             <button
//               onClick={() => setIsSortOpen(!isSortOpen)}
//               className="flex items-center gap-1 hover:opacity-80 transition-opacity"
//             >
//               <span className="text-lg">Sort By</span>
//               <IoIosArrowDown className="w-5 h-5 mt-0.5" />
//             </button>
//             {/* Animated Sort Dropdown */}
//             <AnimatePresence>
//               {isSortOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => {
//                           setSortBy('newest');
//                           setIsSortOpen(false);
//                         }}
//                         className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                       >
//                         Newest
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         onClick={() => {
//                           setSortBy('price_asc');
//                           setIsSortOpen(false);
//                         }}
//                         className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                       >
//                         Price: Low to High
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         onClick={() => {
//                           setSortBy('price_desc');
//                           setIsSortOpen(false);
//                         }}
//                         className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                       >
//                         Price: High to Low
//                       </button>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.header>

//       {/* Mobile Filters */}
//       <div className="block md:hidden mb-10">
//         <Sheet>
//           <SheetTrigger className="bg-white p-4 rounded-lg border border-gray-200 w-auto">
//             <Menu />
//           </SheetTrigger>
//           <SheetContent side="right" className="max-h-100 overflow-y-auto">
//             <aside className="space-y-6">
//               <div className="bg-white p-4 rounded-lg border border-gray-200">
//                 <h2 className="text-lg font-medium mb-4">Categories</h2>
//                 <ul className="space-y-3 max-h-60 overflow-y-auto">
//                   {categories.map((category, index) => (
//                     <li
//                       key={index}
//                       onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
//                       className={`text-base cursor-pointer ${
//                         selectedCategory === category
//                           ? 'text-primary font-semibold'
//                           : 'hover:text-primary'
//                       }`}
//                     >
//                       {category}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {filters.map((filter) => (
//                 <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//                   <Accordion type="single" collapsible>
//                     <AccordionItem value={filter.title}>
//                       <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                         {filter.title}
//                       </AccordionTrigger>
//                       <AccordionContent className="pt-2 space-y-3">
//                         {filter.options.map((option, index) => (
//                           <label key={index} className="flex items-center gap-3 hover:opacity-80">
//                             <input
//                               type="checkbox"
//                               checked={selectedFilters[filter.title].includes(option)}
//                               onChange={() => handleFilterChange(filter.title, option)}
//                               className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                             />
//                             <span className="text-base">{option}</span>
//                           </label>
//                         ))}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 </div>
//               ))}
//             </aside>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Desktop Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Desktop Filters */}
//         <aside className="lg:col-span-3 space-y-6 hidden md:block">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h2 className="text-lg font-medium mb-4">Categories</h2>
//             <ul className="space-y-3 max-h-60 overflow-y-auto">
//               {categories.map((category, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
//                   className={`text-base cursor-pointer ${
//                     selectedCategory === category
//                       ? 'text-primary font-semibold'
//                       : 'hover:text-primary'
//                   }`}
//                 >
//                   {category}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {filters.map((filter) => (
//             <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//               <Accordion type="single" collapsible>
//                 <AccordionItem value={filter.title}>
//                   <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                     {filter.title}
//                   </AccordionTrigger>
//                   <AccordionContent className="pt-2 space-y-3">
//                     {filter.options.map((option, index) => (
//                       <label key={index} className="flex items-center gap-3 hover:opacity-80">
//                         <input
//                           type="checkbox"
//                           checked={selectedFilters[filter.title].includes(option)}
//                           onChange={() => handleFilterChange(filter.title, option)}
//                           className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                         />
//                         <span className="text-base">{option}</span>
//                       </label>
//                     ))}
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           ))}
//         </aside>
  
//         {/* Products Grid with Animation */}
//         <main className="lg:col-span-9">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {sortedProducts.map((product, index) => (
//     <motion.article
//       key={product._id}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1, duration: 0.3 }}
//       whileHover={{ scale: 1.02 }}
//       className="group relative bg-white p-4 rounded-lg border border-gray-200 flex flex-col  min-h-[400px]"
//     >
//       {/* Image Block */}
//       <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
//         <Image
//           src={urlFor(product.image).url()}
//           alt={product.productName}
//           fill
//           className="object-cover group-hover:opacity-90 transition-opacity"
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="mt-4 space-y-2 flex-grow">
//         {product.status && (
//           <span className="block text-sm font-medium text-[#9E3500] animate-pulse">
//             {product.status}
//           </span>
//         )}
//         <h2 className="text-lg font-medium line-clamp-2">{product.productName}</h2>
//         <p className="text-gray-600 line-clamp-1">{product.category}</p>
//         <p className="text-gray-600 line-clamp-1">{product.colors} Colour</p>
//         <p className="text-lg font-medium">MRP: {product.price}</p>
//       </div>

//       {/* View Button with Icon */}
//       <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white 
//                        py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex-shrink-0"
//             onClick={() => {
//               // Add your view logic here
//               console.log(`Viewing product: ${product.productName}`);
//             }}
//           >
//             <FaEye className="h-5 w-5" /> {/* Eye icon from React Icons */}
//             <span>View</span>
//           </motion.button>

//           {/* Add to Cart Button with Icon */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 text-white 
//                        py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 flex-shrink-0"
//             onClick={() => {
//               // Add your add to cart logic here
//               console.log(`Added to cart: ${product.productName}`);
//             }}
//           >
//             <FaShoppingCart className="h-5 w-5" /> {/* Shopping cart icon from React Icons */}
//             <span>Add to Cart</span>
//           </motion.button>
//     </motion.article>
//   ))}
// </div>
  
//           {/* Related Categories with Animation */}
//           <motion.section
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="mt-16"
//           >
//             <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, index) => (
//                 <motion.span
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-1 text-sm border-2 cursor-pointer border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-50"
//                 >
//                   {tag}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.section>
//         </main>
//       </div>
//     </div>

//   );
// }


// export default function ProductsPage() {
//   const { addItem } = useShoppingCart();
//   // State management
//   type FilterOptions = {
//     [key: string]: string[];
//   };

//   const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
//     'Gender': [],
//     'Kids': [],
//     'Shop By Price': []
//   });
//   const [sortBy, setSortBy] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isSortOpen, setIsSortOpen] = useState(false);
//   const sortButtonRef = useRef<HTMLDivElement>(null);

//   // Price parser utility
//   const parsePrice = (priceString: string) => {
//     return parseFloat(priceString.replace(/[^0-9.]/g, ''));
//   };

//   // Filter and sort products
//   const filteredProducts = products.filter(product => {
//     // Category filter
//     const categoryMatch = selectedCategory
//       ? product.category.includes(selectedCategory)
//       : true;

//     // Gender filter
//     const genderMatch = selectedFilters.Gender.length === 0 ||
//       selectedFilters.Gender.some(gender => product.category.includes(gender));

//     // Kids filter
//     const kidsMatch = selectedFilters.Kids.length === 0 ||
//       selectedFilters.Kids.some(kid => product.category.includes(kid));

//     // Price filter
//     const priceMatch = selectedFilters['Shop By Price'].length === 0 ||
//       selectedFilters['Shop By Price'].some(range => {
//         const [min, max] = (range as string).split('-').map(str =>
//           parsePrice(str.replace('Under', '').trim())
//         );
//         const productPrice = parsePrice(product.price);

//         if ((range as string).startsWith('Under')) return productPrice <= max;
//         return productPrice >= min && productPrice <= max;
//       });

//     return categoryMatch && genderMatch && kidsMatch && priceMatch;
//   });

//   // Sorting logic
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     const priceA = parsePrice(a.price);
//     const priceB = parsePrice(b.price);

//     switch (sortBy) {
//       case 'price_asc': return priceA - priceB;
//       case 'price_desc': return priceB - priceA;
//       // case 'newest': return new Date(b.dateAdded) - new Date(a.dateAdded);
//       default: return 0;
//     }
//   });

//   // Handle filter changes
//   const handleFilterChange = (filterTitle: string, option: string) => {
//     setSelectedFilters(prev => ({
//       ...prev,
//       [filterTitle]: prev[filterTitle].includes(option)
//         ? prev[filterTitle].filter(item => item !== option)
//         : [...prev[filterTitle], option]
//     }));
//   };

//   // Close sort dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (sortButtonRef.current && !sortButtonRef.current.contains(event.target as Node)) {
//         setIsSortOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleAddToCart = (product: typeof products[number]) => {
//     addItem({
//         name: product.title,
//         id: product.id.toString(),
//         price: parsePrice(product.price),
//         currency: 'INR',
//         image: product.image.src,
//         price_id: product.price_id // Add this to your product data
//       });
  
//       toast({
//         title: "Product Added",
//         description: `${product.title} has been added to your cart`,
//         duration: 3000,
//       })
    
//   };


//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <Toaster />
//       {/* Page Header */}
//       <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//         <h1 className="text-2xl lg:text-3xl font-medium animate-fade-in">
//           New ({sortedProducts.length})
//         </h1>
//         <div className="flex gap-4 md:gap-6">
//           <div className="relative" ref={sortButtonRef}>
//             <button
//               onClick={() => setIsSortOpen(!isSortOpen)}
//               className="flex items-center gap-1 hover:opacity-80 transition-opacity"
//             >
//               <span className="text-lg">Sort By</span>
//               <IoIosArrowDown className="w-5 h-5 mt-0.5" />
//             </button>
//             {isSortOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                 <ul className="py-2">
//                   <li>
//                     <button
//                       onClick={() => {
//                         setSortBy('newest');
//                         setIsSortOpen(false);
//                       }}
//                       className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                     >
//                       Newest
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                         setSortBy('price_asc');
//                         setIsSortOpen(false);
//                       }}
//                       className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                     >
//                       Price: Low to High
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                         setSortBy('price_desc');
//                         setIsSortOpen(false);
//                       }}
//                       className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                     >
//                       Price: High to Low
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Mobile Filters */}
//       <div className="block md:hidden mb-10">
//         <Sheet>
//           <SheetTrigger className="bg-white p-4 rounded-lg border border-gray-200 w-auto">
//             <Menu />
//           </SheetTrigger>
//           <SheetContent side="right" className="max-h-100 overflow-y-auto">
//             <aside className="space-y-6">
//               <div className="bg-white p-4 rounded-lg border border-gray-200">
//                 <h2 className="text-lg font-medium mb-4">Categories</h2>
//                 <ul className="space-y-3 max-h-60 overflow-y-auto">
//                   {categories.map((category, index) => (
//                     <li
//                       key={index}
//                       onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
//                       className={`text-base cursor-pointer ${selectedCategory === category
//                           ? 'text-primary font-semibold'
//                           : 'hover:text-primary'
//                         }`}
//                     >
//                       {category}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {filters.map((filter) => (
//                 <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//                   <Accordion type="single" collapsible>
//                     <AccordionItem value={filter.title}>
//                       <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                         {filter.title}
//                       </AccordionTrigger>
//                       <AccordionContent className="pt-2 space-y-3">
//                         {filter.options.map((option, index) => (
//                           <label key={index} className="flex items-center gap-3 hover:opacity-80">
//                             <input
//                               type="checkbox"
//                               checked={selectedFilters[filter.title].includes(option)}
//                               onChange={() => handleFilterChange(filter.title, option)}
//                               className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                             />
//                             <span className="text-base">{option}</span>
//                           </label>
//                         ))}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 </div>
//               ))}
//             </aside>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Desktop Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Desktop Filters */}
//         <aside className="lg:col-span-3 space-y-6 hidden md:block">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h2 className="text-lg font-medium mb-4">Categories</h2>
//             <ul className="space-y-3 max-h-60 overflow-y-auto">
//               {categories.map((category, index) => (
//                 <li
//                   key={index}
//                   onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
//                   className={`text-base cursor-pointer ${selectedCategory === category
//                       ? 'text-primary font-semibold scale-105'
//                       : 'hover:text-primary hover:scale-105'
//                     }`}
//                 >
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {filters.map((filter) => (
//             <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//               <Accordion type="single" collapsible>
//                 <AccordionItem value={filter.title}>
//                   <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                     {filter.title}
//                   </AccordionTrigger>
//                   <AccordionContent className="pt-2 space-y-3">
//                     {filter.options.map((option, index) => (
//                       <label key={index} className="flex items-center gap-3 hover:opacity-80">
//                         <input
//                           type="checkbox"
//                           checked={selectedFilters[filter.title].includes(option)}
//                           onChange={() => handleFilterChange(filter.title, option)}
//                           className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                         />
//                         <span className="text-base">{option}</span>
//                       </label>
//                     ))}
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           ))}
//         </aside>

//         {/* Products Grid */}
//         <main className="lg:col-span-9">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedProducts.map((product) => (
//               <article key={product.id} className="group relative bg-white p-4 rounded-lg border border-gray-200">
//                 <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover group-hover:opacity-90 transition-opacity"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                 </div>
//                 <div className="mt-4 space-y-2">
//                   {product.badge && (
//                     <span className="block text-sm font-medium text-[#9E3500] animate-pulse">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h2 className="text-lg font-medium">{product.title}</h2>
//                   <p className="text-gray-600">{product.category}</p>
//                   <p className="text-gray-600">{product.colors} Colour</p>
//                   <p className="text-lg font-medium">MRP: {product.price}</p>
//                   <Button
//                     onClick={() => handleAddToCart(product)}
//                     className="w-full mt-2"
//                   >
//                     Add to Cart
//                   </Button>
                  
//                 </div>
//               </article>
//             ))}
//           </div>

//           <section className="mt-16">
//             <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-1 text-sm border-2 cursor-pointer border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-50"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
