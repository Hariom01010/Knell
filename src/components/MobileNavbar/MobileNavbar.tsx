"use client"

import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import useStore from "@/store/store";
import Link from "next/link";

function MobileNavbar() {
  const [dropDown, setDropDown] = useState(false)
  const {mode, setModeDark, setModeLight} = useStore();

  return (
    <div className="block sm:hidden">
        {
         dropDown 
         ? <RxCross2 size={25} onClick={() => setDropDown(false)}/>
         : <RxHamburgerMenu size={25} onClick={() => setDropDown(true)}/>
        }

      <div className={`${dropDown ? "absolute" : "hidden"} mx-3 top-14 right-10 bg-primaryBackground border-2 border-primaryTextColor rounded-md dark:bg-darkBackground`}>
        <ul className="pl-4 pr-16 pt-4">
            <li className="py-2" onClick={()=> setDropDown(false)}>Home</li>
            <li className="py-2" onClick={()=> setDropDown(false)}>About</li>
            <li className="py-2" onClick={()=> setDropDown(false)}>Service</li>
            <li className="py-2" onClick={()=> setDropDown(false)}>Contact</li>
        </ul>
        <div>
            <Link href={'/signup/provider'}><button className='bg-button p-2 mx-3 my-5 rounded-md text-[#ffffff]' onClick={()=> setDropDown(false)}>Become a Provider</button></Link>
            <Link href={'/signup/user'}><button className='border border-button p-2 mx-3 my-5 rounded-md ' onClick={()=> setDropDown(false)}>Request Service</button></Link>
        </div>
        <div className="flex justify-end my-2 mx-4">
            {
                mode == 'light' ?
                <FaRegMoon onClick={setModeDark} size={18} className='cursor-pointer mt-4 text-right'/> :
                <IoMdSunny onClick={setModeLight} size={20} className='cursor-pointer mt-4 text-right'/>
            }
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
