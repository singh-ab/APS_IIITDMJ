"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';

const Members = () => {

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

  const members = [
    {
      name: "Abhay Singh",
      description: "Coordinator",
      linkedin: "https://www.linkedin.com/in/singhabhay1/",
      twitter: "https://x.com/THEBLACKEYES09",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:21bec003@iiitdmj.ac.in",
      image: "/coordinator.jpg"
    },
    {
      name: "Shuvam Patra",
      description: "Graphic and Media Lead",
      linkedin: "https://www.linkedin.com/in/shuvam-patra-157b50229/",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/blackeyesandblue09/",
      gmail: "mailto:shuvampatra2003@gmail.com",
      image: "/shuvam.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image3.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image4.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image5.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image6.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image7.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image8.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image9.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image10.jpg"
    },
    {
      name: "John Doe",
      description: "Software Engineer",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      image: "/path/to/image11.jpg"
    },
  ];

  return (
    <div className="main">
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>

      <div className="logo">
        <Image src="/membersbanner.png" alt="banner" width={1000} height={1000} layout="responsive" />
      </div>



      <div style={{
        backgroundImage: 'url(/9.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '50%',
        transition: 'background-position 0.5s ease',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}>

        <h1 className="font-jetbrains-mono text-4xl text-white text-center pb-10">
          THE CREW
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-600 shadow-md rounded-lg p-4 backdrop-blur-md bg-opacity-30 border-2 border-white/[0.2] ">
              <div className="header h-72 bg-gray-200 rounded-md mb-4 backdrop-blur-md bg-opacity-60">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              {/* <div className="relative w-full h-full">
                
              </div> */}
              <h2 className="font-jetbrains-mono font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">{member.name}</h2>
              <p className="font-sans font-normal text-teal-400 text-xs dark:text-neutral-300">{member.description}</p>
              <div className="flex space-x-4 mt-4 mb-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="x.png" alt="Twitter" className="w-4 h-4" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="instagram.png" alt="Instagram" className="w-4 h-4" />
                </a>
                <a href={member.gmail} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="/gmail.png" alt="Gmail" className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
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
                {/* <li><a href="/contact">Contact</a></li> */}
                <li><a href="/members">Members</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/forms">Forms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
              <ul className="mt-4 space-y-2  text-teal-400 font-normal">
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
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
            <p>&copy; 2024 APS, All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

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

export default Members
