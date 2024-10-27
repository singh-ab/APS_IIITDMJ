"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "../../../components/ui/navber-mobile";
import Image from "next/image";
import styles from "./page.module.css";

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

  const renderNavbar = () => (isMobile ? <NavbarMobile /> : <Navbar className="" />);

  const images = [
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    
  ];

  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <h1 className="text-white text-4xl font-jetbrains-mono mb-2">Gallery</h1>
        <h3 className="text-teal-300 mb-6">Astronomy and Physics Society Memories</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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

export default Gallery;