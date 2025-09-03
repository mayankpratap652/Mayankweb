import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Chat Application",
    description: "A Chat Application built with React & Firebase",
    details:
      "The Chat Application is a real-time communication platform that allows users to instantly connect with friends, colleagues, or customers. It supports one-to-one with features like message delivery status, typing indicators, and multimedia sharing. Built with modern technologies, it ensures smooth, fast, and secure communication across devices. This application can be used for personal chats, professional collaboration, or customer support.",
    image:
      "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Full-stack shopping app with cart, wishlist & payments",
    details:
      "The E-Commerce Website is a fully functional online shopping platform designed to deliver a seamless buying experience. Users can browse products by category, apply filters, and view detailed descriptions with images, ratings, and reviews. With features like shopping carts, wishlists, secure payment gateways, it provides everything needed for a complete online retail experience. The platform also includes an admin dashboard for managing inventory, products, and customer orders.",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/307/947/non_2x/ai-generative-e-commerce-online-shopping-concept-delivery-concept-free-photo.jpg",
  },
  {
    id: 3,
    title: "Blog Website",
    description: "My Blog Site built with React & Tailwind",
    details:
      "The Blog Website is a modern publishing platform for writers and creators to share ideas, stories, and updates. It includes a clean and responsive design with features such as rich-text editing, categories, tags, and a comment system to encourage interaction. Authors can manage their posts, while readers can easily navigate through articles and engage with content. Optimized for both readability and SEO, the platform works smoothly on all devices, making it perfect for personal blogs, portfolios, or company news portals.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.8nyiQUrOsnc_PgB3BlqB_wHaD4?pid=Api&P=0&h=180",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div
        className={`transition-all duration-500 ${
          selectedProject
            ? "grid grid-cols-1 md:grid-cols-2 gap-8" // two-column when selected
            : "flex flex-row flex-wrap gap-6 justify-center" // horizontal by default
        }`}
      >
        {/* Left side - project cards */}
        <div
          className={`${
            selectedProject
              ? "col-span-1 flex flex-col gap-6 md:ml-30 ml-13" // stack cards when detail is open
              : "flex flex-row flex-wrap gap-6 justify-center  "
          }`}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 transition-all w-82 h-70  
                ${
                  selectedProject?.id === project.id
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              onClick={() =>
                setSelectedProject(
                  selectedProject?.id === project.id ? null : project
                )
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side - selected project detail */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 "
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedProject.details}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
