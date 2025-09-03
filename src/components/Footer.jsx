import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="py-8 text-center bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/mayankpratap652"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
        >
          <Github size={24} />
        </a>

        <a
          href="https://linkedin.com/in/mayank-pratap-singh-73176a331/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="https://instagram.com/mynkk_fitness_2.0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition"
        >
          <Instagram size={24} />
        </a>

        <a
          href="mailto:mayankjadon349@gmail.com"
          className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition"
        >
          <Mail size={24} />
        </a>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Mayank Pratap Singh. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
