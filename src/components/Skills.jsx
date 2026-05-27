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
  {
    name: "React",
    icon: <SiReact className="text-cyan-400 w-10 h-10" />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-10 h-10" />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 w-10 h-10" />,
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 w-10 h-10" />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb className="text-emerald-500 w-10 h-10" />,
  },

  {
    name: "Git & GitHub",
    icon: <SiGit className="text-orange-500 w-10 h-10" />,
  },

  {
    name: "Firebase",
    icon: <SiFirebase className="text-amber-400 w-10 h-10" />,
  },

  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-violet-400 w-10 h-10" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 bg-[#111111]"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="mb-4">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="text-gray-200 font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;