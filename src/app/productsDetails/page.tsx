"use client"

import Image from "next/image";
import productPic from "@/app/images/productPic.png";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProductsDetailsPage() {
  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const detailsVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Product Image Section */}
          <motion.div
            className="flex-1 relative aspect-square w-full overflow-hidden rounded-xl shadow-lg"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <Image
              src={productPic}
              alt="productPic"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>

          {/* Product Details Section */}
          <motion.div
            className="flex-1 space-y-6 md:space-y-8 lg:space-y-10"
            variants={detailsVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-snug lg:leading-normal">
              Nike Air Force 1 PLT.AF.ORM
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its "inside out"-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </p>

            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              ₹8,695.00
            </div>

            <motion.button
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm md:text-base font-medium rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.05 }} // Add hover animation
              whileTap={{ scale: 0.95 }}     // Add tap animation
            >
              <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              <span>Add To Cart</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import productPic from "@/app/images/productPic.png"
// import { FiShoppingCart } from "react-icons/fi";


// export default function ProductsDetailsPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
//         <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
//           {/* Product Image Section */}
//           <div className="flex-1 relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
//             <Image
//               src={productPic}
//               alt="productPic"
//               fill
//               className="object-cover object-center"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               priority
//             />
//           </div>

//           {/* Product Details Section */}
//           <div className="flex-1 space-y-6 md:space-y-8 lg:space-y-10">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-snug lg:leading-normal">
//               Nike Air Force 1 PLT.AF.ORM
//             </h1>

//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Turn style on its head with this crafted take on the Air Jordan 1 Mid. 
//               Its "inside out"-inspired construction, including unique layering and 
//               exposed foam accents, ups the ante on this timeless Jordan Brand 
//               silhouette. Details like the deco stitching on the Swoosh add 
//               coveted appeal, while the unexpected shading, rich mixture of 
//               materials and aged midsole aesthetic give this release an 
//               artisan finish.
//             </p>

//             <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
//               ₹8,695.00
//             </div>

//             <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm md:text-base font-medium rounded-full transition-colors duration-200">
//               <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
//               <span>Add To Cart</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
