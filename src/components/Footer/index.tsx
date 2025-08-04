"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Subul Raza Zaidi
          </h3>
          <p className="text-sm text-gray-400">
            Frontend Developer & Tech Explorer
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
          <a href="#portfolio" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
          <a
            href="https://github.com/Subulzaidi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-white text-lg">
          <a
            href="mailto:razasubul@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Subulzaidi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/subul-raza-zaidi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Subul Raza. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
