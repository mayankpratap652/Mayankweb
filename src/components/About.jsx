import React from "react";
import { motion } from "framer-motion";
import {GraduationCap, Briefcase, Code }from "lucide-react"

function About() {
  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Education",
      description:
        "Pursuing my studies in Information Technology while building strong fundamentals in programming and problem-solving.",
      date: "2022 - Present",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      title: "Full Stack Development Internship",
      description:
        "Completed my internship at Graviton Web Technologies, where I worked on modern full-stack projects using React, Node.js, Express, and MongoDB. Built scalable applications and collaborated with a team to deliver real-world solutions.",
      date: "26/Jan/2025",
    },
    {
      icon: <Code className="w-6 h-6 text-green-600" />,
      title: "Personal Projects",
      description:
        "Developed multiple personal projects including a Chat Application, E-commerce platform (ShopSphere), and interactive web apps using React, Tailwind, Redux, and Node.js.",
      date: "Ongoing",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 md:px-20 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="relative border-l-4 border-blue-600 dark:border-purple-600">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 ml-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-purple-600 rounded-full shadow-lg">
              {item.icon}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {item.description}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400 italic">
              {item.date}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
