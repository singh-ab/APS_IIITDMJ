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
import { twMerge } from "tailwind-merge";
import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beams-with-collision";
import Datacard from "../../../components/Datacard";
import { Navbar } from "@/components/ui/Navbar";

const Outreach = () => {
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

  const contact_information = [
    {
      id: 1,
      name: "Abhay Singh",
      designation: "Coordinator",
      email: "astronomy@iiitdmj.ac.in",
      phone: "+91 1234567890",
    },
    {
      id: 2,
      name: "Alok Rai",
      designation: "Co-coordinator",
      email: "astronomy@iiitdmj.ac.in",
      phone: "+91 1234567890",
    },
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

      <div className="flex flex-col lg:flex-row pb-16  ml-10 mr-10 md:ml-32 md:mr-20">
        <div>
          <div className={styles.headingbox}>
            <div className="headingtext flex flex-col place-items-start">
              <h1 className="font-jetbrains-mono text-4xl text-white">
                ASTRONOMY AND <br />
                PHYSICS SOCIETY
              </h1>
              <p className="text-xl text-teal-400 font-sans my-4">
                Indian Institute of Information Technology, <br />
                Design and Manufacturing Jabalpur
              </p>
            </div>
            <div className="logo ">
              <Image src="/logo1.png" alt="logo" width={300} height={300} />
            </div>
          </div>

          <p className=" text-balance">
            We are the Astronomy and Physics Society of IIITDM Jabalpur. We are
            a group of many astro-enthusiasts under the Gymkhana of the IIITDM
            Jabalpur. All along the we have been promoting amateur astronomy
            through talks, competitions and shows.Do you want to organize a workshop or a session on Astronomy or
            Physics? We&apos;re here to help you out. Whether you&apos;re a student, a teacher, a parent we have something
            for everyone. We even organize telescope sessions and physics
            workshops for other institutes, schools, organizations and
            companies.
            <div className={styles.workshopSection}></div>
          </p>

          <div className={styles.bottomsection}>
            <h1 className="font-jetbrains-mono text-4xl text-white pt-20">REACH OUT TO US</h1>


            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-8 ">
              {contact_information.map((item) => (
                <div key={item.id} className="bg-gray-800  rounded-lg shadow-md">
                  <Datacard
                  name={item.name}
                  designation={item.designation}
                  email={item.email}
                  phonenumber={item.phone}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-4 mt-20 mb-0 lg:ml-6  lg:mt-48 lg:mb-48 lg:mr-20 bg-teal-950 p-10 rounded-lg">
          <div className="block">
            <h1 className="font-jetbrains-mono text-4xl text-white">
              WHAT WE DO
            </h1>
            <div className="mt-6 text-balance">
              From captivating discussions to hands-on experiments, our engaging
              sessions and workshops are designed to ignite your curiosity and
              deepen your understanding of astronomy and physics. We can organize
              a variety of activities tailored to your needs.
            </div>

            <div className="flex flex-col mt-6">
              <ul className="mt-6 text-balance list-disc list-inside mb-6">
          <li>Physics Workshops</li>
          <li>Astronomy Quizzes</li>
          <li>Stargazing Nights</li>
          <li>Guest Lectures by Experts</li>
          <li>Hands-on Experiments</li>
          <li>
            <a href="/events" style={{ color: "rgb(45, 212, 191)" }}>
              Know more
            </a>
          </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div >
  );
};

export default Outreach;
