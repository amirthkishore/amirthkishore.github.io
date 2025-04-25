"use client";

import ParticleBackground from './ParticleBackground';
import styles from './Hero.module.css';

export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/amirthkishore.github.io' : '';

  return (
    <>
      <ParticleBackground />
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Welcome to My Portfolio
            </h1>
            <p className={styles.description}>
              Hi, I'm Amirth Kishore, a passionate developer crafting modern web applications with a focus on innovation, performance, and user experience.
            </p>
            <div className={styles.buttonGroup}>
              <a href="#projects" className={styles.primaryButton}>
                View Projects
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Contact Me
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-twitter"></i>
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