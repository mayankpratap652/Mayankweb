import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 text-center bg-[#111111]"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        I’m always open to discussing new opportunities, freelance projects,
        collaborations, or creative ideas. Feel free to connect with me and
        let’s build something amazing together.
      </motion.p>

      {/* Email Button */}
      <motion.a
        href="mailto:mayankjadon349@gmail.com"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-500 text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Mail className="w-5 h-5" />
        Say Hello
      </motion.a>
    </section>
  );
}

export default Contact;