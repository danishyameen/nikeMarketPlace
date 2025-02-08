"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import nike_logo from "@/app/images/nike_logo.png";
import Link from "next/link";

// Animation variants
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
  visible: { opacity: 1, y: 0 }
};

export default function LoginPage() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="loginPage mx-auto p-5 mt-10 mb-10 max-w-sm sm:max-w-sm md:max-w-sm w-full"
      >
        <div className="w-full mx-auto text-center">
          {/* Logo Section */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="nike_logo w-auto h-auto mb-4"
          >
            <Image
              src={nike_logo}
              alt="nike_logo"
              className="mx-auto w-[58.85px] h-[20.54px]"
            />
          </motion.div>
  
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="loginFormText w-full h-auto mx-auto mb-6"
          >
            <motion.h3 
              className="text-[#111111] font-bold text-[18px] sm:text-[20px] md:text-[22px] font-[Helvetica]"
              whileHover={{ scale: 1.02 }}
            >
              YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
            </motion.h3>
          </motion.div>
  
          {/* Form Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="loginForm w-full h-auto mx-auto"
          >
            <form>
              <div className="inputFields w-full h-auto mx-auto mb-5">
                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Email address"
                  className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full pt-2 pb-2 pr-2 pl-4"
                />
                <motion.input
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                  type="password"
                  placeholder="Password"
                  className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full pt-2 pb-2 pr-2 pl-4 mt-4"
                />
              </div>
  
              {/* Checkbox and Link Section */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-between mb-5 sm:items-center gap-3"
              >
                <div className="checkbox flex gap-2">
                  <motion.input
                    whileTap={{ scale: 0.9 }}
                    type="checkbox"
                    className="border-[#BCBCBC] outline-none"
                  />
                  <p className="text-[#8D8D8D] font-normal text-[14px] sm:text-[15px] font-[Helvetica]">
                    Keep me signed in
                  </p>
                </div>
                <motion.p 
                  whileHover={{ scale: 1.05 }}
                  className="text-[#BCBCBC] cursor-pointer hover:text-[#111111] hover:underline  font-normal text-[14px] sm:text-[15px] font-[Helvetica]"
                >
                  Forgotten your password?
                </motion.p>
              </motion.div>
  
              {/* Privacy Policy Section */}
              <motion.div 
                variants={itemVariants}
                className="formText w-full h-auto mx-auto mb-5"
              >
                <p className="text-[#8D8D8D] text-[13px] font-normal sm:text-[14px] font-[Helvetica]">
                  By logging in, you agree to Nike's{" "}
                  <motion.span whileHover={{ scale: 1.05 }} className="underline">
                    <Link href="/"> Privacy Policy </Link>
                  </motion.span>{" "}
                  and{" "}
                  <motion.span whileHover={{ scale: 1.05 }} className="underline">
                    <Link href="/"> Terms of Use.</Link>
                  </motion.span>
                </p>
              </motion.div>
  
              {/* Sign In Button Section */}
              <motion.div 
                variants={itemVariants}
                className="loginButton w-full h-auto mx-auto mb-5"
              >
                <motion.button
                  whileHover={{ y: -2, backgroundColor: '#333333' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#111111] text-white font-normal text-[13px] sm:text-[14px] font-[Helvetica] w-full py-2"
                >
                  SIGN IN
                </motion.button>
              </motion.div>
  
              {/* Join Us Section */}
              <motion.div 
                variants={itemVariants}
                className="joinUs text-center"
              >
                <p className="text-[#8D8D8D] text-[13px] sm:text-[14px]">
                  Not a Member?{" "}
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="text-[#111111] underline"
                  >
                    <Link href="/join-us"> Join Us. </Link>
                  </motion.span>
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    );
  }



// import Image from "next/image";
// import nike_logo from "@/app/images/nike_logo.png";
// import Link from "next/link";


// export default function LoginPage() {
//     return (
//       <div className="loginPage mx-auto p-5 mt-10 mb-10 max-w-sm sm:max-w-sm md:max-w-sm w-full">
//         <div className="w-full mx-auto text-center">
//           {/* Logo Section */}
//           <div className="nike_logo w-auto h-auto mb-4">
//             <Image
//               src={nike_logo}
//               alt="nike_logo"
//               className="mx-auto w-[58.85px] h-[20.54px]"
//             />
//           </div>
  
//           {/* Heading Section */}
//           <div className="loginFormText w-full h-auto mx-auto mb-6">
//             <h3 className="text-[#111111] font-bold text-[18px] sm:text-[20px] md:text-[22px] font-[Helvetica]">
//               YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
//             </h3>
//           </div>
  
//           {/* Form Section */}
//           <div className="loginForm w-full h-auto mx-auto">
//             <form action="">
//               <div className="inputFields w-full h-auto mx-auto mb-5">
//                 <input
//                   type="text"
//                   placeholder="Email address"
//                   className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full pt-2 pb-2 pr-2 pl-4"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full pt-2 pb-2 pr-2 pl-4 mt-4"
//                 />
//               </div>
  
//               {/* Checkbox and Link Section */}
//               <div className="flex flex-col sm:flex-row justify-between mb-5 sm:items-center gap-3">
//                 <div className="checkbox flex gap-2">
//                   <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     className="border-[#BCBCBC] outline-none"
//                   />
//                   <p className="text-[#8D8D8D] font-normal text-[14px] sm:text-[15px] font-[Helvetica]">
//                     Keep me signed in
//                   </p>
//                 </div>
//                 <p className="text-[#BCBCBC] font-normal text-[14px] sm:text-[15px] font-[Helvetica]">
//                   Forgotten your password?
//                 </p>
//               </div>
  
//               {/* Privacy Policy Section */}
//               <div className="formText w-full h-auto mx-auto mb-5">
//                 <p className="text-[#8D8D8D] text-[13px] font-normal sm:text-[14px] font-[Helvetica]">
//                   By logging in, you agree to Nike's{" "}
//                   <span className="underline">
//                     <Link href="/"> Privacy Policy </Link>
//                   </span>{" "}
//                   and{" "}
//                   <span className="underline">
//                     <Link href="/"> Terms of Use.</Link>
//                   </span>
//                 </p>
//               </div>
  
//               {/* Sign In Button Section */}
//               <div className="loginButton w-full h-auto mx-auto mb-5">
//                 <button className="bg-[#111111] text-white font-normal text-[13px] sm:text-[14px] font-[Helvetica] w-full py-2">
//                   SIGN IN
//                 </button>
//               </div>
  
//               {/* Join Us Section */}
//               <div className="joinUs text-center">
//                 <p className="text-[#8D8D8D] text-[13px] sm:text-[14px]">
//                   Not a Member?{" "}
//                   <span className="text-[#111111] underline">
//                     <Link href="/join-us"> Join Us. </Link>
//                   </span>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
  