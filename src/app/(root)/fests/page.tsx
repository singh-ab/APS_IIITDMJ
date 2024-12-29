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
      setIsMobile(window.innerWidth <= 800); // Set isMobile based on viewport width
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
      <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
        <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
          <Image
            className="mr-20"
            src="/abhikalpan.JPG"
            alt="Abhikalpan Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
          <h1 className="font-jetbrains-mono text-4xl text-white ">
            Abhikalpan
          </h1>
          <p className="mt-6 text-teal-400 text-balance">
            ABHIKALPAN is the annual technical fest of IIITDM Jabalpur, an
            institute which boasts of technical superiority and innovation in
            what it builds. It&rsquo;s central India&rsquo;s biggest technical
            extravaganza for creating, nurturing and fueling one&rsquo;s
            interest in various domains of computer science, robotics,
            electronics, gaming and design. In conjunction with the various
            technical events, various informal events keep the fest alive. The
            events that invite the footfall of thousands include Robowar,
            Circuit master, Brand presentation, Astronomy quiz amongst others.
          </p>
        </div>
      </div>

      <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
        <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
          <h1 className="font-jetbrains-mono text-4xl text-white ">Invicta</h1>
          <p className="mt-6 text-teal-400 text-balance">
            INVICTA is the techno-cultural design fest of IIITDM Jabalpur,
            celebrating the fusion of technology, culture, and design. It
            features a plethora of events that challenge creativity and
            technical skills, including design competitions, cultural
            performances, and technical challenges. The fest aims to bring out
            the best in participants by providing a platform to showcase their
            talents and innovations.
          </p>
        </div>

        <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
          <Image
            className="mr-20"
            src="/invicta.png"
            alt="Invicta Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
        <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
          <Image
            className="mr-20"
            src="/iitbhu24.jpg"
            alt="IIT BHU 2024 Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
          <h1 className="font-jetbrains-mono text-4xl text-white ">
            IIT-BHU (Technex) - 2024
          </h1>
          <p className="mt-6 text-teal-400 text-balance">
            Yet another successful year for our team at Technex 2024, IIT-BHU.
            We participated in a wide range of events, from Astroquiz to
            Scientist of Utopia, showcasing our knowledge and skills in
            astronomy.
          </p>
          <p className="mt-6 text-teal-400 text-balance">
            • Secured first place in Astroquiz <br />
            • Secured third place in Scientist of Utopia <br />
          </p>
        </div>
      </div>

      <div className={styles.mainsection}>
        <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              IIT-BHU (Technex) - 2023
            </h1>
            <p className="mt-6 text-teal-400 text-balance">
              Our team&apos;s ability to excel in multiple events, from
              exploring the interstellar to astrophotography, highlights our
              versatility and expertise in the field of astronomy. The
              recognition in Scientists of Utopia and Astroquiz further
              underscores our commitment to scientific inquiry and excellence.
            </p>
            <p className="mt-6 text-teal-400 text-balance">
              • Secured 1st & 2nd positions in Exploring the Interstellar <br />
              • Secured 1st position in Astrophotography <br />
              • Secured 2nd position in Scientists of Utopia <br />
              • Secured 3rd position in Astroquiz <br />
            </p>
          </div>
          <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
            <Image
              className="mr-20"
              src="/iitbhu23.jpg"
              alt="IIT BHU 2023 Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
          <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
            <Image
              className="mr-20"
              src="/iitk23.jpg"
              alt="Techkriti 2023 Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              IIT KANPUR (TECHKRITI) - 2023
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              The Techkriti 2023 at IIT Kanpur was a remarkable event for our
              team. We participated in various challenging competitions that
              tested our knowledge, skills, and teamwork. Our dedication and
              hard work paid off as we achieved outstanding results across
              multiple events.
            </p>

            <p className="mt-6 text-teal-400 text-balance">
              • Secured all top 3 positions in Astro quiz <br />
              • Secured first position in Observe, Analyse & Solve <br />
              • Secured 1st position in Egg Drop Challenge <br />
            </p>
          </div>
        </div>

        <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
          <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              IIT KANPUR (TECHKRITI) - 2021
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              Our team rocked the astronomy events, grabbing all top three spots
              in every competition. This awesome feat shows how dedicated we
              are, how much we prepared, and how well we know our stuff. The
              contests were tough, but our team&apos;s quick thinking and
              teamwork helped us crush it and come out on top.
            </p>
          </div>

          <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
            <Image
              className="mr-20"
              src="/iitk21.jpg"
              alt="Techkriti 2021 Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
          <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
            <a href="https://upload.wikimedia.org/">
              <Image
                className="mr-20"
                src="/IIT_Indore.jpg"
                // By MysticHues - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=101302707
                alt="IIT Indore pic"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </div>
          <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
            <h1 className="font-jetbrains-mono text-4xl text-white ">
              IIT INDORE - 2021
            </h1>

            <p className="mt-6 text-teal-400 text-balance">
              Won the Astronomy Quiz: <br />
              The Astronomy Quiz at IIT Indore in Fluxux &apos;21 was a
              challenging and exhilarating experience. Our team from APS
              prepared extensively, covering a wide range of topics in astronomy
              and space science. The competition was fierce, with teams from
              various prestigious institutions participating. Despite the tough
              questions and high pressure, our team&apos;s deep knowledge and
              quick thinking helped us secure the first place.
            </p>
          </div>
        </div>
      </div>

      <div className="abouttext bg-grey-600 flex flex-col lg:flex-row justify-center">
        <div className="pt-20 pb-20 px-4 pl-20 pr-20 lg:pl-32 lg:pr-32 lg:w-1/2">
          <h1 className="font-jetbrains-mono text-4xl text-white ">
            IIT KANPUR (TECHKRITI) - 2019
          </h1>

          <p className="mt-6 text-teal-400 text-balance">
            We excelled in all events, including Astro Hunt and the Terraforming
            Competition. Our team&apos;s dedication and hard work were evident
            as we tackled challenging tasks and demonstrated our astronomy
            expertise. Despite the tough competition, our preparation and
            teamwork led us to secure top positions and leave a significant mark
            at Techkriti 2019.
          </p>
        </div>

        <div className="bg-cover flex align-middle relative w-full lg:w-1/2">
          <Image
            className="mr-20"
            src="/2019.jpg"
            alt="Techkriti 2019 Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
