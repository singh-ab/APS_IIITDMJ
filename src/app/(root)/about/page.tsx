"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';
// import {calsans} from "../../../fonts/calsans";
// import calsans from "../../../fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";

const About = () => {
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
    <div className={styles.main}>
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>
      <div className="logo">
        <Image src="/aboutbanner.jpg" alt="banner" width={1000} height={1000} className={styles.rotate} layout="responsive" />
      </div>

      <div className="mainsection">
        <div className="abouttext  bg-teal-900 flex flex-row justify-center"> {/* Modified line */}
          <div className="pt-20 pb-20 pl-32 pr-32 w-1/2"> {/* Modified line */}
            <h1 className="font-jetbrains-mono text-4xl text-white ">About</h1>

            <p className="mt-6 text-teal-400">We are the Astronomy and Physics Society of IIITDM Jabalpur. We are a group of many astro-enthusiasts under the Gymkhana of the IIITDM Jabalpur. Here, we attempt to bring about an interest and awareness in the field of Astronomy and Space Research. All along the we have been promoting amateur astronomy through talks, competetions and shows.</p>
          </div>
          <div className="bg-cover flex align-middle relative  w-1/2"> {/* Modified line */}
            <Image className="mr-20" src="/aboutimg.jpg" alt="about" layout="fill" objectFit="cover" />
          </div>
        </div>


        <TracingBeamDemo />

        <div className="section mt-20 pt-20 pb-20 pl-32 pr-32  bg-teal-900">
          <h1 className="font-jetbrains-mono text-4xl text-white pb-4">Our Efforts</h1>
          <p className="text-gray-300">The Astronomy and Physics Society is dedicated to fostering a deeper 
            understanding <br /> of the cosmos through engaging and interactive activities. Our club offers a variety of 
            sessions <br /> and workshops, each designed to inspire curiosity and learning about astronomy and physics.
          </p>
          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Astronomy Sessions</h2>
          <p className="text-gray-300">Regular sessions related to Astronomy and Physics including separate discussions<br />
            and knowledge-sharing sessions, where members can dive deeper into specific areas of interest.<br />
            Workshops like Image Processing Workshop and Telescope Workshop
          </p>
          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Workshops</h2>
          <p className="text-gray-300">Workshops such as the JWST Image Processing Workshop, Telescope Workshop, <br />
             and Astrophotography Workshop where participants learn hands-on skills essential for astronomical exploration.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Observatory Sessions</h2>
          <p className="text-gray-300">Our members frequently participate in observation sessions where we use telescopes
             to explore <br /> the Moon, nebulae, and planets like Saturn.
              Naked-eye observations and binocular use also play <br /> an important role in our sessions, making astronomy accessible to all.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Quizzing And Competitions</h2>
          <p className="text-gray-300">To encourage friendly competition and learning, we organize quizzes and competitions
             such as Treasure Hunts -<br /> which is also one of our flagship events - open to anyone with an interest in the mysteries of the universe.
          </p>
        </div>
      </div>
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30 mb-10", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/contact">Contact Us</HoveredLink>
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/sessions">Sessions</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-6 text-s">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/form">Form</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-2xl mx-auto antialiased pt-5 pb-5 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-15 flex">
            <div className="flex-1">
              <h2 className="bg-teal-900 text-white rounded-full text-sm w-fit px-6 py-1 mb-4">
                {item.badge}
              </h2>
              <p className="text-xl mb-4 font-bold text-teal-400">
                {item.title}
              </p>
              {item.description}
            </div>

            <div className="flex-1 text-sm prose prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Abhay Singh",
    description: (
      <>
        <p>Name: John Doe</p>
        <p>Role: Coordinator</p>
        <p>Email: john.doe@example.com</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:john.doe@example.com">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/coordinator.jpg",
      alt: "Coordinator",
    },
    badge: "Coordinator",
  },
  {
    title: "Alok Rai",
    description: (
      <>
        <p>Name: John Doe</p>
        <p>Role: Co-Coordinator</p>
        <p>Email: john.doe@example.com</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:john.doe@example.com">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/cocoordinator.jpg",
      alt: "Cocoordinator",
    },
    badge: "Co-Coordinator",
  },
];

export default About;