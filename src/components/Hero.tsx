"use client";

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io' : '';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>Amirth Kishore</span>
            </h1>
            <p className={styles.description}>
              Software Developer specializing in MERN-stack development crafting modern web applications with a focus on innovation, performance, and user experience.
            </p>
            <div className={styles.buttonGroup}>
              <a href="#projects" className={styles.primaryButton}>
                <i className="fas fa-code"></i> View Projects
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                <i className="fas fa-paper-plane"></i> Get In Touch
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/amirthkishore" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/amirth-kishore/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://www.facebook.com/amirth.kishore.r" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Facebook Profile"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="https://www.instagram.com/amirth_kishore/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={`${basePath}/profile.jpg`}
              alt="Amirth Kishore"
              className={styles.profileImage}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}