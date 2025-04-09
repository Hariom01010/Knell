"use client";

import Image from "next/image"
import { FaRegMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import useStore from "@/store/store";
import { useEffect } from "react";
import Link from "next/link";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

export default function Navbar() {
  const {mode, setModeDark, setModeLight} = useStore();

  useEffect(()=>{
    document.documentElement.className = mode;
    localStorage.setItem('mode',mode)
  }, [mode])

  return (
    <div className='flex items-center justify-between px-10 py-1 mt-2 border-b-[1px] border-darkBackground dark:border-darkTextColor'>
      <Link href={'/'}>
        <div className="flex items-center ">
          <Image src="/logo.png" alt="logo of knell" width={50} height={50} className="mx-3"/>
          <h1 className='font-bold text-2xl' >Knell</h1>
        </div>
      </Link>

      <div className='mx-5 hidden sm:block'>
        <ul className='flex font-bold'>
          <li className='mx-3'>Services</li>
          <li className='mx-3'>Why Us</li>
          <li className='mx-3'>Contact Us</li>
          <li className='mx-3'>FAQs</li>
        </ul>
      </div>

      {
        mode == 'light' ?
        <FaRegMoon onClick={setModeDark} size={18} className='cursor-pointer hidden sm:block'/> :
        <IoMdSunny onClick={setModeLight} size={20} className='cursor-pointer hidden sm:block'/>
      }
      <MobileNavbar />
    </div>
  )
}

