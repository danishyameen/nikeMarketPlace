// import * as React from "react"


// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
// } from "@/components/ui/carousel"

// import Image from "next/image";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";
// import ShowCaseProductsImg1 from "@/app/images/product1.png"
// import ShowCaseProductsImg2 from "@/app/images/product2.png"
// import ShowCaseProductsImg3 from "@/app/images/product3.png"




// export default function ShowCaseProducts() {
//     return (
//         <section className="w-full max-w-6xl mx-auto mt-[100px] px-4">
            
//             <div className="text_heading flex justify-between flex-wrap gap-3 sm:gap-0 items-center mb-6">
//                 <h3 className="font-medium text-[25px] sm:text-[30px]">Best of Air Max</h3>
//                 <div className="slide_option flex items-center gap-4">
//                     <p className="font-medium text-[18px] sm:text-[20px]">Shop</p>

                    
//                     <div className="mt-[-3px] w-[30px] h-[30px] p-[5px] bg-[#E5E5E5] rounded-full cursor-pointer">
//                         <FaAngleLeft size="20px" color="black" />
//                     </div>

                    
//                     <div className="mt-[-3px] w-[30px] h-[30px] p-[5px] bg-[#E5E5E5] rounded-full cursor-pointer">
//                         <FaAngleRight size="20px" color="black" />
//                     </div>
//                 </div>
//             </div>

            
//             <div className="slider_section w-full max-w-6xl mx-auto">
//                 <Carousel className="" opts={{ align: "start" }}>
//                     <CarouselContent>
                        
//                         <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                             <CarouselItem className="flex flex-col items-center basis-1/3">
//                                 <Image src={ShowCaseProductsImg1} alt="ShowCaseProductsImg" className="object-cover w-full h-[250px] sm:h-[300px]" />
//                                 <div className="w-full flex justify-between mt-5">
//                                     <div className="w-[130px]">
//                                         <h3 className="font-medium text-[15px] sm:text-[16px]">Nike Air Max Pulse</h3>
//                                         <p className="text-[#757575] font-normal text-[15px] sm:text-[16px]">Women's Shoes</p>
//                                     </div>
//                                     <div className="price">
//                                         <p className="text-[15px] sm:text-[16px] font-medium">₹ 13,995</p>
//                                     </div>
//                                 </div>
//                             </CarouselItem>

//                             <CarouselItem className="hidden sm:flex flex-col items-center basis-1/3">
//                                 <div className=" w-auto">
//                                 <Image src={ShowCaseProductsImg2} alt="ShowCaseProductsImg" className="object-cover w-full h-[250px] sm:h-[300px]" />
//                                 <div className="w-full flex justify-between mt-5">
//                                     <div className="w-[130px]">
//                                         <h3 className="font-medium text-[15px] sm:text-[16px]">Nike Air Max Pulse</h3>
//                                         <p className="text-[#757575] font-normal text-[15px] sm:text-[16px]">Men's Shoes</p>
//                                     </div>
//                                     <div className="price">
//                                         <p className="text-[15px] sm:text-[16px] font-medium">₹ 13,995</p>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </CarouselItem>

//                             <CarouselItem className="hidden md:flex flex-col items-center basis-1/3">
//                                 <Image src={ShowCaseProductsImg3} alt="ShowCaseProductsImg" className="object-cover w-full h-[250px] sm:h-[300px]" />
//                                 <div className="w-full flex justify-between mt-5">
//                                     <div className="w-[130px]">
//                                         <h3 className="font-medium text-[15px] sm:text-[16px]">Nike Air Max Pulse</h3>
//                                         <p className="text-[#757575] font-normal text-[15px] sm:text-[16px]">Men's Shoes</p>
//                                     </div>
//                                     <div className="price">
//                                         <p className="text-[15px] sm:text-[16px] font-medium">₹ 13,995</p>
//                                     </div>
//                                 </div>
//                             </CarouselItem>
//                         </div>
//                     </CarouselContent>
//                 </Carousel>
//             </div>
//         </section>
//     );
// }











// // export default function ShowCaseProducts() {
// //     return (
// //         <section className="w-full mt-[100px]">
// //             <div className="text_heading flex justify-between header_container">
// //                 <h3 className=" font-medium text-[25px]">Best of Air Max</h3>
// //                 <div className="slide_option w-auto h-[48px] flex gap-4">
// //                     <p className=" font-medium text[18px]">Shop</p>

// //                     <div className="mt-[-3px] w-[30px] h-[30px] p-[5px]  bg-[#E5E5E5] rounded-full">
// //                         <FaAngleLeft size="20px" color="black" />
// //                     </div>
// //                     <div className="mt-[-3px]  w-[30px] h-[30px] p-[5px]  bg-[#E5E5E5] rounded-full">
// //                         <FaAngleRight size="20px" color="black" />
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="slider_section w-full">
// //                 <Carousel className="header_container " opts={{ align: "start" }}>
// //                     <CarouselContent>
// //                         <CarouselItem className="basis-1/3">
// //                             <Image src={ShowCaseProductsImg1} alt="ShowCaseProductsImg" />
// //                             <div className="w-auto flex justify-between mt-5">
// //                                 <div className="w-[130px] ">
// //                                     <h3 className=" font-medium text-[15px] ">Nike Air Max Pulse</h3>
// //                                     <p className="text-[#757575] font-normal text-[15px]">Women's Shoes</p>
// //                                 </div>
// //                                 <div className="price">
// //                                     <p className="text-[15px] font-medium">₹ 13 995</p>
// //                                 </div>
// //                             </div>
// //                         </CarouselItem>

// //                         <CarouselItem className="basis-1/3">
// //                             <Image src={ShowCaseProductsImg2} alt="ShowCaseProductsImg" />
// //                             <div className="w-auto flex justify-between mt-5">
// //                                 <div className="w-[130px] ">
// //                                     <h3 className=" font-medium text-[15px] ">Nike Air Max Pulse</h3>
// //                                     <p className="text-[#757575] font-normal text-[15px]">Men's Shoes</p>
// //                                 </div>
// //                                 <div className="price">
// //                                     <p className="text-[15px] font-medium">₹ 13 995</p>
// //                                 </div>
// //                             </div>
// //                         </CarouselItem>

// //                         <CarouselItem className="basis-1/3">
// //                             <Image src={ShowCaseProductsImg3} alt="ShowCaseProductsImg" />
// //                             <div className="w-auto flex justify-between mt-5">
// //                                 <div className="w-[130px] ">
// //                                     <h3 className=" font-medium text-[15px] ">Nike Air Max Pulse</h3>
// //                                     <p className="text-[#757575] font-normal text-[15px]">Men's Shoes</p>
// //                                 </div>
// //                                 <div className="price">
// //                                     <p className="text-[15px] font-medium">₹ 13 995</p>
// //                                 </div>
// //                             </div>
// //                         </CarouselItem>
// //                     </CarouselContent>
// //                     {/* <CarouselPrevious /> */}
// //                 </Carousel>


// //             </div>
// //         </section>
// //     )
// // }

"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Image from "next/image"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"
import ShowCaseProductsImg1 from "@/app/images/product1.png"
import ShowCaseProductsImg2 from "@/app/images/product2.png"
import ShowCaseProductsImg3 from "@/app/images/product3.png"

co


const products = [
  {
    image: ShowCaseProductsImg1,
    title: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "13 995"
  },
  {
    image: ShowCaseProductsImg2,
    title: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "13 995"
  },
  {
    image: ShowCaseProductsImg3,
    title: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "13 995"
  },
  {
    image: ShowCaseProductsImg1,
    title: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "13 995"
  },
]

export default function ProductShowcase() {
  return (
    <section className="w-full mt-16 lg:mt-24">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-6 lg:mb-8">
          <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4 md:mb-0">
            Best of Air Max
          </h3>
          
          <div className="flex items-center justify-end gap-3">
          <p className=" font-medium text[18px]">Shop</p>
            <Carousel opts={{ align: "start" }}>
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                  <FaAngleLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
                </CarouselPrevious>
                <CarouselNext className="static translate-y-0 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                  <FaAngleRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Product Carousel */}
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-2">
            {products.map((product, index) => (
              <CarouselItem 
                key={index}
                className="pl-2 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <h3 className="text-base lg:text-lg font-medium text-gray-900">
                        {product.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-500 mt-1">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-base lg:text-lg font-medium text-gray-900">
                      ₹ {product.price}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}