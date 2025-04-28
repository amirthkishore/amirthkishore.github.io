"use client";

import { useRef, useEffect, useState } from 'react';
import styles from './MyExperience.module.css';

interface Experience {
  date: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    date: "July 2023 - Present",
    role: "Software Developer",
    company: "Digitkode Software Pvt. Ltd.",
    description: "Leading development of advanced features for invoicetemple.com, focusing on scalable solutions and optimal user experience.",
    achievements: [
      "Developed and maintained core features using Node.js and React.js",
      "Implemented RESTful APIs using Express.js with 99.9% uptime",
      "Optimized application performance resulting in 40% faster load times",
      "Led the migration to TypeScript improving code reliability"
    ],
    skills: ["Node.js", "React.js", "Express.js", "TypeScript", "SCSS"]
  },
  {
    date: "May 2021 - July 2023",
    role: "Angular Developer",
    company: "Kuttyveni Computing",
    description: "Architected and developed enterprise-level web applications using Angular, serving diverse client needs.",
    achievements: [
      "Built 20+ interactive Single Page Applications",
      "Architected 25+ AWS Instances with flexible Component APIs",
      "Created enterprise solutions for debesis.tech",
      "Improved application performance by 35%"
    ],
    skills: ["Angular", "TypeScript", "AWS", "HTML5/CSS3"]
  }
];

export default function MyExperience() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`${styles.experienceSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          <i className="fas fa-briefcase"></i> Work Experience
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className={`${styles.timelineItem} ${isVisible ? styles.animate : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.date}>
                  <i className="far fa-calendar-alt"></i>
                  {exp.date}
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.company}>
                  <i className="fas fa-building"></i>
                  {exp.company}
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={styles.achievement}>
                      <i className="fas fa-check-circle"></i>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className={styles.skills}>
                  {exp.skills.map(skill => (
                    <span key={skill} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.timelineDot}>
                <i className="fas fa-code"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}