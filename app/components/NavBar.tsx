"use client"
import React, { useState } from "react";
import Link from "next/link"; // Importing Next.js Link component
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-green-50 p-4 shadow-md max-h-[250px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200}
                height={10} />
          </Link>
        </div>

        {/* Hamburger Menu Button for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-4 text-slate-700 font-bold">
          <Link href="/">
          </Link>
          <Link href="#about" className="border-gray-600 border-r-2 pr-2 ">
          ABOUT
          </Link>
          <Link href="#services" className="border-gray-600 border-r-2 pr-2 ml-0">
          SERVICES
          </Link>
          <Link href="#contact" className=" ml-0">
          CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-blue-600 p-4 text-white`}
      >
        <Link href="/">
        </Link>
        <Link href="#about">
        ABOUT
        </Link>
        <Link href="#services">
        </Link>
        <Link href="#contact">
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;