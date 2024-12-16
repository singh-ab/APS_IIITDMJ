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

      <div className="logo relative -mt-5 z-10">
        {/* <Image src="/aboutbanner.jpg" alt="banner" width={1000} height={1000} layout="responsive" /> */}
        <Image
          src="/outreach.jpg"
          alt="banner"
          width={1000}
          height={1000}
          layout="responsive"
          className="relative"
        />
      </div>

      <BackgroundBeamsWithCollision>
      <div>

        <div className={styles.headingbox} >
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

        <div className={styles.bottomsection}>
          <h1 className={styles.head}>
            Reach Out to Us
          </h1>

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
      </div>
      </BackgroundBeamsWithCollision>
        
      <div style={{backgroundColor:'black', paddingBottom:'4vh', marginTop:'0px'}}>
        <div className={styles.AboutSection}>
          <h1 className={styles.head} style={{paddingTop:'2vh',marginTop:'0vh',color:'rgb(45, 212, 191)'}}>
              What we do
          </h1>
          <div style={{marginLeft:'1vh', marginTop:'1vh', marginBottom:'3vh'}}>
          Immerse yourself in a vibrant community of learners and explore the wonders of the universe. From captivating discussions to hands-on experiments, our engaging sessions and workshops are designed to ignite your curiosity and deepen your understanding of astronomy and physics.
          </div>

          <div style={{display:'flex', justifyContent:'space-between'}}>
            <ul style={{listStyleType:'disc', marginLeft:'5vh', fontSize:'20px'}}>
              <li>Telescope sessions</li>
              <li>Physics Workshops</li>
              <li>Quizzing</li>
              <li>
                <a href="/events" style={{color:'rgb(45, 212, 191)'}}>know more...</a>
              </li>
            </ul>
          
          <div style={{marginRight:'15vh'}}>
            <Image
            src="/outreachAstronaut.avif"
            alt="img"
            width={150}
            height={150}
            className="relative"
            />
          </div>

          </div>

        
        </div>

      </div>
    </div>

  )
}

export default Outreach
