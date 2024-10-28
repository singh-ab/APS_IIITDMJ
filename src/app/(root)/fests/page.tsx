"use client";

import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from "next/image";
import styles from "./page.module.css";
// import {calsans} from "../../../fonts/calsans";
// import calsans from "../../../fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import InfiniteMarquee from "@/components/ui/marquee";
import { BentoGridDemo } from "@/app/page";
import { Navbar } from "@/components/ui/Navbar";

const Events = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  return (
    <div className={styles.main}>
      {/* <div className="relative w-full flex items-center justify-end top-2"> */}
      <div className="relative w-full flex items-center justify-end">
        {renderNavbar()}
      </div>
      {/* <div className="logo"> */}
      <div className="logo relative -mt-5 z-10">
        {/* <Image src="/aboutbanner.jpg" alt="banner" width={1000} height={1000} layout="responsive" /> */}
        <Image
          src="/fests.jpg"
          alt="banner"
          width={1000}
          height={1000}
          layout="responsive"
          className="relative"
        />
      </div>

        <div className="under-development">
          <Image
            src="/underdev.png"
            alt="Under Development"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>

      </div>
  );
};


export default Events;
