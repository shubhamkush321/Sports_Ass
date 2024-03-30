import Link from 'next/link';
import React from 'react';
import { ImCross } from 'react-icons/im';

// types of props
interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav, nav}: Props) => {
  const navStyle = nav?'translate-x-0':'translate-x-[-100%]';
  return (
    <div className={`fixed ${navStyle} top-0 bottom-0 right-0 left-0 transition-all duration-500 bg-[#000000e0] z-[2002]`}>
      {/* close icon */}
      <ImCross onClick={closeNav} className='absolute top-2 right-2 w-6 h-6 text-white cursor-pointer'/>
      {/* NavLinks div */}
      <div className={`bg-blue-100 bg-opacity-45 ${navStyle}transition-all duration-500 delay-200 flex items-center justify-center w-3/4 h-full border-red-600 border-1`}>

        {/* Nav Links */}
        <ul className='space-y-10'>
          {/* Home Link */}
          <li className='text-2xl text-white font-medium uppercase hover:text-neutral-700 transition-all duration-200'>
            <Link href='#'>Home</Link>
          </li>
          {/* About Link */}
          <li className='text-2xl text-white font-medium uppercase hover:text-neutral-700 transition-all duration-200'>
            <Link href='#'>About</Link>
          </li>
          {/* News Link */}
          <li className='text-2xl text-white font-medium uppercase hover:text-neutral-700 transition-all duration-200'>
            <Link href='#'>News</Link>
          </li>
          {/* Contact Link */}
          <li className='text-2xl text-white font-medium uppercase hover:text-neutral-700 transition-all duration-200'>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
