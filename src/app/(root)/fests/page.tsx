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


      <div className={styles.mainsection}>
        <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              IIT BHU - 2023
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              • Secured 1st & 2nd positions in exploring the interstellar <br />
              • Secured 1st position in Astrophotography <br />
              • Secured 2nd position in Scientists of Utopia <br />
              • Secured 3rd position in Astroquiz <br />
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
              IIT KANPUR (TECHKRITI) - 2023
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
            • Secured all top 3 positions in Astro quiz <br />
            • Secured first position in Observe, Analyse & Solve <br />
            •  Secured 1st position in Egg Drop Challenge <br />
            </p>
          </div>
        </div>

        <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
            IIT KANPUR (TECHKRITI) - 2021
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
            •  Secured all top 3 positions in every Astronomy centered event
            </p>
          </div>

          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/astrophoto.jpg"
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
            IIT INDORE - 2021
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
            • Won Astronomy Quiz <br />
            </p>
          </div>
        </div>
      </div>


      <div className="abouttext bg-grey-600 flex flex-col md:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
            IIT KANPUR (TECHKRITI) - 2019
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
            •  Won all events including Astro Hunt & Terraforming Competition
            </p>
          </div>

          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/astrophoto.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>


    </div>
  );
};


export default Events;
