import React, { useState } from "react";

function Navbar() {
  // State to track theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">

      <h2>Someleze Shweni</h2>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Dark mode button */}
      <button onClick={toggleTheme}>
        🌙
      </button>

    </nav>
  );
}

export default Navbar;