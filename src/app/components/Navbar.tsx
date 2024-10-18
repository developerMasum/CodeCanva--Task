"use client";

import { useState } from "react";
import assets from "@/assets";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-white text-2xl font-bold">
          <Image src={assets.images.logo} alt="Logo" height={250} width={250} />
        </div>

        <div className="block md:hidden">
          <p
            onClick={toggleDropdown}
            className="text-white  px-4 py-2 rounded-lg hover:text-blue-800"
          >
            <FiMenu />
          </p>
        </div>

        <div className="space-x-8 hidden md:flex ">
          <a href="#home" className="text-white hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="text-white hover:text-blue-400">
            About Us
          </a>
          <a href="#services" className="text-white hover:text-blue-400">
            Services
          </a>
          <a href="#blog" className="text-white hover:text-blue-400">
            Blog
          </a>
        </div>
        <div className="hidden md:flex">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Contact Now
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute right-0 bg-black text-white w-48 shadow-lg mt-2">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-400">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-400">
            About Us
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-blue-400">
            Services
          </a>
          <a href="#blog" className="block px-4 py-2 hover:bg-blue-400">
            Blog
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
