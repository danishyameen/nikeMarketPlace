"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import featured from "@/app/images/featured.png";

export default function Featured() {
    return (
        <motion.section 
            className="mt-20 mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    className="text-center sm:text-left mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="font-medium text-3xl sm:text-4xl mb-5">Featured</h2>
                </motion.div>

                {/* Image with Responsive Sizing */}
                <motion.div 
                    className="w-full"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={featured}
                        alt="heroImage"
                        className="w-full h-auto sm:h-[700px] sm:w-[1200px] object-cover mx-auto"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div 
                    className="w-full mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-5xl mb-5 font-medium">
                        STEP INTO WHAT FEELS GOOD
                    </h1>
                    <p className="text-lg sm:text-xl font-normal leading-6 text-gray-600 mx-auto max-w-prose">
                        Cause everyone should know the feeling of running in that perfect pair.
                    </p>

                    {/* Button */}
                    <motion.div 
                        className="heroSectionButton text-center mt-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <button className="px-8 py-3 bg-[#111111] text-white font-medium text-lg sm:text-xl rounded-full">
                            Find Your Shoe
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
