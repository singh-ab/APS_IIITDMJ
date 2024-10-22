"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';
import { ButtonsCard } from "../../../components/ui/tailwindcss-buttons";

const Forms = () => {
  const router = useRouter()

  // const handleButtonClick = () => {
  //   router.push('https://forms.gle/zx9KBwpZjsxb9Ku39')
  // }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720); // Set isMobile based on viewport width
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
        <TailwindcssButtons/>
      </div>


    </div>

  )

  // const router = useRouter()

  // useEffect(() => {
  //   router.push('https://forms.gle/zx9KBwpZjsxb9Ku39') // Replace with the URL you want to redirect to
  // }, [router])

  // return null
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30 mb-10", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        {/* <HoveredLink href="/contact">Contact Us</HoveredLink> */}
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/sessions">Sessions</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-6 text-s">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/form">Form</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

//landing button component starts here
export function TailwindcssButtons() {
  const router = useRouter();

  const handleJoinUsClick = () => {
    router.push ('https://forms.gle/zx9KBwpZjsxb9Ku39');
  };

  return (
    <div>
      {buttons.map((button, idx) => (
        <ButtonsCard key={idx}>
          {React.cloneElement(button.component, { onClick: handleJoinUsClick })}
        </ButtonsCard>
      ))}
    </div>
  );
}

export const buttons = [
  {
    component: (
      <button className="shadow-[0_0_0_3px_teal-400_inset] px-6 py-2 bg-transparent border border-teal-400 dark:border-teal-400 dark:text-teal-400 text-teal-400 font-bold transform hover:-translate-y-1 transition duration-400 hover:border-white hover:text-white">
        Join Us
      </button>
    ),
  },
];
//landing button component ends here

export default Forms
