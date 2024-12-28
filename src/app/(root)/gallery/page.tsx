"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import NavbarMobile from "../../../components/ui/navber-mobile";
import { HoveredLink, Menu } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import Image from 'next/image';

// Main Gallery Component
const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string; title: string } | null>(null);

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

  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  // Image data with captions
  const images = [
    {
      id: 1,
      src: "/n1.png",
      alt: "Astrophotography Session",
      title: "Astrophotography Session",

    },
    {
      id: 2,
      src: "/p2.png",
      alt: "Moon Serenity",
      title: "Moon Serenity",
    },
    {
      id: 3,
      src: "/p3.png",
      alt: "Telescope Session",
      title: "Telescope Session",

    },
    {
      id: 4,
      src: "/n2.png",
      alt: "JIGYASA 2023",
      title: "JIGYASA 2023",
    },
    {
      id: 5,
      src: "/n5.png",
      alt: "Treasure Hunt",
      title: "Treasure Hunt",
    },
    {
      id: 6,
      src: "/n6.png",
      alt: "Image Data Workshop",
      title: "Image Data Workshop",
    },
    {
      id: 7,
      src: "/n7.png",
      alt: "Astro Quiz",
      title: "Astro Quiz",
    },
    {
      id: 8,
      src: "/n8.png",
      alt: "Mars Case Study",
      title: "Mars Case Study",
    },
    {
      id: 9,
      src: "/n9.jpg",
      alt: "Treasure Hunt",
      title: "Treasure Hunt",
    },
    {
      id: 10,
      src: "/n10.jpeg",
      alt: "Orientation",
      title: "Orientation",
    },
    {
      id: 11,
      src: "/n11.jpeg",
      alt: "Orientation",
      title: "Orientation",
    },
    {
      id: 12,
      src: "/n12.jpeg",
      alt: "National Space Day",
      title: "National Space Day",
    },
    {
      id: 13,
      src: "/n13.jpeg",
      alt: "National Space Day",
      title: "National Space Day",
    },
    {
      id: 14,
      src: "/n14.jpeg",
      alt: "National Space Day",
      title: "National Space Day",
    },
    {
      id: 15,
      src: "/n15.jpeg",
      alt: "National Space Day",
      title: "National Space Day",
    },
    {
      id: 16,
      src: "/n16.jpeg",
      alt: "Treasure Hunt",
      title: "Treasure Hunt",
    },
    {
      id: 17,
      src: "/n17.jpeg",
      alt: "Telescope Workshop",
      title: "Telescope Workshop",
    },
    {
      id: 18,
      src: "/n18.jpg",
      alt: "JWST Session",
      title: "JWST Session",
    },
    {
      id: 19,
      src: "/n19.jpg",
      alt: "Cosmic Showdown",
      title: "Cosmic Showdown",
    },
    {
      id: 20,
      src: "/n20.jpeg",
      alt: "JWST Session",
      title: "JWST Session",
    },
    {
      id: 21,
      src: "/n21.jpg",
      alt: "Telescope Session",
      title: "Telescope Session",
    },
    
  ];

  return (
    <div>
      <div className="gallery-container min-h-screen w-full flex flex-col mt-5 max-w-full mx-auto ">
        <div className="relative w-full flex items-center justify-end">
          {renderNavbar()}
        </div>

        <div className="logo relative -mt-5 z-10">
          <Image src="/gallerybanner.jpg" alt="banner" width={1000} height={1000} layout="responsive" className="relative" />
        </div>
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
        className="gallery-flex flex flex-wrap justify-center gap-4 p-4 pt-16 pb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item relative overflow-hidden rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer border-2 border-teal-700 hover:border-gray-300"
              onClick={() => setSelectedImage(image)}
              style={{ width: '450px', height: '250px' }}
            >
              <div className="hover-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="caption-title text-sm font-jetbrains-mono text-white">
                {image.title}
              </p>
              </div>
              <img
              src={image.src}
              alt={image.alt}
              className="gallery-image w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-85  flex items-center justify-center z-50">
            <div className="relative  p-4 rounded-lg max-w-3xl w-full ">
                <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={() => setSelectedImage(null)}
                >
                &times;
                </button>
                <div className="flex justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-5/6 object-contain"
                />
                </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold font-jetbrains-mono">{selectedImage.title}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};


// Export the Gallery component as default
export default Gallery;
