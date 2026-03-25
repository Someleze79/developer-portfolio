import React from "react";
import { motion } from "framer-motion"; // Import animation library

function Hero() {
  return (
    <motion.section
      className="hero"

      // Initial state (before animation)
      initial={{ opacity: 0, y: 50 }}

      // Animate to this state
      animate={{ opacity: 1, y: 0 }}

      // Animation timing
      transition={{ duration: 0.8 }}
    >
      <h1>Hello, I'm Someleze 👋</h1>

      <h2>Full-Stack Web Developer</h2>

      <p>
        I build modern web applications using React, Node.js,
        Express, and MongoDB.
      </p>

      <a href="#projects" className="btn">
        View My Work
      </a>

      {/* Download CV Button */}
      <a href="/cv.pdf" download className="btn secondary">
        Download CV
      </a>
    </motion.section>
  );
}

export default Hero;