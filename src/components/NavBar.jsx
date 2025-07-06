import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/MyLogo.png"; // Import your logo image here

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    
    <nav className="custom_nav fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 bg-primary">

  {/* <img src={logo} alt="Logo" className="w-full h-full object-contain" /> */}

    {open && (
        <div className="nav-blur-overlay fixed inset-0 z-30 backdrop-blur-md bg-black/30"></div>
      )}
      
      {/* Hamburger Button */}
      <button
        className={`hamburger ${open ? "open" : ""} md:hidden`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#aboutme" className="hover:text-gray-400">About me</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`mobile-menu md:hidden fixed top-16 left-0 w-full bg-primary transition-all duration-300 z-40 ${
          open ? "menu-open" : "menu-closed"
        }`}
      >
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#aboutme" onClick={() => setOpen(false)}>About me</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
