"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Technical.module.css';

const skills = {
  languages: [
    { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-typescript' },
    { name: 'C#', level: 80, icon: 'fab fa-microsoft' }
  ],
  frontend: [
    { name: 'React.js', level: 90, icon: 'fab fa-react' },
    { name: 'Next.js', level: 85, icon: 'fas fa-n' },
    { name: 'Angular', level: 75, icon: 'fab fa-angular' },
    { name: 'HTML5/CSS3', level: 90, icon: 'fab fa-html5' }
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: 'fab fa-node-js' },
    { name: 'Express.js', level: 85, icon: 'fas fa-server' },
    { name: 'REST APIs', level: 90, icon: 'fas fa-network-wired' }
  ],
  database: [
    { name: 'MongoDB', level: 85, icon: 'fas fa-database' },
    { name: 'SQL', level: 80, icon: 'fas fa-table' }
  ],
  tools: [
    { name: 'Git', level: 90, icon: 'fab fa-git-alt' },
    { name: 'Docker', level: 75, icon: 'fab fa-docker' },
    { name: 'AWS', level: 70, icon: 'fab fa-aws' }
  ]
};

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  delay: number;
}

const SkillBar = ({ name, level, icon, delay }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className={styles.skillItem} ref={skillRef}>
      <div className={styles.skillInfo}>
        <div className={styles.skillName}>
          <i className={`${icon} ${styles.skillIcon}`}></i>
          {name}
        </div>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillBar}>
        <div
          className={styles.skillProgress}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Technical() {
  const [activeTab, setActiveTab] = useState('languages');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="technical" 
      ref={sectionRef}
      className={`${styles.technicalSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          <i className="fas fa-laptop-code"></i> Technical Expertise
        </h2>
        <p className={styles.description}>
          Proficient in modern web technologies, focusing on building scalable and efficient applications
        </p>

        <div className={styles.skillsContainer}></div>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabButton} ${activeTab === 'languages' ? styles.active : ''}`}
              onClick={() => setActiveTab('languages')}
            >
              <i className="fas fa-code"></i>
              <span>Languages</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'frontend' ? styles.active : ''}`}
              onClick={() => setActiveTab('frontend')}
            >
              <i className="fas fa-desktop"></i>
              <span>Frontend</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'backend' ? styles.active : ''}`}
              onClick={() => setActiveTab('backend')}
            >
              <i className="fas fa-server"></i>
              <span>Backend</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'database' ? styles.active : ''}`}
              onClick={() => setActiveTab('database')}
            >
              <i className="fas fa-database"></i>
              <span>Database</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'tools' ? styles.active : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <i className="fas fa-tools"></i>
              <span>Tools</span>
            </button>
          </div>

          <div className={styles.skillsList}>
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
    </section>
  );
}