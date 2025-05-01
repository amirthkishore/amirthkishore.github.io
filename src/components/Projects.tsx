"use client";

import { useRef, useEffect, useState } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, React, and Three.js. Features interactive 3D particles, dark mode support, and responsive design.",
    image: "/portfolio.png",
    tech: ["Next.js", "React", "TypeScript", "Three.js", "CSS Modules"],
    githubUrl: "https://github.com/amirthkishore/amirthkishore.github.io",
    liveUrl: "https://amirthkishore.netlify.app/",
    features: [
      "Interactive 3D particle background with Three.js",
      "Dark mode with system preference detection",
      "Responsive design with CSS Modules",
      "SEO optimized with Next.js 14",
      "TypeScript for type safety"
    ]
  },
  /* {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, real-time cart updates, and secure payment integration.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubUrl: "https://github.com/amirthkishore/ecommerce",
    liveUrl: "#",
    features: [
      "Real-time cart updates with Redux",
      "Secure payment integration",
      "Responsive product catalog",
      "User authentication and authorization",
      "Order tracking system"
    ]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "/projects/tasks.png",
    tech: ["React", "Firebase", "Material-UI", "TypeScript"],
    githubUrl: "https://github.com/amirthkishore/task-manager",
    liveUrl: "#",
    features: [
      "Real-time updates with Firebase",
      "Drag-and-drop task management",
      "Team collaboration features",
      "Task filtering and sorting",
      "Progress tracking"
    ]
  } */
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`${styles.projectsSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          <i className="fas fa-code-branch"></i> Featured Projects
        </h2>
        <p className={styles.description}>
          Explore my latest projects that demonstrate my expertise in modern web development:
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`${styles.projectCard} ${
                isVisible ? styles.animate : ''
              } ${selectedProject === index ? styles.expanded : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(index)}
            >
              <div className={styles.projectHeader}>
                {project.image && (
                  <div className={styles.projectImageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className={styles.projectImage}
                    />
                    <div className={styles.projectOverlay}>
                      <div className={styles.projectLinks}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-github"></i> View Code
                        </a>
                        {project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fas fa-external-link-alt"></i> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject === index && (
                <div className={styles.projectDetails}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {project.features?.map((feature, i) => (
                      <li key={i} className={styles.feature}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}