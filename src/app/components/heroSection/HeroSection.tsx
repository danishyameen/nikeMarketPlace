"use client"

import Image from "next/image";
import heroImage from "@/app/images/heroImage.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section className="w-full">
      {/* Hero Section Text */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="heroSectionText bg-[#F5F5F5]  mx-auto w-full p-3"
      >
        <motion.h2 
          variants={fadeInUp}
          className="font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-center"
        >
          Hello Nike App
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-[14px] sm:text-[15px] md:text-[16px] text-center"
        >
          Download the app to access everything Nike. Get Your Great
        </motion.p>
      </motion.div>

      <div className="heroSection max-w-6xl mx-auto mt-0">
        {/* Hero Image */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heroImage w-full p-2 mt-2"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={heroImage}
            alt="heroImage"
            className="w-full sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-xl"
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-content w-full mt-6 px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[16px] sm:text-[18px] font-medium"
            >
              First Look
            </motion.p>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
              className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[56px] font-medium"
            >
              Nike Air Max Pulse
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[16px] sm:text-[18px] font-normal text-center leading-6 mt-4"
          >
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you
            past your limits and help you go to the max.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 } 
              }
            }}
            className="w-auto heroSectionButton flex flex-row gap-3 justify-center text-center sm:text-left mt-[40px]"
          >
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-[22px] py-[8px] bg-[#111111] text-white font-medium text-[16px] sm:text-[18px] rounded-full"
            >
              Notify Me
            </motion.button>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-auto px-[22px] py-[8px] bg-[#111111] text-white font-medium text-[16px] sm:text-[18px] rounded-full"
            >
              Shop Air Max
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}