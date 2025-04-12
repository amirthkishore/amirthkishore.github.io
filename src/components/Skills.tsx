import React from 'react';
import '../assets/css/Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li className="skill-item">React</li>
          <li className="skill-item">TypeScript</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">CSS</li>
          <li className="skill-item">Bootstrap</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;