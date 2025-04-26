"use client";

import styles from './Hero.module.css';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io' : '';

  return (
    <>
      <ParticleBackground />
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Hi, I'm Amirth Kishore
            </h1>
            <p className={styles.description}>
              Software Developer specializing in MERN-stack development crafting modern web applications with a focus on innovation, performance, and user experience.
            </p>
            <div className={styles.buttonGroup}>
              <a href="#projects" className={styles.primaryButton}>
                View Projects
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get In Touch
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/amirthkishore" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/amirth-kishore/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/amirth.kishore.r" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/amirth_kishore/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <img
              src={`${basePath}/profile.jpg`}
              alt="Amirth Kishore"
              className={styles.profileImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}