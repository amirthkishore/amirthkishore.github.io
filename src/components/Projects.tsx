import React from 'react';
import '../assets/css/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A brief description of Project 1 showcasing its features and technologies used.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>A brief description of Project 2 showcasing its features and technologies used.</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>A brief description of Project 3 showcasing its features and technologies used.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;