import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mayank
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-amber-300 border-b-2 border-amber-300"
                className="cursor-pointer hover:text-amber-300 transition duration-300 pb-1"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobileMenu"
            className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#111111]/95 backdrop-blur-xl border-t border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="text-amber-300 font-semibold"
                  className="cursor-pointer text-lg font-medium text-gray-300 hover:text-amber-300 transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;