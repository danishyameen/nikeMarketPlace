"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import EssentialsPic1 from "@/app/images/EssentialsPic1.png";
import EssentialsPic2 from "@/app/images/EssentialsPic2.png";
import EssentialsPic3 from "@/app/images/EssentialsPic3.png";
import Link from "next/link";

export default function EssentialsSection() {
    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <h2 className="font-medium text-2xl md:text-3xl mb-8 text-center sm:text-left">The Essentials</h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Men's Section */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={EssentialsPic1}
                            alt="EssentialsPic1"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
                            <Link href="/catagories/mens">
                                <motion.button
                                    className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Men's
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Women's Section */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={EssentialsPic2}
                            alt="EssentialsPic2"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
                            <Link href="/catagories/womens">
                                <motion.button
                                    className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Women's
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Kids' Section */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={EssentialsPic3}
                            alt="EssentialsPic3"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
                            <Link href="/catagories/kids">
                                <motion.button
                                    className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Kids
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}




// import Image from "next/image";
// import EssentialsPic1 from "@/app/images/EssentialsPic1.png"
// import EssentialsPic2 from "@/app/images/EssentialsPic2.png"
// import EssentialsPic3 from "@/app/images/EssentialsPic3.png"
// import Link from "next/link";



// export default function EssentialsSection() {
//     return (
//         <section className="py-10">
//             <div className="max-w-6xl mx-auto px-4">
//                 {/* Title */}
//                 <h2 className="font-medium text-2xl md:text-3xl mb-8 text-center">The Essentials</h2>

//                 {/* Responsive Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {/* Men's Section */}
//                     <div className="relative group">
//                         <Image
//                             src={EssentialsPic1}
//                             alt="EssentialsPic1"
//                             className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
//                             <Link href="/catagories/mens"> <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100">
//                                 Men's
//                             </button></Link>
//                         </div>
//                     </div>

//                     {/* Women's Section */}
//                     <div className="relative group">
//                         <Image
//                             src={EssentialsPic2}
//                             alt="EssentialsPic2"
//                             className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
//                             <Link href="/catagories/womens">  <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100">
//                                 Women's
//                             </button></Link>
//                         </div>
//                     </div>

//                     {/* Kids' Section */}
//                     <div className="relative group">
//                         <Image
//                             src={EssentialsPic3}
//                             alt="EssentialsPic3"
//                             className="object-cover w-full h-full"
//                         />
//                         <div className="absolute inset-0 flex justify-center items-end pb-8 group-hover:pb-10 transition-all">
//                             <Link href="/catagories/kids">   <button className="px-6 py-2 bg-white text-black font-medium text-sm rounded-full shadow-md hover:bg-gray-100">
//                                 Kids
//                             </button></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

