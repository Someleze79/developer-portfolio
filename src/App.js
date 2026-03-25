// Import React
import React from "react";

// Import all components that make up the portfolio sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Main App component
function App() {
  return (
    // Main container for the entire portfolio
    <div>

      {/* Navigation bar at the top */}
      <Navbar />

      {/* Hero section (introduction) */}
      <Hero />

      {/* About section */}
      <About />

      {/* Projects showcase */}
      <Projects />

      {/* Contact information */}
      <Contact />

      {/* Footer at the bottom */}
      <Footer />

    </div>
  );
}

// Export App so it can be used in index.js
export default App;