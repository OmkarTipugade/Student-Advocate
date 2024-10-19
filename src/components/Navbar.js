import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-green-600 p-4 fixed top-0 left-0 w-full z-50 min-w-screen">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: GRIEVANCEBOX text */}
        <div className="text-white text-lg font-bold">GRIEVANCEBOX</div>

        {/* Right: Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            Add Grievance
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            About Us
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            Contact Us
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            Sign Up
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            <IoMenu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (toggle visibility) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-green-600 p-4 space-y-2`}
      >
        <a href="/" className="block text-white hover:bg-green-700 p-2">
          Home
        </a>
        <a href="/" className="block text-white hover:bg-green-700 p-2">
          Add Grievance
        </a>
        <a href="/" className="block text-white hover:bg-green-700 p-2">
          About Us
        </a>
        <a href="/" className="block text-white hover:bg-green-700 p-2">
          Contact Us
        </a>
        <a href="/" className="block text-white hover:bg-green-700 p-2">
          Sign Up
        </a>
        <a href="/" className="block text-white hover:bg-green-700 p-2">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
