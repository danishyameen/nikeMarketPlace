"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io"
import comparePic from "@/app/images/compare.png"
import product_3 from "@/app/images/products/Rectangle (2).png"
import product_5 from "@/app/images/products/Rectangle (4).png"
import product_6 from "@/app/images/products/Rectangle (5).png"
import product_11 from "@/app/images/products/Rectangle (10).png"
import product_13 from "@/app/images/products/Rectangle (12).png"
import product_14 from "@/app/images/products/Rectangle (13).png"
import product_17 from "@/app/images/products/Rectangle (16).png"
import product_20 from "@/app/images/products/Rectangle (19).png"
import product_21 from "@/app/images/products/Rectangle (20).png"
import product_22 from "@/app/images/products/Rectangle (21).png"
import product_29 from "@/app/images/products/Rectangle (27).png"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const hoverScale = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

const products = [
    {
        id: 3,
        image: product_3,
        badge: "Just In",
        title: "Nike Air Force 1 PLT.AF.ORM",
        category: "Women's Shoes",
        colors: 1,
        price: "₹ 8 695.00"
      },
      {
        id: 5,
        image: product_5,
        badge: "Promo Exclusion",
        title: "Air Jordan 1 Elevate Low",
        category: "Women's Shoes",
        colors: 1,
        price: "₹ 11 895.00"
      }, {
        id: 6,
        image: product_6,
        badge: "Just In",
        title: "Nike Standard Issue",
        category: "Women's Basketball Jersey",
        colors: 1,
        price: "₹ 2 895.00"
      },
      {
        id: 11,
        image: product_11,
        badge: "Just In",
        title: "Nike One Leak Protection: Period",
        category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
        colors: 2,
        price: "₹ 3 395.00"
      },
      {
        id: 13,
        image: product_13,
        badge: "Just In",
        title: "Nike Blazer Low Platform",
        category: "Women's Shoes",
        colors: 1,
        price: "₹ 8 195.00"
      },
      {
        id: 14,
        image: product_14,
        badge: "Just In",
        title: "Nike Air Force 1 '07",
        category: "Women's Shoe",
        colors: 1,
        price: "₹ 8 195.00"
      },
      {
        id: 17,
        image: product_17,
        badge: "Just In",
        title: "Nike Air Max SC",
        category: "Women's Shoes",
        colors: 2,
        price: "₹ 5 995.00"
      }, {
        id: 20,
        image: product_20,
        badge: "Just In",
        title: "Nike Alate All U",
        category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
        colors: 1,
        price: "₹ 2 195.00"
      },
      {
        id: 21,
        image: product_21,
        badge: "Just In",
        title: "Nike Court Legacy Lift",
        category: "Women's Shoes",
        colors: 2,
        price: "₹ 7 495.00"
      },
      {
        id: 22,
        image: product_22,
        badge: "Just In",
        title: "Nike Swoosh",
        category: "Women's Medium-support Padded Sports Bra Tank",
        colors: 2,
        price: "₹ 3 095.00"
      }, {
        id: 29,
        image: product_29,
        badge: "Just In",
        title: "Nike Blazer Low '77 Jumbo",
        category: "Women's Shoes",
        colors: 1,
        price: "₹ 8 595.00"
      },
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



export default function WomensProductsPage() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-auto"
        >
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
            Women's Products
          </h1>
        </motion.div>
  
        <header className="hidden  flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
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
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product, index) => (
                <motion.article
                  key={product.id}
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
                      src={product.image}
                      alt={product.title}
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
                    {product.badge && (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="block text-sm font-medium text-[#9E3500]"
                      >
                        {product.badge}
                      </motion.span>
                    )}
                    <h2 className="text-lg font-medium">{product.title}</h2>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-gray-600">{product.colors} Colour</p>
                    <motion.p 
                      whileHover={{ x: 5 }}
                      className="text-lg font-medium"
                    >
                      MRP: ₹ {product.price}
                    </motion.p>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
  
            {/* Related Tags */}
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


  // export default function womensProductsPage() {
//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="flex-1 w-auto">
//             <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
//               Women's Products
//             </h1>
//             </div>
//             <header className="hidden  flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//                 <h1 className="text-2xl lg:text-3xl font-medium">New (500)</h1>
//                 <div className="flex gap-4 md:gap-6">
//                     <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//                         <span className="text-lg">Hide Filters</span>
//                         <Image
//                             src={comparePic}
//                             alt="Compare products"
//                             width={24}
//                             height={24}
//                             className="shrink-0"
//                         />
//                     </button>
//                     <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
//                         <span className="text-lg">Sort By</span>
//                         <IoIosArrowDown className="w-5 h-5 mt-0.5" />
//                     </button>
//                 </div>
//             </header>

//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//                 {/* Filters Sidebar */}
//                 <aside className="lg:col-span-3 space-y-6 hidden">
//                     <div className="bg-white p-4 rounded-lg border border-gray-200">
//                         <h2 className="text-lg font-medium mb-4">Categories</h2>
//                         <ul className="space-y-3 max-h-60 overflow-y-auto">
//                             {categories.map((category, index) => (
//                                 <li key={index} className="text-base hover:text-primary cursor-pointer">
//                                     {category}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {filters.map((filter, index) => (
//                         <div key={filter.title} className="bg-white p-4 rounded-lg border border-gray-200">
//                             <Accordion type="single" collapsible>
//                                 <AccordionItem value={`filter-${index}`}>
//                                     <AccordionTrigger className="text-lg font-medium hover:no-underline">
//                                         {filter.title}
//                                     </AccordionTrigger>
//                                     <AccordionContent className="pt-2 space-y-3">
//                                         {filter.options.map((option, optionIndex) => (
//                                             <label key={optionIndex} className="flex items-center gap-3">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-primary"
//                                                 />
//                                                 <span className="text-base">{option}</span>
//                                             </label>
//                                         ))}
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             </Accordion>
//                         </div>
//                     ))}
//                 </aside>

//                 {/* Products Grid */}
//                 <main className="lg:col-span-12">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {products.map((product) => (
//                             <article key={product.id} className="group relative bg-white p-4 rounded-lg border border-gray-200">
//                                 {/* Product Image */}
//                                 <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
//                                     <Image
//                                         src={product.image}
//                                         alt={product.title}
//                                         fill
//                                         className="object-cover group-hover:opacity-90 transition-opacity"
//                                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                     />
//                                 </div>

//                                 {/* Product Details */}
//                                 <div className="mt-4 space-y-2">
//                                     {product.badge && (
//                                         <span className="block text-sm font-medium text-[#9E3500]">
//                                             {product.badge}
//                                         </span>
//                                     )}
//                                     <h2 className="text-lg font-medium">{product.title}</h2>
//                                     <p className="text-gray-600">{product.category}</p>
//                                     <p className="text-gray-600">{product.colors} Colour</p>
//                                     <p className="text-lg font-medium">MRP: ₹ {product.price}</p>
//                                 </div>
//                             </article>
//                         ))}
//                     </div>

//                     {/* Related Tags */}
//                     <section className="mt-16">
//                         <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
//                         <div className="flex flex-wrap gap-2">
//                             {tags.map((tag, index) => (
//                                 <span
//                                     key={index}
//                                     className="px-4 py-1 text-sm border-2 border-gray-300 rounded-full
//                              bg-white shadow-sm hover:bg-gray-50 transition-colors"
//                                 >
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     )
// }
