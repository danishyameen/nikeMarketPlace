"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import JordanBrandPic1 from "@/app/images/jordanBrandPic1.png";
import JordanBrandPic2 from "@/app/images/jordanBrandPic2.png";

export default function JordanBrand() {
    return (
        <motion.section
            className="py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.h2
                    className="font-medium text-2xl md:text-3xl mb-6 text-center sm:text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Don't Miss
                </motion.h2>

                {/* Grid Layout for Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[JordanBrandPic1, JordanBrandPic2].map((pic, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={pic}
                                alt={`JordanBrandPic${index + 1}`}
                                className="object-cover w-full h-full transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Text Content */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h1 className="font-medium text-2xl sm:text-4xl md:text-5xl mb-4">
                        FLIGHT ESSENTIALS
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-gray-600">
                        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="mt-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="px-8 py-3 bg-black text-white font-medium text-lg rounded-full hover:bg-gray-800 transition-all">
                        Shop
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
}



// import Image from "next/image";
// import JordanBrandPic1 from "@/app/images/jordanBrandPic1.png";
// import JordanBrandPic2 from "@/app/images/jordanBrandPic2.png";

// export default function JordanBrand() {
//     return (
//         <section className="py-10">
//             <div className="max-w-6xl mx-auto px-4">
//                 {/* Header */}
//                 <h2 className="font-medium text-2xl md:text-3xl mb-6 text-center sm:text-left">Don't Miss</h2>

//                 {/* Grid Layout for Images */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="relative">
//                         <Image
//                             src={JordanBrandPic1}
//                             alt="JordanBrandPic1"
//                             className="object-cover w-full h-full"
//                         />
//                     </div>
//                     <div className="relative">
//                         <Image
//                             src={JordanBrandPic2}
//                             alt="JordanBrandPic2"
//                             className="object-cover w-full h-full"
//                         />
//                     </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="text-center mt-8">
//                     <h1 className="font-medium text-2xl sm:text-4xl md:text-5xl mb-4">FLIGHT ESSENTIALS</h1>
//                     <p className="text-sm sm:text-base md:text-lg font-normal text-gray-600">
//                         Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
//                     </p>
//                 </div>

//                 {/* CTA Button */}
//                 <div className="mt-6 flex justify-center">
//                     <button className="px-8 py-3 bg-black text-white font-medium text-lg rounded-full hover:bg-gray-800 transition-all">
//                         Shop
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }
