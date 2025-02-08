"use client"

import SearchInput from "@/app/components/searchBar/SearchInput"
import Link from "next/link";
import Image from "next/image";
import ContactIconPhone from "@/app/images/Image.png"
import ContactIconChat from "@/app/images/Image (1).png"
import ContactIconEmail from "@/app/images/Image (2).png"
import ContactIconLocation from "@/app/images/Image (3).png"
import ThumbUpIcon from "@/app/images/thumb1.svg"
import ThumbDownIcon from "@/app/images/thumb2.svg"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Page Header Section */}
      <header className="text-center py-8 md:py-12 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-2xl md:text-4xl font-normal mb-4">GET HELP</h1>
        <div className=" w-auto mx-auto mb-8">
          <SearchInput />
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Primary Content Section */}
        <main className="flex-1 lg:max-w-3xl xl:max-w-4xl animate__animated animate__fadeIn animate__delay-2s">
          <article className="prose max-w-none">
            <h2 className="text-xl md:text-3xl font-medium mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            
            <p className="mb-6">
              We want to make buying your favourite Nike shoes and gear online fast and easy, 
              and we accept the following payment options:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</li>
              <li>Apple Pay</li>
            </ul>

            <p className="mb-8">
              <Link href="/" className="underline font-medium hover:text-[#111111] transition-colors duration-200 ease-in-out">Nike Members</Link> can store multiple debit 
              or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="w-auto h-auto px-5 transform hover:scale-105 transition-all duration-300 ease-in-out py-2 text-center rounded-full text-[15px] text-[#ffffff] bg-[#111111] font-medium font-Inter">JOIN US</button>
              <button className="w-auto h-auto  px-5 transform hover:scale-105 transition-all duration-300 ease-in-out rounded-full text-[15px] text-[#ffffff] bg-[#111111] font-medium font-Inter">SHOP NIKE</button>
            </div>



            {/* FAQ Section */}
            <section className="space-y-8 animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-lg md:text-2xl font-medium">FAQs</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Does my card need international purchases enabled?</h4>
                  <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Can I pay for my order with multiple methods?</h4>
                  <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What payment method is accepted for SNKRS orders?</h4>
                  <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Why don't I see Apple Pay as an option?</h4>
                  <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                </div>
              </div>
            </section>

            {/* Feedback Section */}
            <div className="mt-12 animate__animated animate__fadeIn animate__delay-4s">
              <p className="mb-4">Was this answer helpful?</p>
              <div className="flex gap-3">
                <Image src={ThumbUpIcon} alt="Helpful" className="size-8 hover:scale-110 transition-all duration-200 ease-in-out" />
                <Image src={ThumbDownIcon} alt="Not helpful" className="size-8 hover:scale-110 transition-all duration-200 ease-in-out" />
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 animate__animated animate__fadeIn animate__delay-5s">
              <p className="text-gray-600 font-medium mb-4">RELATED</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="underline hover:text-[#111111] transition-colors duration-200 ease-in-out">WHAT ARE NIKE'S DELIVERY OPTIONS?</Link>
                </li>
                <li>
                  <Link href="#" className="underline hover:text-[#111111] transition-colors duration-200 ease-in-out">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
                </li>
              </ul>
            </div>
          </article>
        </main>

        {/* Contact Sidebar */}
        <aside className="lg:w-96 xl:w-[420px] lg:pl-8 lg:border-l-2 lg:border-gray-200">
          <div className="space-y-12 text-center animate__animated animate__fadeIn animate__delay-6s">
            <h3 className="text-xl md:text-3xl font-medium">CONTACT US</h3>
            
            <ContactCard
              icon={ContactIconPhone}
              title="000 800 919 0566"
              description={
                <>
                  Products & Orders: 24 hours a day, 7 days a week<br />
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </>
              }
            />

            <ContactCard
              icon={ContactIconChat}
              title="24 hours a day"
              description="7 days a week"
            />

            <ContactCard
              icon={ContactIconEmail}
              title="We'll reply within"
              description="five business days"
            />

            <ContactCard
              icon={ContactIconLocation}
              title="STORE LOCATOR"
              description="Find Nike retail stores near you"
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

import { StaticImageData } from 'next/image';

interface ContactCardProps {
  icon: StaticImageData;
  title: string;
  description: React.ReactNode;
}

function ContactCard({ icon, title, description }: ContactCardProps) {
  return (
    <div className="space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
      <Image 
        src={icon} 
        alt="" 
        className="size-16 mx-auto"
        width={64}
        height={64}
      />
      <h4 className="font-medium">{title}</h4>
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  )
}

// import SearchInput from "@/app/components/searchBar/SearchInput"
// import Link from "next/link";
// import Image from "next/image";
// import ContactIconPhone from "@/app/images/Image.png"
// import ContactIconChat from "@/app/images/Image (1).png"
// import ContactIconEmail from "@/app/images/Image (2).png"
// import ContactIconLocation from "@/app/images/Image (3).png"
// import ThumbUpIcon from "@/app/images/thumb1.svg"
// import ThumbDownIcon from "@/app/images/thumb2.svg"

// export default function ContactPage() {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//       {/* Page Header Section */}
//       <header className="text-center py-8 md:py-12">
//         <h1 className="text-2xl md:text-4xl font-normal mb-4">GET HELP</h1>
//         <div className=" w-auto mx-auto mb-8">
//           <SearchInput />
//         </div>
//       </header>

//       {/* Main Content Grid */}
//       <div className="flex flex-col lg:flex-row gap-8 pb-12">
//         {/* Primary Content Section */}
//         <main className="flex-1 lg:max-w-3xl xl:max-w-4xl">
//           <article className="prose max-w-none">
//             <h2 className="text-xl md:text-3xl font-medium mb-4">
//               WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
//             </h2>
            
//             <p className="mb-6">
//               We want to make buying your favourite Nike shoes and gear online fast and easy, 
//               and we accept the following payment options:
//             </p>
            
//             <ul className="list-disc pl-6 space-y-2 mb-6">
//               <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
//               <li>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</li>
//               <li>Apple Pay</li>
//             </ul>

//             <p className="mb-8">
//               <Link href="/" className="underline font-medium">Nike Members</Link> can store multiple debit 
//               or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
//             </p>

//             <div className="flex flex-wrap gap-4 mb-12">
//               <button className="btn-primary">JOIN US</button>
//               <button className="btn-primary">SHOP NIKE</button>
//             </div>

//             {/* FAQ Section */}
//             <section className="space-y-8">
//               <h3 className="text-lg md:text-2xl font-medium">FAQs</h3>
              
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-semibold mb-2">Does my card need international purchases enabled?</h4>
//                   <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-2">Can I pay for my order with multiple methods?</h4>
//                   <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-2">What payment method is accepted for SNKRS orders?</h4>
//                   <p>You can use any accepted credit card to pay for your SNKRS order.</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-2">Why don't I see Apple Pay as an option?</h4>
//                   <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
//                 </div>
//               </div>
//             </section>

//             {/* Feedback Section */}
//             <div className="mt-12">
//               <p className="mb-4">Was this answer helpful?</p>
//               <div className="flex gap-3">
//                 <Image src={ThumbUpIcon} alt="Helpful" className="size-8" />
//                 <Image src={ThumbDownIcon} alt="Not helpful" className="size-8" />
//               </div>
//             </div>

//             {/* Related Links */}
//             <div className="mt-12">
//               <p className="text-gray-600 font-medium mb-4">RELATED</p>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="underline">WHAT ARE NIKE'S DELIVERY OPTIONS?</Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
//                 </li>
//               </ul>
//             </div>
//           </article>
//         </main>

//         {/* Contact Sidebar */}
//         <aside className="lg:w-96 xl:w-[420px] lg:pl-8 lg:border-l-2 lg:border-gray-200">
//           <div className="space-y-12 text-center">
//             <h3 className="text-xl md:text-3xl font-medium">CONTACT US</h3>
            
//             <ContactCard
//               icon={ContactIconPhone}
//               title="000 800 919 0566"
//               description={
//                 <>
//                   Products & Orders: 24 hours a day, 7 days a week<br />
//                   Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
//                 </>
//               }
//             />

//             <ContactCard
//               icon={ContactIconChat}
//               title="24 hours a day"
//               description="7 days a week"
//             />

//             <ContactCard
//               icon={ContactIconEmail}
//               title="We'll reply within"
//               description="five business days"
//             />

//             <ContactCard
//               icon={ContactIconLocation}
//               title="STORE LOCATOR"
//               description="Find Nike retail stores near you"
//             />
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }

// import { StaticImageData } from 'next/image';

// interface ContactCardProps {
//   icon: StaticImageData;
//   title: string;
//   description: React.ReactNode;
// }

// function ContactCard({ icon, title, description }: ContactCardProps) {
//   return (
//     <div className="space-y-4">
//       <Image 
//         src={icon} 
//         alt="" 
//         className="size-16 mx-auto"
//         width={64}
//         height={64}
//       />
//       <h4 className="font-medium">{title}</h4>
//       <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
//     </div>
//   )
// }
