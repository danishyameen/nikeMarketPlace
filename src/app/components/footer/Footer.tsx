"use client"

"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <motion.footer
            className="bg-[#111111] w-full pb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Main Footer Section */}
            <div className="py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Quick Links", links: ["Find A Store", "Become A Member", "Sign Up for Email", "Send Us Feedback", "Student Discounts"] },
                            { title: "Get Help", links: ["Order Status", "Delivery", "Returns", "Payment Options", "Nike.com Inquiries", "Other Inquiries"] },
                            { title: "About Nike", links: ["News", "Careers", "Investors", "Sustainability"] }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-white text-base font-semibold mb-4">{category.title}</h3>
                                <ul className="text-[#7E7E7E] text-sm space-y-2">
                                    {category.links.map((link, i) => (
                                        <li
                                            key={i}
                                            className="hover:text-white transition-colors duration-300 cursor-pointer"
                                        >
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                        {/* Social Media Icons */}
                        <motion.div
                            className="flex sm:justify-center lg:justify-start gap-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {[FaTwitter, FaFacebookF, TfiYoutube, TiSocialInstagram].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 flex items-center justify-center bg-[#7E7E7E] rounded-full cursor-pointer"
                                >
                                    <Icon className="text-white text-lg" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Sub Footer Section */}
            <motion.div
                className="border-t border-[#757575] pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Location Info */}
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-white text-lg" />
                        <span className="text-[#ffffff] text-sm">India</span>
                        <p className="text-[#7E7E7E] text-sm sm:text-left">
                            © 2023 Nike, Inc. All Rights Reserved
                        </p>
                    </div>

                    {/* Links */}
                    <div className="mt-[-15px] sm:mt-[0px] flex justify-center sm:text-right  sm:justify-end space-x-4">
                        {["Guides", "Terms of Sale", "Terms of Use", "Nike Privacy Policy"].map((text, index) => (
                            <motion.span
                                key={index}
                                className="text-[#7E7E7E] text-sm cursor-pointer"
                                whileHover={{ scale: 1.1, color: "#ffffff" }}
                                transition={{ duration: 0.3 }}
                            >
                                {text}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
}



// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { TiSocialInstagram } from "react-icons/ti";
// import { TfiYoutube } from "react-icons/tfi";
// import { FaLocationDot } from "react-icons/fa6";

// export default function Footer() {
//     return (
//         <footer className="bg-[#111111] w-full pb-5">
//             {/* Main Footer Section */}
//             <div className="py-10">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {/* Quick Links */}
//                         <div>
//                             <h3 className="text-white text-base font-semibold mb-4">Quick Links</h3>
//                             <ul className="text-[#ffffff] text-sm space-y-2">
//                                 <li>Find A Store</li>
//                                 <li>Become A Member</li>
//                                 <li>Sign Up for Email</li>
//                                 <li>Send Us Feedback</li>
//                                 <li>Student Discounts</li>
//                             </ul>
//                         </div>

//                         {/* Get Help */}
//                         <div>
//                             <h3 className="text-white text-base font-semibold mb-4">Get Help</h3>
//                             <ul className="text-[#7E7E7E] text-sm space-y-2">
//                                 <li>Order Status</li>
//                                 <li>Delivery</li>
//                                 <li>Returns</li>
//                                 <li>Payment Options</li>
//                                 <li>Contact Us On Nike.com Inquiries</li>
//                                 <li>Contact Us On All Other Inquiries</li>
//                             </ul>
//                         </div>

//                         {/* About Nike */}
//                         <div>
//                             <h3 className="text-white text-base font-semibold mb-4">About Nike</h3>
//                             <ul className="text-[#7E7E7E] text-sm space-y-2">
//                                 <li>News</li>
//                                 <li>Careers</li>
//                                 <li>Investors</li>
//                                 <li>Sustainability</li>
//                             </ul>
//                         </div>

//                         {/* Social Media Icons */}
//                         <div className="flex sm:justify-center lg:justify-start gap-3">
//                             <div className="w-10 h-10 flex items-center justify-center bg-[#7E7E7E] rounded-full">
//                                 <FaTwitter className="text-white text-lg" />
//                             </div>
//                             <div className="w-10 h-10 flex items-center justify-center bg-[#7E7E7E] rounded-full">
//                                 <FaFacebookF className="text-white text-lg" />
//                             </div>
//                             <div className="w-10 h-10 flex items-center justify-center bg-[#7E7E7E] rounded-full">
//                                 <TfiYoutube className="text-white text-lg" />
//                             </div>
//                             <div className="w-10 h-10 flex items-center justify-center bg-[#7E7E7E] rounded-full">
//                                 <TiSocialInstagram className="text-white text-lg" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Sub Footer Section */}
//             <div className="border-t border-[#757575] pt-4">
//                 <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Location Info */}
//                     <div className="flex items-center gap-2">
//                         <FaLocationDot className="text-white text-lg" />
//                         <span className="text-[#ffffff] text-sm">India</span>
//                         <p className=" text-left text-[#7E7E7E] text-sm sm:text-left">© 2023 Nike, Inc. All Rights Reserved</p>
//                     </div>

//                     {/* Copyright */}
//                     <div className="hidden md:block text-left text-[#7E7E7E] text-sm sm:text-left">
//                         {/* © 2023 Nike, Inc. All Rights Reserved */}
//                     </div>

//                     {/* Links */}
//                     <div className="mt-[-15px] sm:mt-[0px] flex justify-center sm:justify-end space-x-4">
//                         <span className="text-[#7E7E7E] text-[12px] sm:text-sm">Guides</span>
//                         <span className="text-[#7E7E7E] text-[12px] sm:text-sm">Terms of Sale</span>
//                         <span className="text-[#7E7E7E] text-[12px] sm:text-sm">Terms of Use</span>
//                         <span className="text-[#7E7E7E] text-[12px] sm:text-sm">Nike Privacy Policy</span>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }
