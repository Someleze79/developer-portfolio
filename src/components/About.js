import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>

      <p>
        I'm a Junior Web Developer with a strong foundation in full-stack
        web development, passionate about building clean, responsive, and
        user-friendly applications.
      </p>

    </motion.section>
  );
}

export default About;