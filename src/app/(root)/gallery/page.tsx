"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "../../../components/ui/navber-mobile";
import { LayoutGrid } from "../../../components/ui/layout-grid";
import styles from "./page.module.css"; // Adjust the path as necessary

// Define your skeleton components for the cards
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">JWST Session</p>
      <p className="font-normal text-base text-neutral-200">
      JWST session explores groundbreaking discoveries in astronomy, showcasing its capability to observe distant galaxies, study exoplanets, and unravel the mysteries of the universe..
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Moon Serenity</p>
      <p className="font-normal text-base text-neutral-200">
      Observing the moon through the telescope revealed its stunning surface details, showcasing a breathtaking landscape of craters and maria that left everyone in awe.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Telescope Session</p>
      <p className="font-normal text-base text-neutral-200">
      The telescope session offered participants a unique opportunity to observe celestial bodies up close, deepening their understanding of astronomy and the wonders of the universe.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">JIGYASA 2023</p>
      <p className="font-normal text-base text-neutral-200">
      Jigyasa 2023 at IIITDM Jabalpur was a vibrant and engaging event that brought together students and faculty to showcase innovative projects, foster collaboration, and ignite curiosity in various fields of technology and research..
      </p>
    </div>
  );
};

const SkeletonFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Treasure Hunt</p>
    <p className="font-normal text-base text-neutral-200">
    Join us for the APS Treasure Hunt, where adventure meets discovery in a race to uncover hidden gems
    </p>
  </div>
);
const SkeletonSix = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Image data Workshop</p>
    <p className="font-normal text-base text-neutral-200">
     Learn how to process data from the JWST tpo create your own amazing set of universe
    </p>
  </div>
);

const SkeletonSeven = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Astro Quiz</p>
    <p className="font-normal text-base text-neutral-200">
    Test your cosmic knowledge at the APS Astro Quiz Session and discover the wonders of the universe
    </p>
  </div>
);

const SkeletonEight = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Mars Case Study </p>
    <p className="font-normal text-base text-neutral-200">
    Participate in the Mars Case Study Competition, where teams tackle real-world challenges of Martian exploration and innovation.
    </p>
  </div>
);

// Main Gallery Component
const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderNavbar = () => (isMobile ? <NavbarMobile /> : <Navbar />);

  // Define your cards data
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/n1.png",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/p2.png",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/p3.png",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/n2.png",
    },
    {
      id: 5,
      content: <SkeletonFive />,
      className: "col-span-1",
      thumbnail: "/n5.png",
    },
    {
      id: 6,
      content: <SkeletonSix />,
      className: "md:col-span-2",
      thumbnail: "/n6.png",
    },
    {
      id: 7,
      content: <SkeletonSeven />,
      className: "md:col-span-2",
      thumbnail: "/n7.png",
    },
    {
      id: 8,
      content: <SkeletonEight />,
      className: "col-span-1",
      thumbnail: "/n8.png",
    },
  ];

  return (
    <>
    <div className="h-8 py-20 w-full mt-5">
      {renderNavbar()}
      {/* Header Text */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-white">APS Memories</h1>
        <p className="text-lg text-neutral-300">Click on images to explore more.</p>
      </div>
      {/* Layout Grid */}
      <LayoutGrid cards={cards} />
    </div>





    <div className="h-screen py-20 w-full">
      {renderNavbar()}
      <LayoutGrid cards={cards} />
    </div>
    </>
  );
};

// Navbar Component
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        <HoveredLink href="/gallery">Gallery</HoveredLink>
      </Menu>
    </div>
  );
}

// Export the Gallery component as default
export default Gallery;
