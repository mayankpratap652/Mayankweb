import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFirebase,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-blue-500 w-8 h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-8 h-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-8 h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
  { name: "Git & GitHub", icon: <SiGit className="text-orange-500 w-8 h-8" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-8 h-8" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500 w-8 h-8" /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 flex flex-col items-center justify-center bg-white/70 dark:bg-gray-700/50 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
