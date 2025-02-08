"use client"

import Image from "next/image";
import small_logo from "@/app/images/small_logo.png";
import nike_logo from "@/app/images/nike_logo.png";
import cart from "@/app/images/cart.png";
import heart from "@/app/images/heart.png";
import Link from "next/link";
import { useState } from "react";
import Search from "./search_box/Search";
import HamburgerIcon from "@/app/components/header/HamburgerIcon";
import CloseIcon from "@/app/components/header/CloseIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const TopNavLinks = () => (
    <>
      <Link href="/" className="hover:underline">Find a Store</Link>
      <span className="mx-2">|</span>
      <Link href="/contact-us" className="hover:underline">Help</Link>
      <span className="mx-2">|</span>
      <Link href="/join-us" className="hover:underline">Join Us</Link>
      <span className="mx-2">|</span>
      <Link href="/login" className="hover:underline">Sign In</Link>
    </>
  );

  const MainNavLinks = () => (
    <>
      {["/products", "/catagories/mens", "/catagories/womens", "/catagories/kids", "/", "/catagories/snrks"].map((path, index) => (
        <motion.div
          key={path}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={path}
            className="p-2 relative group transition-all duration-200"
          >
            <span className="hover:underline">
              {path.split('/').pop()?.toUpperCase() || 'SALES'}
            </span>
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-black"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 py-2 px-4"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/">
              <Image 
                src={small_logo}
                alt="Company logo"
                width={24}
                height={24}
              />
            </Link>
          </motion.div>
          <nav className="flex items-center space-x-2 text-sm font-medium">
            <TopNavLinks />
          </nav>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg absolute right-0 hover:bg-gray-100"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </motion.div>
          </motion.button>

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex-1 md:flex-none">
              <Image
                src={nike_logo}
                alt="Nike logo"
                width={120}
                height={40}
                className="h-5 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center text-center justify-center space-x-4">
            <MainNavLinks />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Search />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/productsDetails" className="p-2 ">
                <Image
                  src={heart}
                  alt="Wishlist"
                  width={32}
                  height={32}
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/cart" className="p-2">
                <Image
                  src={cart}
                  alt="Cart"
                  width={32}
                  height={32}
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-y-auto absolute top-full left-0 right-0 bg-white border-t"
            >
              <div className="p-4 space-y-4">
                <nav className="flex flex-col space-y-2">
                  {["/products", "/catagories/mens", "/catagories/womens", "/catagories/kids", "/", "/catagories/snrks"].map((path, index) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={path}
                        className="p-2 block hover:bg-gray-100 rounded transition-colors"
                      >
                        {path.split('/').pop()?.toUpperCase() || 'SALES'}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="mt-4 w-full">
                      <Search />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex space-x-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Link href="/productsDetails" className="p-2">
                      <Image
                        src={heart}
                        alt="Wishlist"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link href="/cart" className="p-2">
                      <Image
                        src={cart}
                        alt="Cart"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </motion.div>
                  <motion.div 
                    className="pt-4 border-t"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <nav className="hidden md:flex flex-col space-y-2 text-sm">
                      <TopNavLinks />
                    </nav>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
