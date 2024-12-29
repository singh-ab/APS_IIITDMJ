import React, { useState } from "react";
import Link from "next/link";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 bg-transparent pointer-events-auto">
      <div className="flex items-center">
        {/* <h1 className="text-white text-2xl">Logo</h1> */}
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:bg-gray-600 px-2 py-1 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center">
          <button
            onClick={toggleMenu}
            className="text-white text-lg focus:outline-none absolute top-6 right-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center">
            <Link href="/" className="text-white text-lg mb-6">
              Home
            </Link>
            {/* <Link href="/about" className="text-white text-lg mb-6">Contact Us</Link> */}
            <Link href="/contact" className="text-white text-lg mb-6">
              Contact
            </Link>
            {/* <Link href="/sessions" className="text-white text-lg mb-6">Sessions</Link> */}
            <Link href="/fests" className="text-white text-lg mb-6">
              Fests
            </Link>
            <Link href="/members" className="text-white text-lg mb-6">
              Members
            </Link>
            <Link href="/events" className="text-white text-lg mb-6">
              Events
            </Link>
            <Link href="/join" className="text-white text-lg mb-6">
              Join
            </Link>
            <Link href="/outreach" className="text-white text-lg mb-6">
              Outreach
            </Link>
            <Link href="/gallery" className="text-white text-lg mb-6">
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
