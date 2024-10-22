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
import { TracingBeam } from "../../../components/ui/tracing-beam";

const About = () => {
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
      description: "UI/UX and Fronted Developer",
      linkedin: "https://www.linkedin.com/in/shuvam-patra-157b50229/",
      twitter: "https://x.com/THEBLACKEYES09",
      instagram: "https://www.instagram.com/blackeyesandblue09/",
      gmail: "mailto:shuvampatra2003@gmail.com",
      // image: "/shuvam.jpg"
    },
    {
      name: "Abhinav Kumar",
      description: "Backend and Optimisation",
      linkedin: "https://www.linkedin.com/in/abhinav-kumar-8b6008247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/i.g_abhinav?igsh=OGt2cnJ4cGluZnFs",
      gmail: "mailto:igabhinav.2003@gmail.com",
      // image: "/abhinav.jpg"
    },
    // {
    //   name: "John Doe",
    //   description: "Software Engineer",
    //   linkedin: "https://linkedin.com/in/johndoe",
    //   twitter: "https://twitter.com/johndoe",
    //   instagram: "https://instagram.com/johndoe",
    //   gmail: "mailto:johndoe@gmail.com",
    //   image: "/path/to/image9.jpg"
    // },

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
      <div className="abouttext bg-teal-900 flex flex-col md:flex-row justify-center"> 
          <div className="pt-20 pb-20 px-4 md:pl-32 md:pr-32 md:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">THE ASTRONOMY AND PHYSICS SOCIETY</h1>
            <p className="mt-6 text-teal-400">We are the Astronomy and Physics Society of IIITDM Jabalpur. We are a group of many astro-enthusiasts under the Gymkhana of the IIITDM Jabalpur. Here, we attempt to bring about an interest and awareness in the field of Astronomy and Space Research. All along the we have been promoting amateur astronomy through talks, competetions and shows.</p>
          </div>
          <div className="bg-cover flex align-middle relative w-full md:w-1/2"> 
            <Image className="mr-20" src="/aboutimg.jpg" alt="about" layout="fill" objectFit="cover" />
          </div>
        </div>


        <TracingBeamDemo />


        <div  style={{
          backgroundImage: 'url(/9.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '50%',
          transition: 'background-position 0.5s ease',
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
        className="section mt-10 md:mt-20 pt-10 md:pt-20 pb-10 md:pb-20 px-4 md:pl-32 md:pr-32 text-balance">
          <h1 className="font-jetbrains-mono text-3xl md:text-4xl text-white pb-10">OUR EFFORTS</h1>
          <p className="text-gray-300">The Astronomy and Physics Society is dedicated to fostering a deeper
            understanding of the cosmos through engaging and   interactive activities. Our club offers a variety of sessions and workshops, each designed to inspire curiosity and learning about astronomy and physics.
          </p>
          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Astronomy Sessions</h2>
          <p className="text-gray-300">Regular sessions related to Astronomy and Physics including separate discussions
            and knowledge-sharing sessions, where members can dive deeper into specific areas of interest.

          </p>
          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Workshops</h2>
          <p className="text-gray-300">Workshops such as the JWST Image Processing Workshop, Telescope Workshop, 
            and Astrophotography Workshop where participants learn hands-on skills essential for astronomical exploration.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Observatory Sessions</h2>
          <p className="text-gray-300">Our members frequently participate in observation sessions where we use telescopes
            to explore  the Moon, nebulae, and planets like Saturn.
            Naked-eye observations and binocular use also play  an important role in our sessions, making astronomy accessible to all.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Quizzing And Competitions</h2>
          <p className="text-gray-300">To encourage friendly competition and learning, we organize quizzes and competitions
            such as Treasure Hunts - which is also one of our flagship events - open to anyone with an interest in the mysteries of the universe.
          </p>
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
        className=" bg-teal-900"
        >

          <h1 className="font-jetbrains-mono text-4xl text-white text-center pb-10 pt-20">
            WEBSITE DEVELOPED BY
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:ml-28 md:mr-28 pb-10">
            {members.map((member, index) => (
                <div 
                key={index} 
                className="bg-slate-900 shadow-md rounded-lg p-4 backdrop-blur-md bg-opacity-70 border-2 border-slate-200/[0.4] transition-transform transform hover:scale-105 "
                >
                {/* <div className="header h-72 bg-gray-200 rounded-md mb-4 backdrop-blur-md bg-opacity-60">
                  <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  />
                </div> */}
                {/* <div className="relative w-full h-full">
                
                </div> */}
                <h2 className="font-jetbrains-mono font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">{member.name}</h2>
                <p className="font-sans font-normal text-teal-400 text-xs dark:text-neutral-300">{member.description}</p>
                <div className="flex space-x-4 mt-4 mb-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="x.png" alt="Twitter" className="w-4 h-4" />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="instagram.png" alt="Instagram" className="w-4 h-4" />
                  </a>
                  <a href={member.gmail} target="_blank" rel="noopener noreferrer" className="mr-2">
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

//navbar here

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30 mb-10", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        {/* <HoveredLink href="/contact">Contact Us</HoveredLink> */}
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/sessions">Sessions</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-6 text-s">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/form">Form</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

//tracing beam section

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-2xl mx-auto antialiased pt-5 pb-5 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-15 flex">
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
                  className="rounded-lg mb-10 object-cover"
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
        <p>FIC/S&T Counsellor<br /></p>
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
        <p>Coordinator<br /></p>
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
        <p>Role: Co-Coordinator</p>
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