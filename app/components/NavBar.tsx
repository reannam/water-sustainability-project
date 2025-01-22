"use client";
import React from "react";
import Link from "next/link"; // Importing Next.js Link component
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="py-4 shadow-md" id="heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo on the Left */}
          <div className="flex items-center" id="headerimg">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={240} height={80} />
            </Link>
          </div>

          {/* Navigation Links on the Right */}
          <div className="flex space-x-4" id="headerLinks">
            <Link href="#about" className="border-r border-gray-600 pr-5">
              About
            </Link>
            <Link href="#services" className="border-r border-gray-600 pr-5">
              Services
            </Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
