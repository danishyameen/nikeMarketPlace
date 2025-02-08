"use client"
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

import { IoIosArrowDown } from "react-icons/io"
import comparePic from "@/app/images/compare.png"
import product_1 from "@/app/images/products/Rectangle.png"
import product_2 from "@/app/images/products/Rectangle (1).png"
import product_3 from "@/app/images/products/Rectangle (2).png"
import product_4 from "@/app/images/products/Rectangle (3).png"
import product_5 from "@/app/images/products/Rectangle (4).png"
import product_7 from "@/app/images/products/Rectangle (6).png"
import product_9 from "@/app/images/products/Rectangle (8).png"
import product_12 from "@/app/images/products/Rectangle (11).png"
import product_13 from "@/app/images/products/Rectangle (12).png"
import product_14 from "@/app/images/products/Rectangle (13).png"
import product_16 from "@/app/images/products/Rectangle (15).png"
import product_17 from "@/app/images/products/Rectangle (16).png"
import product_19 from "@/app/images/products/Rectangle (18).png"
import product_21 from "@/app/images/products/Rectangle (20).png"
import product_23 from "@/app/images/products/Rectangle (22).png"
import product_26 from "@/app/images/products/Rectangle (25).png"
import product_29 from "@/app/images/products/Rectangle (27).png"
import product_30 from "@/app/images/products/Rectangle (28).png"

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
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
};

const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } }
};

const tagVariants = {
    hover: { scale: 1.05, backgroundColor: "#f3f4f6", transition: { duration: 0.2 } }
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
      },
      {
        id: 2,
        image: product_2,
        badge: "Just In",
        title: "Nike Court Vision Low Next Nature",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 4 995.00"
      },
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
        id: 4,
        image: product_4,
        badge: "Just In",
        title: "Nike Air Force 1 React",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 13 295.00"
      },
      {
        id: 5,
        image: product_5,
        badge: "Promo Exclusion",
        title: "Air Jordan 1 Elevate Low",
        category: "Women's Shoes",
        colors: 1,
        price: "₹ 11 895.00"
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
        id: 9,
        image: product_9,
        badge: "Just In",
        title: "Nike Court Vision Low",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 5 695.00"
      },
      {
        id: 12,
        image: product_12,
        badge: "Just In",
        title: "Nike Air Force 1 LV8 3",
        category: "Older Kids' Shoe",
        colors: 1,
        price: "₹ 7 495.00"
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
        id: 16,
        image: product_16,
        badge: "Just In",
        title: "Nike Dunk Low Retro",
        category: "Men's Shoes",
        colors: 1,
        price: "₹ 8 695.00"
      },
      {
        id: 17,
        image: product_17,
        badge: "Just In",
        title: "Nike Air Max SC",
        category: "Women's Shoes",
        colors: 2,
        price: "₹ 5 995.00"
      },
      {
        id: 19,
        image: product_19,
        badge: "Just In",
        title: "Nike Air Max SYSTM",
        category: "Older Kids' Shoes",
        colors: 1,
        price: "₹ 6 495.00"
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
        id: 23,
        image: product_23,
        badge: "Just In",
        title: "Nike SB Zoom Janoski OG+",
        category: "Shoes",
        colors: 1,
        price: "₹ 8 595.00"
      },
      {
        id: 26,
        image: product_26,
        badge: "Just In",
        title: "Jordan Series ES",
        category: "Men's Shoes",
        colors: 2,
        price: "₹ 7 495.00"
      },
      {
        id: 29,
        image: product_29,
        badge: "Just In",
        title: "Nike Blazer Low '77 Jumbo",
        category: "Women's Shoes",
        colors: 1,
        price: "₹ 8 595.00"
      },
      {
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

export default function SnrksProductsPage() {
    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl font-medium text-gray-900 text-center bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
                SNRKS Products
            </motion.h1>

            <motion.header variants={itemVariants} className="hidden flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h1 className="text-2xl lg:text-3xl font-medium">New (500)</h1>
                <div className="flex gap-4 md:gap-6">
                    <motion.button variants={buttonVariants} whileHover="hover" className="flex items-center gap-2">
                        <span className="text-lg">Hide Filters</span>
                        <Image src={comparePic} alt="Compare products" width={24} height={24} />
                    </motion.button>
                    <motion.button variants={buttonVariants} whileHover="hover" className="flex items-center gap-1">
                        <span className="text-lg">Sort By</span>
                        <IoIosArrowDown className="w-5 h-5 mt-0.5" />
                    </motion.button>
                </div>
            </motion.header>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <motion.article key={product.id} variants={itemVariants} whileHover="hover" className="group relative bg-white p-4 rounded-lg border border-gray-200">
                        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <Image src={product.image} alt={product.title} fill className="object-cover" />
                        </div>
                        <div className="mt-4 space-y-2">
                            {product.badge && (
                                <motion.span variants={itemVariants} className="block text-sm font-medium text-[#9E3500]">
                                    {product.badge}
                                </motion.span>
                            )}
                            <h2 className="text-lg font-medium">{product.title}</h2>
                            <p className="text-gray-600">{product.category}</p>
                            <p className="text-gray-600">{product.colors} Colour</p>
                            <p className="text-lg font-medium">MRP: {product.price}</p>
                        </div>
                    </motion.article>
                ))}
            </motion.div>

            <motion.section variants={itemVariants} className="mt-16">
                <h2 className="text-2xl font-medium mb-6">Related Categories</h2>
                <div className="flex flex-wrap gap-2">
                    {["Best Selling Products", "Best Shoes"].map((tag, index) => (
                        <motion.span key={index} variants={tagVariants} whileHover="hover" className="px-4 py-1 text-sm border-2 border-gray-300 rounded-full bg-white shadow-sm">
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </motion.section>
        </motion.div>
    );
}
