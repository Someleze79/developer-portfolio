import React from "react";

// Array of project objects (clean and scalable approach)
const projectData = [
  {
    title: "iTunes-Media-Web-Application",
    description:
      "A full-stack iTunes Media Web Application that allows users to search, explore, and manage their favorite media content using the iTunes Search API.",
    github: "https://github.com/Someleze79/iTunes-Media-Web-Application",
    demo: "#", // Replace with live link later
    image: "iTunes-Media.png"
  },
  {
    title: "Web-Store",
    description:
      "A full-featured Web Store application built with React and Redux, designed to simulate a real-world online shopping experience.",
    github: "https://github.com/Someleze79/Web-Store",
    demo: "#",
    image: "Web-Store.png"
  },
  {
    title: "Cash-Balance-App",
    description:
      "A simple and intuitive Cash Balance App built with React, designed to simulate basic financial account operations.",
    github: "https://github.com/Someleze79/Cash-Balance-App",
    demo: "#",
    image: "Cash-Balance-App.png"
  }
];

// Projects component
function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {/* Loop through project data */}
        {projectData.map((project, index) => (
          <div key={index} className="project-card">

            {/* Project Image */}
            <img src={project.image} alt={project.title} />

            {/* Project Title */}
            <h3>{project.title}</h3>

            {/* Description */}
            <p>{project.description}</p>

            {/* Buttons */}
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;