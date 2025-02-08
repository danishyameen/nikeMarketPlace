'use client'

import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { Toast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

import comparePic from "@/app/images/compare.png"
import product_1 from "@/app/images/products/Rectangle.png"
import product_2 from "@/app/images/products/Rectangle (1).png"
import product_3 from "@/app/images/products/Rectangle (2).png"
import product_4 from "@/app/images/products/Rectangle (3).png"
import product_5 from "@/app/images/products/Rectangle (4).png"
import product_6 from "@/app/images/products/Rectangle (5).png"
import product_7 from "@/app/images/products/Rectangle (6).png"
import product_8 from "@/app/images/products/Rectangle (7).png"
import product_9 from "@/app/images/products/Rectangle (8).png"
import product_10 from "@/app/images/products/Rectangle (9).png"
import product_11 from "@/app/images/products/Rectangle (10).png"
import product_12 from "@/app/images/products/Rectangle (11).png"
import product_13 from "@/app/images/products/Rectangle (12).png"
import product_14 from "@/app/images/products/Rectangle (13).png"
import product_15 from "@/app/images/products/Rectangle (14).png"
import product_16 from "@/app/images/products/Rectangle (15).png"
import product_17 from "@/app/images/products/Rectangle (16).png"
import product_18 from "@/app/images/products/Rectangle (17).png"
import product_19 from "@/app/images/products/Rectangle (18).png"
import product_20 from "@/app/images/products/Rectangle (19).png"
import product_21 from "@/app/images/products/Rectangle (20).png"
import product_22 from "@/app/images/products/Rectangle (21).png"
import product_23 from "@/app/images/products/Rectangle (22).png"
import product_24 from "@/app/images/products/Rectangle (23).png"
import product_25 from "@/app/images/products/Rectangle (24).png"
import product_26 from "@/app/images/products/Rectangle (25).png"
import product_27 from "@/app/images/products/Rectangle.jpg"
import product_28 from "@/app/images/products/Rectangle (26).png"
import product_29 from "@/app/images/products/Rectangle (27).png"
import product_30 from "@/app/images/products/Rectangle (28).png"
import { toast } from '@/hooks/use-toast';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  badge: string,
  category: string,
  colors: number,
  price_id: string
  // other product properties
};

const products = [
  // Add all product imports here
  {
    id: 1,
    image: product_1,
    badge: "Just In",
    title: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 10 795.00",
    price_id: "price_1"
  },
  {
    id: 2,
    image: product_2,
    badge: "Just In",
    title: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 4 995.00",
    price_id: "price_2"
  },
  {
    id: 3,
    image: product_3,
    badge: "Just In",
    title: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8 695.00",
    price_id: "price_3"
  },
  {
    id: 4,
    image: product_4,
    badge: "Just In",
    title: "Nike Air Force 1 React",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 13 295.00",
    price_id: "price_4"
  },
  {
    id: 5,
    image: product_5,
    badge: "Promo Exclusion",
    title: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 11 895.00",
    price_id: "price_5"
  },
  {
    id: 6,
    image: product_6,
    badge: "Just In",
    title: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    colors: 1,
    price: "₹ 2 895.00",
    price_id: "price_6"
  },
  {
    id: 7,
    image: product_7,
    badge: "Promo Exclusion",
    title: "Nike Dunk Low Retro SE",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 9 695.00",
    price_id: "price_7"
  },
  {
    id: 8,
    image: product_8,
    badge: "Sustainable Materials",
    title: "Nike Dri-FIT UV Hyverse",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    colors: 1,
    price: "₹ 2 495.00",
    price_id: "price_8"
  },
  {
    id: 9,
    image: product_9,
    badge: "Just In",
    title: "Nike Court Vision Low",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 5 695.00",
    price_id: "price_9"
  },
  {
    id: 10,
    image: product_10,
    badge: "Just In",
    title: "Nike Dri-FIT Ready",
    category: "Men's Short-Sleeve Fitness Top",
    colors: 3,
    price: "₹ 2 495.00",
    price_id: "price_10"
  },
  {
    id: 11,
    image: product_11,
    badge: "Just In",
    title: "Nike One Leak Protection: Period",
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    colors: 2,
    price: "₹ 3 395.00",
    price_id: "price_11"
  },
  {
    id: 12,
    image: product_12,
    badge: "Just In",
    title: "Nike Air Force 1 LV8 3",
    category: "Older Kids' Shoe",
    colors: 1,
    price: "₹ 7 495.00",
    price_id: "price_12"
  },
  {
    id: 13,
    image: product_13,
    badge: "Just In",
    title: "Nike Blazer Low Platform",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8 195.00",
    price_id: "price_13"
  },
  {
    id: 14,
    image: product_14,
    badge: "Just In",
    title: "Nike Air Force 1 '07",
    category: "Women's Shoe",
    colors: 1,
    price: "₹ 8 195.00",
    price_id: "price_14"
  },
  {
    id: 15,
    image: product_15,
    badge: "Just In",
    title: "Nike Pro Dri-FIT",
    category: "Men's Tight-Fit Sleeveless Top",
    colors: 1,
    price: "₹ 1 495.00",
    price_id: "price_15"
  },
  {
    id: 16,
    image: product_16,
    badge: "Just In",
    title: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 8 695.00",
    price_id: "price_16"
  },
  {
    id: 17,
    image: product_17,
    badge: "Just In",
    title: "Nike Air Max SC",
    category: "Women's Shoes",
    colors: 2,
    price: "₹ 5 995.00",
    price_id: "price_17"
  },
  {
    id: 18,
    image: product_18,
    badge: "Just In",
    title: "Nike Dri-FIT UV Miler",
    category: "Men's Short-Sleeve Running Top",
    colors: 1,
    price: "₹ 1 695.00",
    price_id: "price_18"
  },
  {
    id: 19,
    image: product_19,
    badge: "Just In",
    title: "Nike Air Max SYSTM",
    category: "Older Kids' Shoes",
    colors: 1,
    price: "₹ 6 495.00",
    price_id: "price_19"
  },
  {
    id: 20,
    image: product_20,
    badge: "Just In",
    title: "Nike Alate All U",
    category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    colors: 1,
    price: "₹ 2 195.00",
    price_id: "price_20"
  },
  {
    id: 21,
    image: product_21,
    badge: "Just In",
    title: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    colors: 2,
    price: "₹ 7 495.00",
    price_id: "price_21"
  },
  {
    id: 22,
    image: product_22,
    badge: "Just In",
    title: "Nike Swoosh",
    category: "Women's Medium-support Padded Sports Bra Tank",
    colors: 2,
    price: "₹ 3 095.00",
    price_id: "price_22"
  },
  {
    id: 23,
    image: product_23,
    badge: "Just In",
    title: "Nike SB Zoom Janoski OG+",
    category: "Shoes",
    colors: 1,
    price: "₹ 8 595.00",
    price_id: "price_23"
  },
  {
    id: 24,
    image: product_24,
    badge: "Just In",
    title: "Nike Dri-FIT Run Division Rise 365",
    category: "Men's Running Tank",
    colors: 2,
    price: "₹ 3 495.00",
    price_id: "price_24"
  },
  {
    id: 25,
    image: product_25,
    badge: "Just In",
    title: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    colors: 1,
    price: "₹ 2 495.00",
    price_id: "price_25"
  },
  {
    id: 26,
    image: product_26,
    badge: "Just In",
    title: "Jordan Series ES",
    category: "Men's Shoes",
    colors: 2,
    price: "₹ 7 495.00",
    price_id: "price_26"
  },
  {
    id: 27,
    image: product_27,
    badge: "Just In",
    title: "Nike Outdoor Play",
    category: "Older Kids' Oversized Woven Jacket",
    colors: 1,
    price: "₹ 3 895.00",
    price_id: "price_27"
  },
  {
    id: 28,
    image: product_28,
    badge: "Just In",
    title: "Nike Sportswear Trend",
    category: "Older Kids' (Girls') High-waisted Woven Shorts",
    colors: 2,
    price: "₹ 2 495.00",
    price_id: "price_28"
  },
  {
    id: 29,
    image: product_29,
    badge: "Just In",
    title: "Nike Blazer Low '77 Jumbo",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8 595.00",
    price_id: "price_29"
  },
  {
    id: 30,
    image: product_30,
    badge: "Just In",
    title: "Nike SB Force 58",
    category: "Skate Shoe",
    colors: 1,
    price: "₹5,995.00",
    price_id: "price_30"
  },
  // ... repeat for all products
]

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
]

const categories = [
  "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts",
  "Jackets", "Trousers & Tights", "Shorts", "Tracksuits",
  "Jumpsuits & Rompers", "Skirts & Dresses", "Accessories & Equipment"
]

const tags = [
  "Best Selling Products", "Best Shoes", "New Basketball Shoes",
  "New Football Shoes", "New Men's Shoes", "New Running Shoes",
  "Best Men's Shoes", "New Jordan Shoes", "Best Women's Shoes",
  "Best Training & Gym"
]

export default function ProductsPage() {
  // State management
  type FilterOptions = {
    [key: string]: string[];
  };

  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
    'Gender': [],
    'Kids': [],
    'Shop By Price': []
  });
  const [sortBy, setSortBy] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortButtonRef = useRef<HTMLDivElement>(null);

  // Price parser utility
  const parsePrice = (priceString: string) => {
    return parseFloat(priceString.replace(/[^0-9.]/g, ''));
  };

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Category filter
    const categoryMatch = selectedCategory 
      ? product.category.includes(selectedCategory)
      : true;

    // Gender filter
    const genderMatch = selectedFilters.Gender.length === 0 || 
      selectedFilters.Gender.some(gender => product.category.includes(gender));

    // Kids filter
    const kidsMatch = selectedFilters.Kids.length === 0 ||
      selectedFilters.Kids.some(kid => product.category.includes(kid));

    // Price filter
    const priceMatch = selectedFilters['Shop By Price'].length === 0 ||
      selectedFilters['Shop By Price'].some(range => {
        const [min, max] = (range as string).split('-').map(str => 
          parsePrice(str.replace('Under', '').trim())
        );
        const productPrice = parsePrice(product.price);
        
        if ((range as string).startsWith('Under')) return productPrice <= max;
        return productPrice >= min && productPrice <= max;
      });

    return categoryMatch && genderMatch && kidsMatch && priceMatch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parsePrice(a.price);
    const priceB = parsePrice(b.price);

    switch(sortBy) {
      case 'price_asc': return priceA - priceB;
      case 'price_desc': return priceB - priceA;
      // case 'newest': return new Date(b.dateAdded) - new Date(a.dateAdded);
      default: return 0;
    }
  });

  // Handle filter changes
  const handleFilterChange = (filterTitle: string, option: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterTitle]: prev[filterTitle].includes(option)
        ? prev[filterTitle].filter(item => item !== option)
        : [...prev[filterTitle], option]
    }));
  };

  // Close sort dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortButtonRef.current && !sortButtonRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
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
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
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
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Filters */}
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

      {/* Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Desktop Filters */}
        <aside className="lg:col-span-3 space-y-6 hidden md:block">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium mb-4">Categories</h2>
            <ul className="space-y-3 max-h-60 overflow-y-auto">
              {categories.map((category, index) => (
                <li 
                  key={index}
                  onClick={() => setSelectedCategory(prev => prev === category ? '' : category)}
                  className={`text-base cursor-pointer ${
                    selectedCategory === category 
                      ? 'text-primary font-semibold scale-105' 
                      : 'hover:text-primary hover:scale-105'
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

        {/* Products Grid */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <article key={product.id} className="group relative bg-white p-4 rounded-lg border border-gray-200">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  {product.badge && (
                    <span className="block text-sm font-medium text-[#9E3500] animate-pulse">
                      {product.badge}
                    </span>
                  )}
                  <h2 className="text-lg font-medium">{product.title}</h2>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-gray-600">{product.colors} Colour</p>
                  <p className="text-lg font-medium">MRP: {product.price}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm border-2 cursor-pointer border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

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
