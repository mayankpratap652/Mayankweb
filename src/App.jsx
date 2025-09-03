import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// ✅ Import from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />

        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Hero />
        </motion.div>

        {/* About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        {/* Routes */}
 <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
        >
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
