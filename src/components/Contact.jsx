import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’d love to connect! Whether you have an idea, a project, or just want
        to chat, my inbox is always open. Let’s build something amazing
        together. 🚀
      </motion.p>

      {/* Contact Button */}
      <motion.a
        href="mailto:mayankjadon349@gmail.com"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:opacity-90 transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
      >
        <Mail className="w-5 h-5" />
        Say Hello
      </motion.a>

      {/* Social Links */}
  </section>
  )
}

export default Contact;
