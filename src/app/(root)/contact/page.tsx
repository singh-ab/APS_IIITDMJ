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
import Button from "@/components/button";
const About = () => {
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

  const members = [
    {
      name: "Abhay Singh",
      description: "Overall Project Lead",
      linkedin: "https://www.linkedin.com/in/singhabhay1/",
      // twitter: "https://x.com/THEBLACKEYES09",
      instagram: "http://instagram.com/mostlyastro",
      gmail: "mailto:21bec003@iiitdmj.ac.in",
      // image: "/coordinator.jpg"
    },
    {
      name: "Shuvam Patra",
      description: "UI/UX and Frontend Developer",
      linkedin: "https://www.linkedin.com/in/shuvam-patra-157b50229/",
      twitter: "https://x.com/THEBLACKEYES09",
      instagram: "https://www.instagram.com/blackeyesandblue09/",
      gmail: "mailto:shuvampatra2003@gmail.com",
      // image: "/shuvam.jpg"
    },
    {
      name: "Abhinav Kumar",
      description: "Backend and Optimisation",
      linkedin: "https://www.linkedin.com/in/abhinav-kumar-8b6008247",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/i.g_abhinav",
      gmail: "mailto:igabhinav.2003@gmail.com",
      // image: "/abhinav.jpg"
    },
  ];

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
          src="/aboutbanner.jpg"
          alt="banner"
          width={1000}
          height={1000}
          layout="responsive"
          className="relative"
        />
      </div>

      <div className="mainsection">
        <div className="abouttext bg-teal-900 flex flex-col md:flex-row justify-center pr-8 pl-8 md:p-0">
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              THE ASTRONOMY AND PHYSICS SOCIETY
            </h1>
            <p className="mt-6 text-teal-400">
              We are the Astronomy and Physics Society of IIITDM Jabalpur. We
              are a group of many astro-enthusiasts under the Gymkhana of the
              IIITDM Jabalpur. Here, we attempt to bring about an interest and
              awareness in the field of Astronomy and Space Research. All along
              the we have been promoting amateur astronomy through talks,
              competitions and shows. <br /> If you want to contact us, either
              click the button or find the Coordinator/Co-Coordinator's contact
              below.
            </p>
            <div className="flex justify-start mt-3">
              <Button
                onClick={() =>
                  (window.location.href = "mailto:astronomy@iiitdmj.ac.in")
                }
                color="white"
              >
                Want to connect?
              </Button>
            </div>
          </div>
          <div className="bg-cover flex align-middle relative w-full md:w-1/2">
            <Image
              className="mr-20"
              src="/team2.jpg"
              alt="team image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <TracingBeamDemo />

        <div
          style={{
            backgroundImage: "url(/9.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "50%",
            transition: "background-position 0.5s ease",
            position: "relative",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="section mt-10 md:mt-20 pt-10 md:pt-20 pb-10 md:pb-20 md:pl-32 md:pr-32 text-balance px-12 md:px-32"
        >
          <h1 className="font-jetbrains-mono text-3xl md:text-4xl text-teal-400 pb-10">
            CLUB HISTORY
          </h1>
          <p className="text-gray-50">
            The Astronomy and Physics Society (APS) was established with a
            vision to ignite passion for the cosmos and fundamental sciences
            among students. Founded by Jasbir Singh, a distinguished scholar
            associated with the University of Tübingen, Germany, and the
            University of Trieste, Italy, APS has grown into a platform that
            bridges academic exploration with research opportunities in the
            fields of astronomy and physics.
          </p>
          <p className="text-gray-50 mt-5">
            APS has a proud legacy of producing exceptional alumni who have made
            significant contributions to research and innovation worldwide
            working at institutions like the Michigan Technological University,
            University of Tübingen, Germany, Academia Sinica, Taiwan, European
            Southern Observatory, Germany, and the Max Planck Institute for
            Physics, Germany among many others.
          </p>

          <h1 className="text-lg md:text-xl text-gray-50 pt-5">
            Are you an alumnus?
          </h1>
          <div className="flex justify-start mt-3">
            <Button
              onClick={() =>
                (window.location.href = "mailto:astronomy@iiitdmj.ac.in")
              }
            >
              Connect with us!
            </Button>
          </div>
        </div>

        <div
          // style={{
          //   backgroundImage: 'url(/9.jpg)',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          //   padding: '60px',
          //   backgroundAttachment: 'fixed',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundPositionY: '50%',
          //   transition: 'background-position 0.5s ease',
          //   position: 'relative',
          //   backgroundColor: 'rgba(0, 0, 0, 0.5)'
          // }}
          className=" bg-slate-800"
        >
          <h1 className="font-jetbrains-mono text-4xl text-white text-center pb-10 pt-20 text-balance">
            WEBSITE DEVELOPED BY
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:ml-28 md:mr-28 pb-10">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900 shadow-md rounded-lg p-4 backdrop-blur-md bg-opacity-70 border-2 border-slate-200/[0.4] transition-transform transform hover:scale-105 mx-4 sm:mx-0"
              >
                <h2 className="font-jetbrains-mono font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">
                  {member.name}
                </h2>
                <p className="font-sans font-normal text-teal-400 text-xs dark:text-neutral-300">
                  {member.description}
                </p>
                <div className="flex space-x-4 mt-4 mb-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <img
                      src="linkedin.png"
                      alt="LinkedIn"
                      className="w-4 h-4"
                    />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <img src="x.png" alt="Twitter" className="w-4 h-4" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <img
                      src="instagram.png"
                      alt="Instagram"
                      className="w-4 h-4"
                    />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <img src="/gmail.png" alt="Gmail" className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//tracing beam section

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-2xl mx-auto antialiased pt-5 pb-5 relative space-y-20 md:space-y-0">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-15 flex flex-col md:flex-row px-8 md:px-0"
          >
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
                  className="rounded-lg mb-10 object-cover mt-5 md:mt-0"
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
    title: "Dr. Amit Vishwakarma",
    description: (
      <>
        <p>
          FIC/S&T Counsellor
          <br />
        </p>
        <p>Email: amitv@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:amitv@iiitdmj.ac.in">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/fic.jpg",
      alt: "Coordinator",
    },
    badge: "Faculty In-Charge",
  },
  {
    title: "Abhay Singh",
    description: (
      <>
        <p>
          Coordinator
          <br />
        </p>
        <p>Email: 21bec003@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:21bec003@iiitdmj.ac.in">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/in/singhabhay1/">
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
        {/* <p>Name: John Doe</p> */}
        <p>Co-Coordinator</p>
        <p>Email: 22bec010@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:22bec010@iiitdmj.ac.in">
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
      alt: "Co-Coordinator",
    },
    badge: "Co-Coordinator",
  },
];

export default About;
