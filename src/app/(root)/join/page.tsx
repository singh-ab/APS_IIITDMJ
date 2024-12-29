"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';
import { ButtonsCard } from "../../../components/ui/tailwindcss-buttons";
import { Navbar } from '@/components/ui/Navbar';
import Button from '@/components/button';

const Forms = () => {
  const router = useRouter()

  // const handleButtonClick = () => {
  //   router.push('https://forms.gle/zx9KBwpZjsxb9Ku39')
  // }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  return (

    <div style={{
      backgroundImage: 'url(/6.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      alignItems: 'center',
      color: 'white',
      position: 'relative'
    }}>
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <h1 style={{ zIndex: 1 }} className='text-white  text-4xl md:text-4xl font-jetbrains-mono mb-1'>WANT TO BE  <br /> A MEMBER ??</h1>
        <h3 style={{ zIndex: 1 }} className='text-teal-300  text-m md:text-m mb-6'>Astronomy and Physics Society</h3>
        <Button onClick={()=>router.push('https://forms.gle/zx9KBwpZjsxb9Ku39')}>Join Us</Button>
      </div>
    </div>
  )
}

export default Forms
