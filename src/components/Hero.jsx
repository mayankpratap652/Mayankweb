import React from "react";
import { motion } from "framer-motion";
import Mayank from "../assets/Mayank.jpg";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../assets/Resume.pdf";

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-[#111111] items-center justify-center gap-10 px-6 md:px-20 text-center md:text-left overflow-hidden">

      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.10),transparent_30%)]"></div>

      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10"
      >
        {/* Image Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-500/20 blur-3xl rounded-full"></div>

        <motion.img
          src={Mayank}
          alt="Mayank Pratap Singh"
          className="w-64 h-100 sm:h-130 md:w-80 lg:w-96 rounded-2xl border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.18)] object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
            Mayank Pratap Singh
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I build modern web applications with{" "}
          <span className="text-amber-300 font-semibold">
            <Typewriter
              words={["React", "Tailwind", "JavaScript", "Node.js"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">

          {/* Projects Button */}
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-orange-500/30 transition duration-300"
          >
            View Projects
          </a>

          {/* Resume Button */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-amber-400/30 bg-white/5 backdrop-blur-md text-white rounded-xl hover:bg-amber-400 hover:text-black transition duration-300"
          >
            View Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;