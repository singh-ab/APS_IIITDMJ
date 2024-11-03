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
import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beams-with-collision";
import Datacard  from "./Datacard";
import { Navbar } from "@/components/ui/Navbar";


const Outreach = () => {

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

  const contact_information = [
    {
      id:1,
      name:"Name",
      designation:"desig",
      email:"email@email.com",
      phone: "963852741"
    },
    {
      id:2,
      name:"Name",
      designation:"desig",
      email:"email@email.com",
      phone: "963852741"
    }
  ];

  return (
    <div>
      <div className="relative w-full flex items-center justify-end">
        {renderNavbar()}
      </div>
      <BackgroundBeamsWithCollision>
      <div>

        <div className={styles.headingbox} style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <div className="headingtext flex flex-col place-items-start">
            <h1 className="font-jetbrains-mono text-4xl text-white">
              ASTRONOMY AND <br />PHYSICS SOCIETY
            </h1>
            <p className="text-xl text-teal-400 font-sans my-4">Indian Institute of Information Technology, <br />Design and Manufacturing Jabalpur</p>
          </div>
          <div className="logo ">
            <Image src="/logo1.png" alt="logo" width={300} height={300} />
          </div>
        </div>

        <p className={styles.aboutclub}>
              We are the Astronomy and Physics Society of IIITDM Jabalpur. We are a group of many astro-enthusiasts under the Gymkhana of the IIITDM Jabalpur. Here, we attempt to bring about an interest and awareness in the field of Astronomy and Space Research. All along the we have been promoting amateur astronomy through talks, competetions and shows.
        </p>

      </div>
      </BackgroundBeamsWithCollision>

      <div className={styles.divider}>Isme kuch acha sa, pls koi bhi</div>

      <div className={styles.databox}>

        {
          contact_information.map((item) =>(
            <Datacard 
              name={item.name}
              designation={item.designation}
              email={item.email}
              phonenumber={item.phone}
            />
          ))
        }

      </div>
    </div>
  )
}

export default Outreach
