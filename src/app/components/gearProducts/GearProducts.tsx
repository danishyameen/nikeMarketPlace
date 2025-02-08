
"use client"

"use client"

import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import gearMenProducts1 from "@/app/images/gearMenProducts1.png";
import gearMenProducts2 from "@/app/images/gearMenProducts2.png";
import gearWomenProducts1 from "@/app/images/gearWomenProducts1.png";
import gearWomenProducts2 from "@/app/images/gearWomenProducts2.png";

const products = {
    men: [
        {
            image: gearMenProducts1,
            title: "Nike Dri-FIT ADV TechKnit Ultra",
            description: "Men's Short-Sleeve Running Top",
            price: "3 895",
        },
        {
            image: gearMenProducts2,
            title: "Nike Air Max Pulse",
            description: "Men's Shoes",
            price: "13 995",
        },
        {
          image: gearMenProducts1,
          title: "Nike Dri-FIT ADV TechKnit Ultra",
          description: "Men's Short-Sleeve Running Top",
          price: "3 895",
      },
    ],
    women: [
        {
            image: gearWomenProducts1,
            title: "Nike Air Max Pulse",
            description: "Women's Shoes",
            price: "13 995",
        },
        {
            image: gearWomenProducts2,
            title: "Nike Air Max Pulse",
            description: "Women's Shoes",
            price: "13 995",
        },
        {
          image: gearWomenProducts1,
          title: "Nike Air Max Pulse",
          description: "Women's Shoes",
          price: "13 995",
      },
    ],
};

export default function ProductCarousel() {
    return (
        <motion.section
            className="px-4 sm:px-6 lg:px-8 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-2xl md:text-3xl font-medium mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Gear Up
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ">
                    {Object.entries(products).map(([gender, items]) => (
                        <div key={gender} className="product-carousel-section">
                            <Carousel opts={{ align: "start" }}>
                                <div className="flex justify-between items-center mb-4 ">
                                    <h3 className="text-lg md:text-xl font-medium">
                                    Shop {gender.charAt(0).toUpperCase() + gender.slice(1)}'s
                                    </h3>
                                    <div className="flex gap-2">
                                        <CarouselPrevious className="transition-transform hover:scale-110 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2">
                                            <FaAngleLeft className="w-4 h-4 md:w-5 md:h-5" />
                                        </CarouselPrevious>
                                        <CarouselNext className="transition-transform hover:scale-110 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2">
                                            <FaAngleRight className="w-4 h-4 md:w-5 md:h-5" />
                                        </CarouselNext>
                                    </div>
                                </div>
                                <CarouselContent>
                                    {items.map((product, index) => (
                                        <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/2">
                                            <motion.div
                                                className="product-card p-2"
                                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                </div>
                                                <div className="product-info mt-4 flex justify-between gap-2">
                                                    <div className="flex-1">
                                                        <h3 className="text-sm md:text-base font-medium">
                                                            {product.title}
                                                        </h3>
                                                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-medium">₹ {product.price}</p>
                                                </div>
                                            </motion.div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}



// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"
//   import Image from "next/image"
//   import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"
  
//   import gearMenProducts1 from "@/app/images/gearMenProducts1.png"
//   import gearMenProducts2 from "@/app/images/gearMenProducts2.png"
//   import gearWomenProducts1 from "@/app/images/gearWomenProducts1.png"
//   import gearWomenProducts2 from "@/app/images/gearWomenProducts2.png"
    
//     const products = {
//     men: [
//       {
//         image: gearMenProducts1,
//         title: "Nike Dri-FIT ADV TechKnit Ultra",
//         description: "Men's Short-Sleeve Running Top",
//         price: "3 895"
//       },
//       {
//         image: gearMenProducts2,
//         title: "Nike Air Max Pulse",
//         description: "Men's Shoes",
//         price: "13 995"
//       },
//       {
//         image: gearMenProducts1,
//         title: "Nike Dri-FIT ADV TechKnit Ultra",
//         description: "Men's Short-Sleeve Running Top",
//         price: "3 895"
//       },
//       // Add more products
//     ],
//     women: [
//       {
//         image: gearWomenProducts1,
//         title: "Nike Air Max Pulse",
//         description: "Women's Shoes",
//         price: "13 995"
//       },
//       {
//         image: gearWomenProducts2,
//         title: "Nike Air Max Pulse",
//         description: "Women's Shoes",
//         price: "13 995"
//       },
//       {
//         image: gearWomenProducts1,
//         title: "Nike Air Max Pulse",
//         description: "Women's Shoes",
//         price: "13 995"
//       },
//       // Add more products
//     ]
//   }
   
//   export default function ProductCarousel() {
//     return (
//       <section className="px-4 sm:px-6 lg:px-8 py-12">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-medium mb-8">Gear Up</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {Object.entries(products).map(([gender, items]) => (
//               <div key={gender} className="product-carousel-section">
//                 <Carousel opts={{ align: "start" }}>
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg md:text-xl font-medium">
//                       Shop {gender.charAt(0).toUpperCase() + gender.slice(1)}'s
//                     </h3>
//                     <div className="flex gap-2">
//                       <CarouselPrevious 
//                         className="static translate-y-0 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2"
//                       >
//                         <FaAngleLeft className="w-4 h-4 md:w-5 md:h-5" />
//                       </CarouselPrevious>
//                       <CarouselNext 
//                         className="static translate-y-0 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2"
//                       >
//                         <FaAngleRight className="w-4 h-4 md:w-5 md:h-5" />
//                       </CarouselNext>
//                     </div>
//                   </div>
  
//                   <CarouselContent>
//                     {items.map((product, index) => (
//                       <CarouselItem 
//                         key={index}
//                         className="basis-full sm:basis-1/2 lg:basis-1/2"
//                       >
//                         <div className="product-card p-2">
//                           <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
//                             <Image
//                               src={product.image}
//                               alt={product.title}
//                               fill
//                               className="object-cover"
//                               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                             />
//                           </div>
//                           <div className="product-info mt-4 flex justify-between gap-2">
//                             <div className="flex-1">
//                               <h3 className="text-sm md:text-base font-medium">
//                                 {product.title}
//                               </h3>
//                               <p className="text-xs md:text-sm text-gray-500 mt-1">
//                                 {product.description}
//                               </p>
//                             </div>
//                             <p className="text-sm md:text-base font-medium">
//                               ₹ {product.price}
//                             </p>
//                           </div>
//                         </div>
//                       </CarouselItem>
//                     ))}
//                   </CarouselContent>
//                 </Carousel>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }





