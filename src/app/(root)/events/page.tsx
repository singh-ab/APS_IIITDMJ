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
import { Navbar } from "@/components/ui/Navbar";

const Events = () => {
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
          src="/events.png"
          alt="banner"
          width={1000}
          height={1000}
          layout="responsive"
          className="relative"
        />
      </div>

      <div className={styles.mainsection}>
        <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              Telescope Session
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              Our Telescope Sessions are designed to ignite curiosity and fascination among astronomy enthusiasts. In these hands-on sessions, we guide students on how to locate and observe celestial objects such as the Moon, planets, and constellations using telescopes. Participants also get the incredible opportunity to view these breathtaking astronomical wonders up close, making it a truly unforgettable experience.
            </p>
          </div>
          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/telescope.jpeg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/jwst.jpeg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              JWST Workshop
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              Dive into the wonders of space imaging with our James Webb Space Telescope (JWST) workshops. In these sessions, students learn the art of processing and stacking raw images captured by the JWST. Using specialized tools, participants transform raw data into stunning, readable visuals, unraveling the secrets of the cosmos in the process.
            </p>
          </div>
        </div>

        <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              Astrophotography
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              Unleash your creativity under the stars with our Astrophotography Sessions. Whether using a mobile phone, or a DSLR camera, participants learn to capture stunning images of celestial wonders directly from the night sky. These sessions provide a perfect blend of science and art, making astronomy a truly personal and visual experience.
            </p>
          </div>

          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/astrophotography.jpeg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>


        <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/treasurehunt.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              Treasure Hunt
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              Embark on an adventurous journey with our Celestial Treasure Hunt! In this event, participants navigate through locations renamed after celestial bodies, solving astronomy-themed riddles and puzzles along the way. It’s a thrilling blend of fun and learning, perfect for igniting curiosity and teamwork among space enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Events;
