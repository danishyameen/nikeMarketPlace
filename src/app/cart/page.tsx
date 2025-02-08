"use client"

import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";
import cartProductPic1 from "@/app/images/gearMenProducts1.png";
import menShoesProductPic1 from "@/app/images/product1.png";

interface CartItemProps {
    id: string;
    product: string;
    price: string;
    description: string[];
    size: string;
    quantity: number;
    image: StaticImageData;
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
}

const CartItem = ({
    id,
    product,
    price,
    description,
    size,
    quantity,
    image,
    onIncrement,
    onDecrement
}: CartItemProps) => (
    <motion.div
        key={id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 md:gap-6 pb-6 border-b border-gray-200"
    >
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square w-full sm:w-32 md:w-40 overflow-hidden rounded-lg"
        >
            <Image
                src={image}
                alt="Product"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
            />
        </motion.div>

        <div className="flex-1 space-y-2 md:space-y-3">
            <div className="flex justify-between items-start">
                <h3 className="text-base md:text-lg font-medium text-gray-900">{product}</h3>
                <p className="text-base md:text-lg font-medium text-gray-900">{price}</p>
            </div>

            <motion.div whileHover={{ x: 5 }} className="space-y-1">
                {description.map((text, index) => (
                    <p key={index} className="text-sm text-gray-500">{text}</p>
                ))}
            </motion.div>

            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                <p className="text-sm text-gray-500">Size {size}</p>
                <div className="flex items-center gap-2">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onDecrement(id)}
                        disabled={quantity === 1}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        -
                    </motion.button>
                    <span className="text-sm text-gray-500 w-6 text-center">{quantity}</span>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onIncrement(id)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                        +
                    </motion.button>
                </div>
            </div>

            <div className="flex gap-4 md:gap-6">
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-500"
                >
                    <Heart className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-500"
                >
                    <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
            </div>
        </div>
    </motion.div>
);

export default function CartPage() {
    const [products] = useState([
        {
            id: "nike-dri-fit",
            product: "Nike Dri-FIT ADV TechKnit Ultra",
            price: 3895,
            description: ["Men's Short-Sleeve Running Top", "Ashen Slate/Cobalt Bliss"],
            size: "L",
            image: cartProductPic1,
        },
        {
            id: "nike-air-max",
            product: "Nike Air Max 97 SE",
            price: 16995,
            description: ["Men's Shoes", "Flat Pewter/Light Bone/Black/White"],
            size: "8",
            image: menShoesProductPic1,
        }
    ]);

    const [quantities, setQuantities] = useState<{ [key: string]: number }>({
        "nike-dri-fit": 1,
        "nike-air-max": 1,
    });

    const handleIncrement = (productId: string) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: prev[productId] + 1
        }));
    };

    const handleDecrement = (productId: string) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: Math.max(1, prev[productId] - 1)
        }));
    };

    const subtotal = products.reduce((sum, product) =>
        sum + (product.price * quantities[product.id]), 0
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Free Delivery Banner */}
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="bg-gray-50 p-4 rounded-lg mb-6 md:mb-8"
                >
                    {/* ... keep existing banner content ... */}
                </motion.div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
                    {/* Cart Items Section */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8">
                        <h2 className="text-xl md:text-2xl font-medium text-gray-900">Bag</h2>

                        <AnimatePresence>
                            {products.map(product => (
                                <CartItem
                                    key={product.id}
                                    id={product.id}
                                    product={product.product}
                                    price={`MRP: ₹${product.price.toLocaleString('en-IN')}`}
                                    description={product.description}
                                    size={product.size}
                                    quantity={quantities[product.id]}
                                    onIncrement={handleIncrement}
                                    onDecrement={handleDecrement}
                                    image={product.image}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 mt-8 lg:mt-0"
                    >
                        <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
                                Summary
                            </h2>

                            {/* ... existing summary content ... */}

                            <div className="flex justify-between text-sm md:text-base">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                            </div>

                            <div className="flex justify-between text-sm md:text-base">
                                <span className="text-gray-600">Estimated Delivery & Handling</span>
                                <span className="text-green-600">Free</span>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="border-t border-gray-200 pt-4 mt-4"
                            >
                                <div className="flex justify-between text-base md:text-lg font-medium">
                                    <span className="text-gray-900">Total</span>
                                    <span className="text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-6 md:mt-8"
                            >
                                <Link
                                    href="/checkout"
                                    className="block w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:py-4 rounded-full text-sm md:text-base font-medium text-center transition-colors"
                                >
                                    Member Checkout
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}



// "use client"

// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, Trash2 } from "lucide-react";
// import cartProductPic1 from "@/app/images/gearMenProducts1.png";
// import menShoesProductPic1 from "@/app/images/product1.png";

// interface CartItemProps {
//     product: string;
//     price: string;
//     description: string[];
//     size: string;
//     quantity: number;
//     image: StaticImageData;
// }

// const CartItem = ({ product, price, description, size, quantity, image, id }: CartItemProps & { id: string }) => (
//     <motion.div
//         key={id} // Use passed id as key here
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.3 }}
//         className="flex flex-col sm:flex-row gap-4 md:gap-6 pb-6 border-b border-gray-200"
//     >
//         <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative aspect-square w-full sm:w-32 md:w-40 overflow-hidden rounded-lg"
//         >
//             <Image
//                 src={image}
//                 alt="Product"
//                 fill
//                 className="object-cover object-center"
//                 sizes="(max-width: 640px) 100vw, 33vw"
//             />
//         </motion.div>

//         <div className="flex-1 space-y-2 md:space-y-3">
//             <div className="flex justify-between items-start">
//                 <h3 className="text-base md:text-lg font-medium text-gray-900">{product}</h3>
//                 <p className="text-base md:text-lg font-medium text-gray-900">{price}</p>
//             </div>

//             <motion.div whileHover={{ x: 5 }} className="space-y-1">
//                 {description.map((text, index) => (
//                     <p key={index} className="text-sm text-gray-500">{text}</p>
//                 ))}
//             </motion.div>

//             <div className="flex flex-wrap gap-4 md:gap-6">
//                 <p className="text-sm text-gray-500">Size {size}</p>
//                 <p className="text-sm text-gray-500">Quantity {quantity}</p>
//             </div>

//             <div className="flex gap-4 md:gap-6">
//                 <motion.button
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="text-gray-400 hover:text-gray-500"
//                 >
//                     <Heart className="w-5 h-5 md:w-6 md:h-6" />
//                 </motion.button>
//                 <motion.button
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="text-gray-400 hover:text-gray-500"
//                 >
//                     <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
//                 </motion.button>
//             </div>
//         </div>
//     </motion.div>
// );

// export default function CartPage() {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="min-h-screen bg-white"
//         >
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Free Delivery Banner */}
//                 <motion.div
//                     initial={{ y: -50 }}
//                     animate={{ y: 0 }}
//                     className="bg-gray-50 p-4 rounded-lg mb-6 md:mb-8"
//                 >
//                     <div className="space-y-1">
//                         <p className="text-sm md:text-base font-medium text-gray-900">Free Delivery</p>
//                         <motion.div
//                             whileHover={{ scale: 1.02 }}
//                             className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
//                         >
//                             <p className="text-xs md:text-sm text-gray-600">
//                                 Applies to orders of ₹14,000.00 or more.
//                             </p>
//                             <Link
//                                 href="/"
//                                 className="text-sm font-semibold text-gray-900 underline hover:text-gray-700"
//                             >
//                                 View details
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </motion.div>

//                 <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
//                     {/* Cart Items Section */}
//                     <div className="lg:col-span-7 space-y-6 md:space-y-8">
//                         <h2 className="text-xl md:text-2xl font-medium text-gray-900">Bag</h2>

//                         <AnimatePresence>
//                             <CartItem
//                                 key="nike-dri-fit"
//                                 id="nike-dri-fit" // Unique identifier
//                                 product="Nike Dri-FIT ADV TechKnit Ultra"
//                                 price="MRP: ₹3,895.00"
//                                 description={["Men's Short-Sleeve Running Top", "Ashen Slate/Cobalt Bliss"]}
//                                 size="L"
//                                 quantity={1}
//                                 image={cartProductPic1}
//                             />

//                             <CartItem
//                                 key="nike-air-max"
//                                 id="nike-air-max" // Unique identifier
//                                 product="Nike Air Max 97 SE"
//                                 price="MRP: ₹ 16 995.00"
//                                 description={["Men's Shoes", "Flat Pewter/Light Bone/Black/White"]}
//                                 size="8"
//                                 quantity={1}
//                                 image={menShoesProductPic1}
//                             />
//                         </AnimatePresence>
//                     </div>

//                     {/* Order Summary Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="lg:col-span-5 mt-8 lg:mt-0"
//                     >
//                         <div className="bg-gray-50 rounded-lg p-4 md:p-6">
//                             <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
//                                 Summary
//                             </h2>

//                             <motion.div
//                                 className="space-y-4"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.4 }}
//                             >
//                                 <div className="flex justify-between text-sm md:text-base">
//                                     <span className="text-gray-600">Subtotal</span>
//                                     <span className="text-gray-900">₹20,890.00</span>
//                                 </div>

//                                 <div className="flex justify-between text-sm md:text-base">
//                                     <span className="text-gray-600">Estimated Delivery & Handling</span>
//                                     <span className="text-green-600">Free</span>
//                                 </div>

//                                 <motion.div
//                                     whileHover={{ scale: 1.02 }}
//                                     className="border-t border-gray-200 pt-4 mt-4"
//                                 >
//                                     <div className="flex justify-between text-base md:text-lg font-medium">
//                                         <span className="text-gray-900">Total</span>
//                                         <span className="text-gray-900">₹20,890.00</span>
//                                     </div>
//                                 </motion.div>
//                             </motion.div>

//                             <motion.div
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className="mt-6 md:mt-8"
//                             >
//                                 <Link
//                                     href="/checkout"
//                                     className="block w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:py-4 rounded-full text-sm md:text-base font-medium text-center transition-colors"
//                                 >
//                                     Member Checkout
//                                 </Link>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }



// // import Image from "next/image";
// // import Link from "next/link";
// // import cartProductPic1 from "@/app/images/gearMenProducts1.png"
// // import menShoesProductPic1 from "@/app/images/product1.png"


// // import { Heart, Trash2 } from "lucide-react";


// // export default function CartPage() {
// //     return (
// //         <div className="min-h-screen bg-white">
// //             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
// //                 {/* Free Delivery Banner */}
// //                 <div className="bg-gray-50 p-4 rounded-lg mb-6 md:mb-8">
// //                     <div className="space-y-1">
// //                         <p className="text-sm md:text-base font-medium text-gray-900">Free Delivery</p>
// //                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
// //                             <p className="text-xs md:text-sm text-gray-600">
// //                                 Applies to orders of ₹14,000.00 or more.
// //                             </p>
// //                             <Link
// //                                 href="/"
// //                                 className="text-sm font-semibold text-gray-900 underline hover:text-gray-700"
// //                             >
// //                                 View details
// //                             </Link>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
// //                     {/* Cart Items Section */}
// //                     <div className="lg:col-span-7 space-y-6 md:space-y-8">
// //                         <h2 className="text-xl md:text-2xl font-medium text-gray-900">Bag</h2>

// //                         {/* Cart Item 1 */}
// //                         <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pb-6 border-b border-gray-200">
// //                             <div className="relative aspect-square w-full sm:w-32 md:w-40 overflow-hidden rounded-lg">
// //                                 <Image
// //                                     src={cartProductPic1}
// //                                     alt="Product"
// //                                     fill
// //                                     className="object-cover object-center"
// //                                     sizes="(max-width: 640px) 100vw, 33vw"
// //                                 />
// //                             </div>

// //                             <div className="flex-1 space-y-2 md:space-y-3">
// //                                 <div className="flex justify-between items-start">
// //                                     <h3 className="text-base md:text-lg font-medium text-gray-900">
// //                                         Nike Dri-FIT ADV TechKnit Ultra
// //                                     </h3>
// //                                     <p className="text-base md:text-lg font-medium text-gray-900">
// //                                     MRP: ₹3,895.00
// //                                     </p>
// //                                 </div>

// //                                 <div className="space-y-1">
// //                                     <p className="text-sm text-gray-500">Men's Short-Sleeve Running Top</p>
// //                                     <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
// //                                 </div>

// //                                 <div className="flex flex-wrap gap-4 md:gap-6">
// //                                     <p className="text-sm text-gray-500">Size L</p>
// //                                     <p className="text-sm text-gray-500">Quantity 1</p>
// //                                 </div>

// //                                 <div className="flex gap-4 md:gap-6">
// //                                     <button className="text-gray-400 hover:text-gray-500">
// //                                         <Heart className="w-5 h-5 md:w-6 md:h-6" />
// //                                     </button>
// //                                     <button className="text-gray-400 hover:text-gray-500">
// //                                         <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Cart Item 2 */}
// //                         <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pb-6 border-b border-gray-200">
// //                             <div className="relative aspect-square w-full sm:w-32 md:w-40 overflow-hidden rounded-lg">
// //                                 <Image
// //                                     src={menShoesProductPic1}
// //                                     alt="Product"
// //                                     fill
// //                                     className="object-cover object-center"
// //                                     sizes="(max-width: 640px) 100vw, 33vw"
// //                                 />
// //                             </div>

// //                             <div className="flex-1 space-y-2 md:space-y-3">
// //                                 <div className="flex justify-between items-start">
// //                                     <h3 className="text-base md:text-lg font-medium text-gray-900">
// //                                     Nike Air Max 97 SE
// //                                     </h3>
// //                                     <p className="text-base md:text-lg font-medium text-gray-900">
// //                                     MRP: ₹ 16 995.00
// //                                     </p>
// //                                 </div>

// //                                 <div className="space-y-1">
// //                                     <p className="text-sm text-gray-500">Men's Shoes</p>
// //                                     <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
// //                                 </div>

// //                                 <div className="flex flex-wrap gap-4 md:gap-6">
// //                                     <p className="text-sm text-gray-500">Size 8</p>
// //                                     <p className="text-sm text-gray-500">Quantity 1</p>
// //                                 </div>

// //                                 <div className="flex gap-4 md:gap-6">
// //                                     <button className="text-gray-400 hover:text-gray-500">
// //                                         <Heart className="w-5 h-5 md:w-6 md:h-6" />
// //                                     </button>
// //                                     <button className="text-gray-400 hover:text-gray-500">
// //                                         <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Order Summary Section */}
// //                     <div className="lg:col-span-5 mt-8 lg:mt-0">
// //                         <div className="bg-gray-50 rounded-lg p-4 md:p-6">
// //                             <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
// //                                 Summary
// //                             </h2>

// //                             <div className="space-y-4">
// //                                 <div className="flex justify-between text-sm md:text-base">
// //                                     <span className="text-gray-600">Subtotal</span>
// //                                     <span className="text-gray-900">₹20,890.00</span>
// //                                 </div>

// //                                 <div className="flex justify-between text-sm md:text-base">
// //                                     <span className="text-gray-600">Estimated Delivery & Handling</span>
// //                                     <span className="text-green-600">Free</span>
// //                                 </div>

// //                                 <div className="border-t border-gray-200 pt-4 mt-4">
// //                                     <div className="flex justify-between text-base md:text-lg font-medium">
// //                                         <span className="text-gray-900">Total</span>
// //                                         <span className="text-gray-900">₹20,890.00</span>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <div className="mt-6 md:mt-8">
// //                                 <Link
// //                                     href="/checkout"
// //                                     className="block w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:py-4 rounded-full text-sm md:text-base font-medium text-center transition-colors"
// //                                 >
// //                                     Member Checkout
// //                                 </Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }