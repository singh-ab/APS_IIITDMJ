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

      <footer className="bg-teal-900">
        <div className="max-w-8xl  py-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 ml-10  md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Contact Us</h3>
              <p className="mt-4 font-normal text-teal-400" >52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
                Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005</p>
              {/*UNDER DEVELOPMENT PHASE <p className="mt-2 font-normal gray-400">Phone: 123-456-7890</p> */}
              <p>Email: astronomy@iiitdmj.ac.in</p>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Links</h3>
              <ul className="mt-4 grid grid-cols-2 space-y-2 text-teal-400 font-normal">

                <li><a href="/about">About Us</a></li>
                <li><a href="/sessions">Sessions</a></li>
                <li><a href="/form">Form</a></li>
                <li><a href="/members">Members</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/forms">Forms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
              <ul className="mt-4 space-y-2  text-teal-400 font-normal">
                <li><a href="https://instagram.com/aps_iiitdmj">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/astronomy-and-physics-society/">LinkedIn</a></li>
                <li><a href="https://www.youtube.com/@AstronomyandPhysicsSociety">YouTube</a></li>
              </ul>
            </div>

            <div className="logo  ">
              <Image src="/footsticker.png" alt="logo" width={300} height={300} className={styles.rotate} />
            </div>
            {/* <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Newsletter</h3>
                <p className="mt-4">Subscribe to our newsletter to receive updates and news.</p>
                <form className="mt-2">
                  <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded-md bg-gray-800 text-white" />
                  <button type="submit" className="mt-2 py-2 px-4 bg-teal-400 text-white rounded-md">Subscribe</button>
                </form>
              </div> */
            }

          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 APS | All rights reserved.</p>
          </div>
        </div>
      </footer>

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
