"use client";

import React, { useState, useEffect } from "react";
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

  const images = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg", "/g6.jpg", "/g7.jpg"];

  return (
    <div className={styles.mainContainer}>
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.galleryTitle}>Gallery</h1>
        <h3 className={styles.gallerySubtitle}>Astronomy and Physics Society Memories</h3>
        <div className={styles.imageGrid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image src={src} alt={`Gallery image ${index + 1}`} width={300} height={200} className="object-cover rounded-lg" />
            </div>
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
