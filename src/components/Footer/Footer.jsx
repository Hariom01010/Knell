import Image from "next/image"
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <div className="border-t-2 py-2 md:px-28 flex justify-between">

          <div className=" flex items-start md:items-center">
              <Image src="/logo.png" alt="logo of knell" width={50} height={50} className="mx-1 md:mx-3 w-[30%]"/>
              <h1 className='font-bold text-lg mt-2 md:mt-0 md:text-xl' >Knell</h1>
          </div>

          <div className="flex">
            <div className="md:mx-14"> 
                <p className="my-2 md:my-4 text-sm md:text-base font-semibold cursor-pointer">Home</p>
                <p className="my-2 md:my-4 text-sm md:text-base font-semibold cursor-pointer">About</p>
                <p className="my-2 md:my-4 text-sm md:text-base font-semibold cursor-pointer">Contact Us</p>
            </div>

            <div>
                <p className="my-2 md:my-4 text-sm md:text-base font-semibold cursor-pointer">Become a Provider</p>
                <p className="my-2 md:my-4 text-sm md:text-base font-semibold cursor-pointer">Request Service</p>
            </div>
          </div>
        </div>

        <hr className="mx-8 border-[1px] border-darkBackground dark:border-darkTextColor"/>
        <div className="flex flex-col md:flex-row md:items-center justify-between md:mx-20 my-2">
          <div className="flex">
            <Link href='https://x.com/Knell_Market'><FaXTwitter size={40} className="mx-1 md:mx-3 py-2 bg-darkBackground text-darkTextColor dark:bg-darkTextColor dark:text-darkBackground rounded-full"/></Link>
            <Link href='https://www.linkedin.com/company/knell4all/'><FaLinkedinIn size={40} className="mx-1 md:mx-3 py-2 bg-darkBackground text-darkTextColor dark:bg-darkTextColor dark:text-darkBackground rounded-full"/></Link>
            <Link href='https://www.instagram.com/knellmarketplace?igsh=YXNuanpueGEwYjBs'><FaInstagram size={40} className="mx-1 md:mx-3 py-2 bg-darkBackground text-darkTextColor dark:bg-darkTextColor dark:text-darkBackground rounded-full"/></Link>
          </div>

          <div className="text-sm md:text-base">2025 &#169; Knell | All Rights Reserved</div>
        </div>
    </div>
  )
}

export default Footer
