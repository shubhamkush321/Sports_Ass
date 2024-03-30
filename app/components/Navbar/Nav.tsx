import React from 'react'
import Logo from "@/public/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { BiMenu } from "react-icons/bi";
import Theme from './Theme';
 
// types of props
interface Props{
  openNav: () => void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='h-[10vh] shadow-md'>
      <div className='flex items-center justify-between h-[100%] w-[90%] mx-auto '>
        {/* Logo */}
        {Logo && (
          <Image src={Logo} alt="Logo" width={80} height={80} />
        )}

        <ul className='hidden lg:flex items-center space-x-14'> 
          {/* Home Link */}
          <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-100'>
            <Link href='#' className='text-black dark:text-white'>Home</Link>
          </li>
          {/* About Link */}
          <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-100'>
            <Link href='#' className='text-black dark:text-white'>About</Link>
          </li>
          {/* News Link */}
          <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-100'>
            <Link href='#' className='text-black dark:text-white'>News</Link>
          </li>
          {/* Contact Link */}
          <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-100'>
            <Link href='#' className='text-black dark:text-white'>Contact</Link>
          </li>
        </ul>
        {/* Join Button */}
        <div className='flex items-center space-x-3'>
          <button className={`px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 bg-green-500 hover:bg-blue-800 text-white font-semibold`}>
            Join 
          </button>
        {/* {Theme} */}
        <div className='flex flex-1 justify-end'> 
        <Theme/>
        </div>
        {/* Menu */}
        <BiMenu onClick = {openNav} className='w-[2rem] h-[2rem] text-red-500 lg:hidden'/>
        </div>
      </div>
    </div>
  )
}


export default Nav;