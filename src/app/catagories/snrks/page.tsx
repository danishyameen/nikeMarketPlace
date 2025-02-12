"use client"
import { Suspense, useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io"
import comparePic from "@/app/images/compare.png"
import Loading from "@/app/loading";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add these animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const hoverVariants = {
    hover: { y: -5, transition: { duration: 0.2 } }
};


interface Product {
    _id: string;
    image: string;
    status?: string;
    productName: string;
    category: string;
    colors: string[];
    price: string;
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
  
  export default function MensProductsPage() {
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
  
    // Function to handle adding a product to the cart
    const handleAddToCart = (product: Product) => {
      // Retrieve existing cart items from localStorage
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  
      // Check if the product already exists in the cart
      const isProductInCart = cartItems.some((item: Product) => item._id === product._id);
  
      if (!isProductInCart) {
        // Add the product to the cart
        const updatedCartItems = [...cartItems, product];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
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
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toast Container for Notifications */}
        <ToastContainer />
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-auto"
        >
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
            SNRKS Products
          </h1>
        </motion.div>
  
        <header className="hidden flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-2xl lg:text-3xl font-medium">New (500)</h1>
          <div className="flex gap-4 md:gap-6">
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-lg">Hide Filters</span>
              <Image
                src={comparePic}
                alt="Compare products"
                width={24}
                height={24}
                className="shrink-0"
              />
            </button>
            <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="text-lg">Sort By</span>
              <IoIosArrowDown className="w-5 h-5 mt-0.5" />
            </button>
          </div>
        </header>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3 space-y-6 hidden">
            {/* Animated filters */}
            {filters.map((filter, index) => (
              <motion.div
                key={filter.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg border border-gray-200"
              >
                <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`filter-${index}`}>
                      <AccordionTrigger className="text-lg font-medium hover:no-underline">
                        {filter.title}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 space-y-3">
                        {filter.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
                            />
                            <span className="text-base">{option}</span>
                          </label>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </aside>
  
          <main className="lg:col-span-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product, index) => (
                <Suspense key={product._id} fallback={<Loading />}>
                  <motion.article
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.productName}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>
  
                    {/* Product details */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 space-y-2"
                    >
                      {product.status && (
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="block text-sm font-medium text-[#9E3500]"
                        >
                          {product.status}
                        </motion.span>
                      )}
                      <h2 className="text-lg font-medium">{product.productName}</h2>
                      <p className="text-gray-600">{product.category}</p>
                      <p className="text-gray-600">{product.colors.join(", ")} Colour</p>
                      <motion.p
                        whileHover={{ x: 5 }}
                        className="text-lg font-medium"
                      >
                        MRP: ₹ {product.price}
                      </motion.p>
  
                      {/* View Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        onClick={() => {
                          console.log(`Viewing product: ${product.productName}`);
                        }}
                      >
                        <FaEye className="h-5 w-5" />
                        <span>View</span>
                      </motion.button>
  
                      {/* Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FaShoppingCart className="h-5 w-5" />
                        <span>Add to Cart</span>
                      </motion.button>
                    </motion.div>
                  </motion.article>
                </Suspense>
              ))}
            </motion.div>
  
            {/* Related Categories */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="mt-16"
            >
              <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="px-4 py-1 text-sm border-2 border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-50 cursor-pointer transition-colors"
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


// "use client"
// import { Suspense, useEffect, useState } from "react";
// import { urlFor } from "@/sanity/lib/image";
// import { client } from "@/sanity/lib/client";
// import Loading from "@/app/loading";
// import { motion } from "framer-motion";
// import Image from "next/image"
// import { FaEye, FaShoppingCart } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io"
// import comparePic from "@/app/images/compare.png"

// interface Product {
//   _id: string;
//   image: string;
//   status?: string;
//   productName: string;
//   category: string;
//   colors: string[]; // Updated to an array of strings
//   price: string;
// }


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   hover: { scale: 1.05 }
// };

// const buttonVariants = {
//   hover: { scale: 1.1, transition: { duration: 0.2 } }
// };

// const tagVariants = {
//   hover: { scale: 1.05, backgroundColor: "#f3f4f6", transition: { duration: 0.2 } }
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

// export default function SnrksProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product" && category match "Shoes"] {
//           productName,
//           price,
//           category,
//           image,
//           description,
//           colors,
//           _id,
//           status
//         }`;

//       const data = await client.fetch(query);
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);
//   return (
//     <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
//         SNRKS Products
//       </motion.h1>

//       <motion.header variants={itemVariants} className="hidden flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//         <h1 className="text-2xl lg:text-3xl font-medium">New (500)</h1>
//         <div className="flex gap-4 md:gap-6">
//           <motion.button variants={buttonVariants} whileHover="hover" className="flex items-center gap-2">
//             <span className="text-lg">Hide Filters</span>
//             <Image src={comparePic} alt="Compare products" width={24} height={24} />
//           </motion.button>
//           <motion.button variants={buttonVariants} whileHover="hover" className="flex items-center gap-1">
//             <span className="text-lg">Sort By</span>
//             <IoIosArrowDown className="w-5 h-5 mt-0.5" />
//           </motion.button>
//         </div>
//       </motion.header>

//       <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <Suspense key={product._id} fallback={<Loading />}>

//             <motion.article

//               variants={itemVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="group relative bg-white p-4 rounded-lg border border-gray-200"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
//               >
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.productName}
//                   fill
//                   className="object-cover group-hover:opacity-90 transition-opacity"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </motion.div>

//               {/* Product details */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mt-4 space-y-2"
//               >
//                 {product.status && (
//                   <motion.span
//                     whileHover={{ scale: 1.1 }}
//                     className="block text-sm font-medium text-[#9E3500]"
//                   >
//                     {product.status}
//                   </motion.span>
//                 )}
//                 <h2 className="text-lg font-medium">{product.productName}</h2>
//                 <p className="text-gray-600">{product.category}</p>
//                 <p className="text-gray-600">{product.colors.join(", ")} Colour</p>
//                 <motion.p
//                   whileHover={{ x: 5 }}
//                   className="text-lg font-medium"
//                 >
//                   MRP: ₹ {product.price}
//                 </motion.p>
//                 {/* View Button with Icon */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white 
//                        py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex-shrink-0"
//                   onClick={() => {
//                     // Add your view logic here
//                     console.log(`Viewing product: ${product.productName}`);
//                   }}
//                 >
//                   <FaEye className="h-5 w-5" /> {/* Eye icon from React Icons */}
//                   <span>View</span>
//                 </motion.button>

//                 {/* Add to Cart Button with Icon */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 text-white 
//                        py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 flex-shrink-0"
//                   onClick={() => {
//                     // Add your add to cart logic here
//                     console.log(`Added to cart: ${product.productName}`);
//                   }}
//                 >
//                   <FaShoppingCart className="h-5 w-5" /> {/* Shopping cart icon from React Icons */}
//                   <span>Add to Cart</span>
//                 </motion.button>
//               </motion.div>
//             </motion.article>
//           </Suspense>
//         ))}
//       </motion.div>

//       <motion.section variants={itemVariants} className="mt-16">
//         <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
//         <div className="flex flex-wrap gap-2">
//           {["Best Selling Products", "Best Shoes"].map((tag, index) => (
//             <motion.span key={index} variants={tagVariants} whileHover="hover" className="px-4 py-1 text-sm border-2 border-gray-300 rounded-full bg-white shadow-sm">
//               {tag}
//             </motion.span>
//           ))}
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// }
