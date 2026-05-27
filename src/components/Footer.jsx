import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 mb-6 tracking-wide">
          Mayank Pratap Singh
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mb-6">

          {/* GitHub */}
          <a
            href="https://github.com/mayankpratap652"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition duration-300"
          >
            <Github size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mayank-pratap-singh-73176a331/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-300 hover:bg-amber-400 hover:text-black hover:scale-110 transition duration-300"
          >
            <Linkedin size={22} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/mynkk_fitness_2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-300 hover:bg-pink-500 hover:text-white hover:scale-110 transition duration-300"
          >
            <Instagram size={22} />
          </a>

          {/* Mail */}
          <a
            href="mailto:mayankjadon349@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mayank,"
            className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white hover:scale-110 transition duration-300"
          >
            <Mail size={22} />
          </a>

        </div>

        {/* Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mb-5"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Mayank Pratap Singh. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;