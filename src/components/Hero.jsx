import React from "react";
import { motion } from "framer-motion";
import Mayank from "../assets/Mayank.jpg";
import { Typewriter } from "react-simple-typewriter";

 

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 items-center justify-center gap-10 px-6 md:px-20 text-center md:text-left">
      
      {/* Left: Image with Glow */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full"></div>
        <motion.img
          src={Mayank}
          alt="Mayank Pratap Singh"
          className=" w-64 h-100 sm:h-130 md:w-80 lg:w-96 rounded-2xl border-4 border-blue-600 shadow-xl object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Mayank Pratap Singh
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          I build modern web applications with{" "}
          <span className="text-blue-600 font-semibold">
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

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
          >
            View Projects
          </a>
        <a
  href="/Resumee.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
>
  View Resume
</a>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
