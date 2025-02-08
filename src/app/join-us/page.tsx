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

const hoverScale = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
};

export default function JoinPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="joinPage mx-auto p-5 mt-4 mb-10 max-w-sm sm:max-w-sm md:max-w-sm"
        >
            <div className="w-full mx-auto text-center h-auto">
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="nike_logo mb-8 flex justify-center"
                >
                    <Image 
                        src={nike_logo} 
                        alt="nike_logo" 
                        className="w-[58.85px] h-[20.54px]" 
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="joinFormText mb-5"
                >
                    <motion.h3 
                        className="text-[#111111] font-bold text-[18px] mb-8 font-[Helvetica]"
                        whileHover={{ scale: 1.02 }}
                    >
                        BECOME A NIKE MEMBER
                    </motion.h3>
                    <motion.p 
                        className="text-[#8D8D8D] text-[14px] text-center font-[Inter]"
                        whileHover={{ x: 5 }}
                    >
                        Create your Nike Member profile and get <br /> 
                        first access to the very best of Nike <br /> 
                        products, inspiration and community.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="joinForm"
                >
                    <form>
                        <div className="inputFields mb-5 grid grid-cols-1 gap-4">
                            {[...Array(5)].map((_, i) => (
                                <motion.input
                                    key={i}
                                    variants={itemVariants}
                                    whileFocus={{ scale: 1.02 }}
                                    className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2"
                                    type={i < 2 ? i === 0 ? 'text' : 'password' : 'text'}
                                    placeholder={[
                                        'Email address', 
                                        'Password', 
                                        'First Name', 
                                        'Last Name', 
                                        'Date of Birth'
                                    ][i]}
                                />
                            ))}
                            
                            <motion.p 
                                className="text-[#8D8D8D] text-[13px] font-[Inter]"
                                variants={itemVariants}
                            >
                                Get a Nike Member Reward every year on your Birthday.
                            </motion.p>

                            <motion.select
                                variants={itemVariants}
                                className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2"
                            >
                                {["India", "Pakistan", "South Africa", "Japan", "China"].map((country, i) => (
                                    <option key={i} value={country}>{country}</option>
                                ))}
                            </motion.select>

                            <motion.div 
                                className="checkbox flex justify-between gap-4"
                                variants={itemVariants}
                            >
                                {['Male', 'Female'].map((gender, i) => (
                                    <motion.button
                                        key={gender}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-[#BCBCBC] border-[1px] border-solid text-[#8D8D8D] text-[13px] font-[Helvetica] w-full sm:w-[48%] p-2"
                                    >
                                        {gender}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div 
                            className="flex justify-start mb-5"
                            variants={itemVariants}
                        >
                            <div className="checkbox flex gap-4 items-start">
                                <motion.input 
                                    type="checkbox" 
                                    whileTap={{ scale: 0.9 }}
                                    className="border-[#BCBCBC] w-[20px] h-[20px]" 
                                />
                                <p className="text-left text-[#8D8D8D] text-[13px] font-[Helvetica]">
                                    Sign up for emails to get updates from Nike on products, offers and your Member benefits
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="formText mb-5 text-center"
                            variants={itemVariants}
                        >
                            <p className="text-[#8D8D8D] text-[13px] font-normal font-[Helvetica]">
                                By creating an account, you agree to Nike's {' '}
                                <motion.span whileHover={{ scale: 1.05 }} className="underline">
                                    <Link href="/">Privacy Policy</Link>
                                </motion.span>{' '}
                                and {' '}
                                <motion.span whileHover={{ scale: 1.05 }} className="underline">
                                    <Link href="/">Terms of Use</Link>
                                </motion.span>
                            </p>
                        </motion.div>

                        <motion.div 
                            className="joinButton mb-5"
                            variants={itemVariants}
                        >
                            <motion.button
                                whileHover={{ y: -2, backgroundColor: '#333333' }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#111111] text-white text-[13px] font-[Helvetica] w-full p-2"
                            >
                                JOIN US
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            className="joinUs text-center"
                            variants={itemVariants}
                        >
                            <p className="text-[#8D8D8D] text-[13px]">
                                Already a Member? {' '}
                                <motion.span 
                                    whileHover={{ scale: 1.05 }} 
                                    className="text-[#111111] underline"
                                >
                                    <Link href="/login">Sign In.</Link>
                                </motion.span>
                            </p>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    )
}





// import Image from "next/image";
// import nike_logo from "@/app/images/nike_logo.png";
// import Link from "next/link";


// export default function JoinPage() {
//     return (
//         <div className="joinPage mx-auto p-5 mt-4 mb-10 max-w-sm sm:max-w-sm md:max-w-sm">
//             <div className="w-full mx-auto text-center h-auto">
//                 <div className="nike_logo mb-8 flex justify-center">
//                     <Image src={nike_logo} alt="nike_logo" className="w-[58.85px] h-[20.54px]" />
//                 </div>

//                 <div className="joinFormText mb-5">
//                     <h3 className="text-[#111111] font-bold text-[18px] mb-8 font-[Helvetica]">BECOME A NIKE MEMBER</h3>
//                     <p className="text-[#8D8D8D] text-[14px] text-center font-[Inter]">Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.</p>
//                 </div>

//                 <div className="joinForm">
//                     <form action="">
//                         <div className="inputFields mb-5 grid grid-cols-1 gap-4">
//                             <input type="text" name="email" placeholder="Email address" className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
//                             <input type="password" name="password" placeholder="Password" className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
//                             <input type="text" name="firstName" placeholder="First Name" className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
//                             <input type="text" name="lastName" placeholder="Last Name" className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
//                             <input type="text" placeholder="Date of Birth" className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
//                             <p className="text-[#8D8D8D] text-[13px] font-[Inter]">Get a Nike Member Reward every year on your Birthday.</p>
//                             <select name="" className="box-border text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2">
//                                 <option value="India">India</option>
//                                 <option value="Pakistan">Pakistan</option>
//                                 <option value="South Africa">South Africa</option>
//                                 <option value="Japan">Japan</option>
//                                 <option value="China">China</option>
//                             </select>
//                             <div className="checkbox flex justify-between gap-4">
//                                 <button className="border-[#BCBCBC] border-[1px] border-solid text-[#8D8D8D] text-[13px] font-[Helvetica] w-full sm:w-[48%] p-2">Male</button>
//                                 <button className="border-[#BCBCBC] border-[1px] border-solid text-[#8D8D8D] text-[13px] font-[Helvetica] w-full sm:w-[48%] p-2">Female</button>
//                             </div>
//                         </div>

//                         <div className="flex justify-start mb-5">
//                             <div className="checkbox flex gap-4 items-start">
//                                 <input type="checkbox" name="" className="border-[#BCBCBC] w-[20px] h-[20px]" />
//                                 <p className=" text-left text-[#8D8D8D] text-[13px] font-[Helvetica]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
//                             </div>
//                         </div>

//                         <div className="formText mb-5 text-center">
//                             <p className="text-[#8D8D8D] text-[13px] font-normal font-[Helvetica]">By creating an account, you agree to Nike's <span className="underline"><Link href="/">Privacy Policy</Link></span> and <span className="underline"><Link href="/">Terms of Use</Link></span></p>
//                         </div>

//                         <div className="joinButton mb-5">
//                             <button className="bg-[#111111] text-white text-[13px] font-[Helvetica] w-full p-2">JOIN US</button>
//                         </div>

//                         <div className="joinUs text-center">
//                             <p className="text-[#8D8D8D] text-[13px]">Already a Member? <span className="text-[#111111] underline"><Link href="/login">Sign In.</Link></span></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }




// // export default function JoinPage() {
// //     return (

// //         <div className="joinPage mx-auto w-[500px] p-5 mt-[10px] mb-10">
// //             <div className="w-[324px] mx-auto text-center align-center h-auto">
// //                 <div className="nike_logo w-auto h-auto ml-7 mb-8">
// //                     <Image src={nike_logo} alt="nike_logo" className="mx-auto w-[58.85px] h-[20.54px]" />
// //                 </div>

// //                 <div className="joinFormText w-auto h-auto mx-auto mb-5">
// //                     <h3 className="text-[#111111] font-bold text-[18px] mb-8 font-[Helvetica]">BECOME A NIKE MEMBER</h3>
// //                     <p className="text-[#8D8D8D] text-[14px]  text-center w-auto h-auto font-[Inter]">Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.</p>
// //                 </div>

// //                 <div className="joinForm w-auto h-auto">
// //                     <form action="">
// //                         <div className="inputFields w-auto h-auto mx-auto mb-5">
// //                             <input type="text" name="email" placeholder="Email address" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
// //                             <input type="password" name="password" placeholder="Password" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
// //                             <input type="text" name="firstName" placeholder="First Name" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
// //                             <input type="text" name="lastName" placeholder="Last Name" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
// //                             <input type="text" placeholder="Date of Birth" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" />
// //                             <p className="text-[#8D8D8D] mb-2 text-[13px] font-[Inter]">Get a Nike Member Reward every year on your Birthday.</p>
// //                             <select name="" id="" className=" box-border mb-2 text-[#8D8D8D] font-normal text-[15px] border-[#E5E5E5] border-solid border-2 outline-none w-full p-2" >
// //                                 <option value="India">India</option>
// //                                 <option value="Pakistan">Pakistan</option>
// //                                 <option value="Pakistan">Pakistan</option>
// //                                 <option value="Pakistan">Pakistan</option>
// //                                 <option value="South Africa">South Africa</option>
// //                                 <option value="Japan">Japan</option>
// //                                 <option value="China">China</option>
// //                             </select>
// //                             <div className="checkbox flex  justify-between">
// //                                 <button className="border-[#BCBCBC] border-[1px] border-solid text-[#8D8D8D] font-normal text-[13px]  font-[Helvetica] w-[155px]  p-2">Male</button>
// //                                 <button className="border-[#BCBCBC] border-[1px] border-solid  text-[#8D8D8D]  font-normal text-[13px] font-[Helvetica] w-[155px]  p-2">Female</button>
// //                             </div>
// //                         </div>

// //                         <div className="flex justify-between mb-5">
// //                             <div className="checkbox flex gap-4">
// //                                 <input type="checkbox" name="" id="" className="border-[#BCBCBC] w-[40px] h-[40px]" />
// //                                 <p className="text-[#8D8D8D] text-left font-normal text-[13px] font-[Helvetica]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
// //                             </div>
                            
// //                         </div>
// //                         <div className="formText w-auto h-auto mx-auto mb-5">
// //                             <p className="text-[#8D8D8D] text-[13px] font-normal  font-[Helvetica]">By creating an account, you agree to Nike's  <span className="underline" ><Link href="/" > Privacy Policy </Link></span> and <span className="underline"> <Link href="/"> Terms of Use.</Link></span></p>
// //                         </div>
// //                         <div className="joinButton w-auto h-auto mx-auto mb-5">
// //                             <button className="bg-[#111111] text-white font-normal text-[13px] font-[Helvetica] w-full p-2">JOIN US</button>
// //                         </div>
// //                         <div className="joinUs">
// //                             <p className="text-[#8D8D8D] text-[13px]">Already a Member? <span className="text-[#111111] underline"> <Link href="/login" > Sign In. </Link></span></p>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>


// //     )


// // }