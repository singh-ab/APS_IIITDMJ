"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navber-menu";
import { cn } from "../utils/cn";
import styles from './page.module.css';
import Image from 'next/image';
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";
import NavbarMobile from "src/components/ui/navber-mobile";
import InfiniteMarquee from "src/components/ui/marquee";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { Navbar } from "@/components/ui/Navbar";
import Button from "@/components/button";

const imageUrls = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
];

function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  useEffect(() => {
    const shuffledImages = shuffleArray(imageUrls);
    setBackgroundImage(shuffledImages[0]);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.landing} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="relative w-full flex items-center justify-end top-2">
          {renderNavbar()}
        </div>

        <div className={styles.landinggroup}>
          <div className={styles.headingtext}>
            <h1 className="font-jetbrains-mono text-4xl text-white text-balance">
              ASTRONOMY AND <br /> PHYSICS SOCIETY
            </h1>
            <p className="text-xl text-teal-400 font-sans my-4 text-balance">Indian Institute of Information Technology, Design and Manufacturing Jabalpur</p>
            <Button>Be A Member</Button>
          </div>
          <div className={styles.logo}>
            <Image src="/logo1.png" alt="logo" width={300} height={300} />
          </div>
        </div>
      </div>

      <div className="section1 pt-20 pb-10 pl-20 pr-20 mt-0" style={{
        backgroundImage: `url("8.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <h1 className="font-jetbrains-mono text-4xl text-white text-center">
          RECENT EVENTS
        </h1>
        <BentoGridDemo />
      </div>

      <div className="marquee pt-6 pb-6 font-bold font-jetbrains-mono text-4xl text-teal-400 bg-gray-900">
        <InfiniteMarquee />
      </div>

      <div className="about">
        <div className="aboutgroup bg-gray-900 mb-16">
          <div className={styles.aboutgroup}>
            <div className="abouttext pt-20 pb-10 pl-10 pr-20">
              <h1 className="font-jetbrains-mono text-4xl text-white">
                ABOUT US
              </h1>
              <p className="text-gray-400 font-normal mt-7">
                The Astronomy and Physics Society is a student-run society under the Gymkhana of the IIITDM Jabalpur. The society aims to promote the knowledge of Astronomy and Physics among students and to provide a platform for students to showcase their talents and skills in these fields. The society organizes various events, workshops, and sessions throughout the year to help students learn and explore the wonders of the universe. The society also participates in various inter-college competitions and fests to represent the institute and showcase the talent of its members. The society is open to all students who have an interest in Astronomy and Physics and is a great place to meet like-minded individuals and learn new things.
              </p>
            </div>
            <div className={styles.aboutimage}>
              <Image className="rounded-md mt-5 mb-5 mr-20" src="/team.jpg" alt="about" width={4000} height={4000} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto mt-8 mb-8">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeletonone = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/trivia.jpeg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletontwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/telescope.jpeg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletonthree = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/astrophoto.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletonfour = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/ath2.jpeg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const Skeletonfive = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-md bg-gradient-to-br from-gray-500 dark:from-neutral-900 dark:to-neutral-800 to-gray-500 relative overflow-hidden">
    <Image src="/jwst.jpg" alt="section image" layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

const items = [
  {
    title: "Astro Trivia",
    description: "Test your knowledge of the cosmos and beyond.",
    header: <Skeletonone />,
  },
  {
    title: "Telescope Sessions",
    description: "Learn the art of stargazing and telescope operation.",
    header: <Skeletontwo />,
  },
  {
    title: "Astrophotography Workshop",
    description: "Capture the beauty of the night sky with your camera.",
    header: <Skeletonthree />,
  },
  {
    title: "The Astro Treasure Hunt",
    description: "Embark on a journey to find the hidden treasures of the universe.",
    header: <Skeletonfour />,
  },
  {
    title: "JWST Workshop",
    description: "Learn to process and analyze data from the James Webb Space Telescope.",
    header: <Skeletonfive />,
  },
];
