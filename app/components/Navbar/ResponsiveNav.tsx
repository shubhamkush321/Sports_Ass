"use client";

import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = React.useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  
  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav