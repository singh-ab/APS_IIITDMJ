"use client";

import React, { useState, useEffect } from "react";
import NavbarMobile from "../../../components/ui/navber-mobile";
import { HoveredLink, Menu } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";

// Main Gallery Component
const Gallery = () => {
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

  const renderNavbar = () => (isMobile ? <NavbarMobile /> : <Navbar className="" />);

  // Image data with captions
  const images = [
    {
      id: 1,
      src: "/n1.png",
      alt: "JWST Session",
      title: "JWST Session",
      
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
  ];

  return (
    <>
      <div className="gallery-container min-h-screen w-full flex flex-col mt-5">
        {renderNavbar()}
        <div className="text-center mb-8 mt-20">
          <h1 className="text-5xl font-bold text-white mb-8 mt-10">APS Memories</h1>
          
        </div>
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {images.map((image) => (
            <div key={image.id} className="gallery-item relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <img src={image.src} alt={image.alt} className="gallery-image w-full h-full object-cover rounded-xl" />
              <div className="caption absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-xl">
                <p className="caption-title text-xl font-semibold">{image.title}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-container {
          max-width: 100%;
          margin: 0 auto;
          padding-bottom: 1rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr); /* Single column by default */
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        }

        .gallery-image {
          width: 100%; /* Makes the image span the full width */
          height: 200px; /* Keeps a uniform height */
          object-fit: cover; /* Makes sure the image covers the whole area without stretching */
          border-radius: 16px;
        }

        .caption {
          padding: 1rem;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }

        .caption-title {
          font-weight: bold;
          font-size: 1.25rem;
        }

        .caption-description {
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        /* Responsive grid for different screen sizes */
        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for small screens */
          }
        }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
          }
        }
      `}</style>
    </>
  );
};

// Navbar Component
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        <HoveredLink href="/gallery">Gallery</HoveredLink>
      </Menu>
    </div>
  );
}

// Export the Gallery component as default
export default Gallery;
