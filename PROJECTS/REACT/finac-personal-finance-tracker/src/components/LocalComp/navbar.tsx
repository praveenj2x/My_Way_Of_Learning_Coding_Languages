"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex w-full">
      {/* Main navbar content */}
      <div className="flex-1 flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold outfit cursor-pointer hover:opacity-80 transition-opacity">
          Note
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#imp" className="text-base lg:text-lg outfit relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#imp" className="text-base lg:text-lg outfit relative group">
            Features
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#imp" className="text-base lg:text-lg outfit relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#imp" className="text-base lg:text-lg outfit relative group">
            License
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-18 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="flex flex-col px-4 py-6 gap-4">
          <a
            href="#"
            className="text-lg outfit py-2 border-b border-gray-200 hover:pl-2 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg outfit py-2 border-b border-gray-200 hover:pl-2 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-lg outfit py-2 border-b border-gray-200 hover:pl-2 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="text-lg outfit py-2 hover:pl-2 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;