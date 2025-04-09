import Feature from "@/components/Features/Feature";
import Ratings from "@/components/Ratings/Ratings";
import Footer from "@/components/Footer/Footer";
import Services from "@/components/Services/Services"
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-around md:mt-2 py-36  bg-gradient-to-b from-[#7adf94] to-primaryBackground md:bg-none'>
        <div className="text-center md:text-left">
          <h2 className='mt-14 mb-2 text-2xl md:text-4xl text-center md:text-left font-bold'>Professional Services by Student</h2>
          <h2 className='mb-5 text-2xl md:text-4xl text-center md:text-left font-bold'>Specialists</h2>
          <p className='mb-11 italic text-lg md:text-xl text-[#5c5c5c] dark:text-[#b5b5b5]'>&apos;Knell – Expert Services by Students, For Everyone!&apos;</p>

          <div className='mb-14 text-center md:text-left'>
            <Link href={'/signup/provider'}><button className='bg-button p-2 mx-3 my-5 rounded-md text-[#ffffff]'>Become a Provider</button></Link>
            <Link href={'/signup/user'}><button className='border border-button p-2 mx-3 my-5 rounded-md '>Request Service</button></Link>
          </div>
        </div>
        <div>
          <Image src='/service.jpg' width={500} height={500} alt="service image" className="rounded-xl hidden md:inline"/> 
        </div>
      </div>

      <Feature />
      <Services />
      <div>
        <h2 className="font-bold lg:text-5xl sm:text-4xl mt-20 mb-3 mx-7">Don&apos;t take our word for it,</h2>
        <h2 className="font-bold lg:text-5xl sm:text-4xl mx-7">see what our clients say</h2>

        <p className="mx-7 mt-8 pr-10">We&apos;re honored by the feedback, and it fuels our commitment to delivering exceptional financial services.</p>
        <p className="mx-7 pr-10">Your trust is our greatest achievment.</p>
      </div>
      <Ratings />

      <div className="bg-darkTextColor dark:bg-secondaryDarkBackground p-10 flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl sm:text-3xl">Become knell member like you want</h1>

        <div className="flex flex-wrap p-3">
          <div className="bg-secondaryDarkBackground dark:bg-[#fdfcfb] rounded-xl md:mx-10 my-5">
            <div className="md:px-5 py-3">
              <p className="font-bold bg-[#D5F8D0] dark:bg-[#D5F8D0] text-primaryTextColor inline-block m-3 mb-8 px-2 py-1 md:px-3 md:py-1 rounded-md">Client</p>
              <h1 className="text-xl font-bold px-3 text-darkTextColor dark:text-primaryTextColor">Find the Best Services for You</h1>

              <div className="px-3 my-7 text-darkTextColor dark:text-primaryTextColor">
                <div className="flex items-center my-4 text-sm md:text-base">
                  <FaRegCircleCheck className="mr-2"/>
                  <p>Easily find skilled professionals for your needs</p>
                </div>
                <div className="flex items-center my-4 text-sm md:text-base">
                  <FaRegCircleCheck className="mr-2"/>
                  <p>Book services at your preferred time and location</p>
                </div>
                <div className="flex items-center my-4 text-sm md:text-base">
                  <FaRegCircleCheck className="mr-2"/>
                  <p>Reliable service backed by reviews and ratings</p>
                </div>
              </div>

              <button className="bg-button text-[#ffffff] m-3 mt-5 px-3 py-2 rounded-md">Request a Service</button>
            </div>
            {/* <Image src='/client.jpg' width={800} height={800} className="rounded-b-md" alt="client"/> */}
          </div>

          <div className="bg-secondaryDarkBackground dark:bg-[#fdfcfb] rounded-xl mx-3 md:mx-10">
            <div className="md:px-5 py-3">
              <p className="font-bold bg-[#D5F8D0] dark:bg-[#D5F8D0] text-primaryTextColor inline-block m-3 mb-8 px-3 py-1 rounded-md">Service Provider</p>
              <h1 className="text-2xl font-bold px-3 text-darkTextColor dark:text-primaryTextColor">Find the Best Services for You</h1>
              
              <div className="px-3 my-7 text-darkTextColor dark:text-primaryTextColor">
                <div className="flex items-center my-2">
                  <FaRegCircleCheck className="mr-2"/>
                  <p>Set your own schedule and pricing</p>
                </div>
                <div className="flex items-center my-2">
                  <FaRegCircleCheck className="mr-2"/>
                  <p>Connect with potential clients effortlessly</p>
                </div>
                <div className="flex items-center my-2">
                  <FaRegCircleCheck className="mr-2"/>
                  <p>Build trust through ratings and reviews</p>
                </div>
              </div>

              <button className="bg-button text-[#ffffff] m-3 mt-5 px-3 py-2 rounded-md">Join as a Service Provider</button>
            </div>
            {/* <Image src='/provider.jpg' width={800} height={1000} className="rounded-b-md" alt="provider"/> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
