import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code,
} from "lucide-react";

function About() {
  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
      title: "Graduation Completed",
      description:
        "Completed Bachelor of Technology (B.Tech) in Information Technology with strong knowledge of web development, programming, database management, and software engineering concepts. Focused on building real-world projects and improving problem-solving skills.",
      date: "2022 - 2026",
    },

    {
      icon: <Briefcase className="w-6 h-6 text-orange-400" />,
      title: "Full Stack Development Internship",
      description:
        "Completed internship at Graviton Web Technologies where I worked on modern full-stack applications using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Gained hands-on experience in API integration, frontend UI development, backend architecture, and deployment workflows.",
      date: "July 2024 - Jan 2025",
    },

    {
      icon: <Code className="w-6 h-6 text-red-400" />,
      title: "Campus Marketplace",
      description:
        "Built a MERN stack marketplace platform for students to buy and sell products within the campus. Implemented authentication, product management, image uploads, and responsive UI with React and Tailwind CSS.",
      date: "Major Project",
    },

    {
      icon: <Code className="w-6 h-6 text-amber-300" />,
      title: "Doctor Appointment System",
      description:
        "Developed a doctor appointment booking system where users can register, login, and schedule appointments online. Built secure APIs and integrated frontend with backend for smooth appointment management.",
      date: "Academic Project",
    },

    {
      icon: <Code className="w-6 h-6 text-orange-300" />,
      title: "E-Commerce with Firebase",
      description:
        "Created a modern e-commerce application using React.js and Firebase with features like authentication, product listings, cart functionality, and real-time database integration.",
      date: "Personal Project",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#111111] px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-amber-400/40 max-w-4xl">

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="mb-14 ml-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] border border-amber-400/40 shadow-lg">
              {item.icon}
            </span>

            {/* Card */}
            <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition duration-300">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <span className="text-sm text-amber-300 italic">
                  {item.date}
                </span>
              </div>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;