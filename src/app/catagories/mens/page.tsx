"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io"
import comparePic from "@/app/images/compare.png"
import product_1 from "@/app/images/products/Rectangle.png"
import product_2 from "@/app/images/products/Rectangle (1).png"
import product_4 from "@/app/images/products/Rectangle (3).png"
import product_7 from "@/app/images/products/Rectangle (6).png"
import product_8 from "@/app/images/products/Rectangle (7).png"
import product_9 from "@/app/images/products/Rectangle (8).png"
import product_10 from "@/app/images/products/Rectangle (9).png"
import product_15 from "@/app/images/products/Rectangle (14).png"
import product_16 from "@/app/images/products/Rectangle (15).png"
import product_18 from "@/app/images/products/Rectangle (17).png"
import product_23 from "@/app/images/products/Rectangle (22).png"
import product_24 from "@/app/images/products/Rectangle (23).png"
import product_25 from "@/app/images/products/Rectangle (24).png"
import product_26 from "@/app/images/products/Rectangle (25).png"
import product_30 from "@/app/images/products/Rectangle (28).png"

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

const products = [
    {
        id: 1,
        image: product_1,
        badge: "Just In",
        title: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 10 795.00"
    }, {
        id: 2,
        image: product_2,
        badge: "Just In",
        title: "Nike Court Vision Low Next Nature",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 4 995.00"
    }, {
        id: 4,
        image: product_4,
        badge: "Just In",
        title: "Nike Air Force 1 React",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 13 295.00"
    },
    {
        id: 7,
        image: product_7,
        badge: "Promo Exclusion",
        title: "Nike Dunk Low Retro SE",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 9 695.00"
    },
    {
        id: 8,
        image: product_8,
        badge: "Sustainable Materials",
        title: "Nike Dri-FIT UV Hyverse",
        category: "Men's Short-Sleeve Graphic Fitness Top",
        colors: 1,
        price: "₹ 2 495.00"
    },
    {
        id: 9,
        image: product_9,
        badge: "Just In",
        title: "Nike Court Vision Low",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 5 695.00"
    },
    {
        id: 10,
        image: product_10,
        badge: "Just In",
        title: "Nike Dri-FIT Ready",
        category: "Men's Short-Sleeve Fitness Top",
        colors: 3,
        price: "₹ 2 495.00"
    }, {
        id: 15,
        image: product_15,
        badge: "Just In",
        title: "Nike Pro Dri-FIT",
        category: "Men's Tight-Fit Sleeveless Top",
        colors: 1,
        price: "₹ 1 495.00"
    },
    {
        id: 16,
        image: product_16,
        badge: "Just In",
        title: "Nike Dunk Low Retro",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 8 695.00"
    }, {
        id: 18,
        image: product_18,
        badge: "Just In",
        title: "Nike Dri-FIT UV Miler",
        category: "Men's Short-Sleeve Running Top",
        colors: 1,
        price: "₹ 1 695.00"
    }, {
        id: 23,
        image: product_23,
        badge: "Just In",
        title: "Nike SB Zoom Janoski OG+",
        category: "Shoes",
        colors: 1,
        price: "₹ 8 595.00"
    }, {
        id: 24,
        image: product_24,
        badge: "Just In",
        title: "Nike Dri-FIT Run Division Rise 365",
        category: "Men's Running Tank",
        colors: 2,
        price: "₹ 3 495.00"
    },
    {
        id: 25,
        image: product_25,
        badge: "Just In",
        title: "Nike Dri-FIT Challenger",
        category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
        colors: 1,
        price: "₹ 2 495.00"
    }, {
        id: 26,
        image: product_26,
        badge: "Just In",
        title: "Jordan Series ES",
        category: "Men's Shoes",
        colors: 2,
        price: "₹ 7 495.00"
    }, {
        id: 30,
        image: product_30,
        badge: "Just In",
        title: "Nike SB Force 58",
        category: "Skate Shoe",
        colors: 1,
        price: "₹5,995.00",
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

export default function MensProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 w-auto"
            >
                <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
                    Men's Products
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
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {products.map((product, index) => (
                            <motion.article
                                key={product.id}
                                variants={itemVariants}
                                whileHover="hover"
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

                                {/* Product details with animated elements */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-4 space-y-2"
                                >
                                    <div className="mt-4 space-y-2">
                                        {product.badge && (
                                            <span className="block text-sm font-medium text-[#9E3500]">
                                                {product.badge}
                                            </span>
                                        )}
                                        <h2 className="text-lg font-medium">{product.title}</h2>
                                        <p className="text-gray-600">{product.category}</p>
                                        <p className="text-gray-600">{product.colors} Colour</p>
                                        <p className="text-lg font-medium">MRP: ₹ {product.price}</p>
                                    </div>
                                </motion.div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Animated related tags */}
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


// export default function mensProductsPage() {
//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="flex-1 w-auto">
//                 <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
//                     Men's Products
//                 </h1>
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
