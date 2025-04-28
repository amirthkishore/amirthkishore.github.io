"use client";

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>
        <i className="fas fa-envelope"></i> Contact Me
      </h2>
      <div className={styles.contactContainer}>
        <p className={styles.description}>
          Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
        </p>
        <a
          href="mailto:amirthkishore9500@gmail.com"
          className={styles.emailButton}
        >
          Email Me
        </a>
        <div className={styles.socialLinks}>
          <a href="https://github.com/amirthkishore" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/amirth-kishore/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/amirth_kishore/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}