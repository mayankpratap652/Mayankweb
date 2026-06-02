import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Campus Marketplace",
    description:
      "A MERN stack marketplace platform for college students.",

    details:
      "Campus Marketplace is a full-stack web application developed for students to buy and sell products within their college campus. The platform includes secure authentication, product uploads, category filters, search functionality, and responsive UI design.",

    tech: ["React", "Node.js", "MongoDB", "Express"],

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

    live: "https://campus-marketplace-0eju.onrender.com/",
    github: "https://github.com/mayankpratap652/Campus-MarketPlace",
  },

  {
    id: 2,
    title: "Doctor Appointment",
    description:
      "Online doctor appointment booking and management system.",

    details:
      "Doctor Appointment System allows users to register, login, search doctors, and book appointments online with secure API integration and responsive design.",

    tech: ["React", "Express.js", "MongoDB", "Node.js"],

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwYXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D",

    live: " https://doctor-appointmen-system-0i4i.onrender.com",
    github: "https://github.com/mayankpratap652/Doctor_Appointmen_System.git",
  },

  {
    id: 3,
    title: "E-Commerce with Firebase",
    description:
      "Modern e-commerce application using React and Firebase.",

    details:
      "Developed a responsive e-commerce application with Firebase authentication, cart functionality, product listings, and real-time database integration.",

    tech: ["React", "Firebase", "Tailwind CSS"],

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

    live: "#",
    github: "https://github.com/mayankpratap652/Project-Ecom-payment",
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1a1a1a] border border-white/5 rounded-3xl overflow-hidden shadow-lg hover:border-amber-400/30 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-amber-300 text-sm mb-3">
                {project.description}
              </p>

              {/* Limited Description */}
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                {project.details}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between gap-3 mt-6 flex-nowrap">

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-black font-medium hover:scale-105 transition duration-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <Github size={18} />
                  Code
                </a>

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;