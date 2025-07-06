import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaLink ,FaCode } from "react-icons/fa";
import React from "react";
import './Contact.css'; // Importing the CSS file for Contact styles

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-24 bg-background rounded-lg shadow-md max-w-3xl mx-auto my-12"
    >
      <h2 className="text-3xl font-semibold mb-6 text-text-main">Contact</h2>
      <p className="mb-8 text-text-secondary">
        Feel free to reach out for collaborations, project inquiries, or just to say hello!
      </p>
      <a
        href="mailto:shaikmaaz333@gmail.com"
        className="email inline-flex items-center gap-2 bg-accent px-6 py-3 rounded shadow hover:bg-primary transition mb-6"
      >
        <FaEnvelope className="text-xl" />
        shaikmaaz333@gmail.com
      </a>
      <div className="flex gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/shaik-mohammed-maaz-938496272/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary text-2xl transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shaikmohammed-maaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary text-2xl transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Shaik_Mohammed_Maaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary text-2xl transition"
          aria-label="LeetCode"
        >
          <FaCode/>
        </a>
      </div>
    </section>
  );
}
