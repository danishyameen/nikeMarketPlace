"use client"

"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Categories() {
    return (
        <motion.section
            className="py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-5xl mx-auto px-4 sm:block hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
                        { title: "Shoes", items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
                        { title: "Clothing", items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"] },
                        { title: "Kid's", items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"] }
                    ].map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="font-medium mb-5 text-lg transition-colors hover:text-gray-800">{category.title}</h1>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {category.items.map((item, i) => (
                                    <li key={i} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Accordion (Mobile) */}
            <div className="block sm:hidden">
                {[
                    { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
                    { title: "Shoes", items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
                    { title: "Clothing", items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"] },
                    { title: "Kid's", items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"] }
                ].map((category, index) => (
                    <motion.div
                        key={index}
                        className="border-t-2 mt-2 border-gray-300 max-w-5xl mx-auto px-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger className="text-[16px] font-medium">{category.title}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}