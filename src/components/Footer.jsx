import React from 'react';
import './Footer.css'; // Importing the CSS file for Footer styles

export default function Footer() {
  return (
    <footer className="Footer w-full bg-secondary text-text-secondary py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
      <div>
        &copy; {new Date().getFullYear()} Shaik Mohammed Maaz. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="#home" className="hover:text-accent transition">Home</a>
        <a href="#aboutme" className="hover:text-accent transition">About</a>
        <a href="#skills" className="hover:text-accent transition">Skills</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a href="#contact" className="hover:text-accent transition">Contact</a>
      </div>
      <div className="italic">Crafted with passion & precision.</div>
    </footer>
  );
}
