"use client";

import { useState, useEffect } from 'react';
import "./globals.css";
import styles from './Layout.module.css';
import ParticleBackground from '../components/ParticleBackground';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Amirth Kishore - Portfolio" />
        <title>Amirth Kishore - Portfolio</title>
      </head>
      <body>
        <ParticleBackground />
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
          <a href="#hero" className={styles.logo} onClick={handleNavClick}>
            <img src="/ak.png" alt="AK Logo" width="40" height="40" />
            <span>Amirth Kishore</span>
          </a>
          <button 
            className={styles.menuButton} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              <li>
                <a href="#hero" className={styles.navLink} onClick={handleNavClick}>Home</a>
              </li>
              <li>
                <a href="#technical" className={styles.navLink} onClick={handleNavClick}>Skills</a>
              </li>
              <li>
                <a href="#experience" className={styles.navLink} onClick={handleNavClick}>Experience</a>
              </li>
              <li>
                <a href="#projects" className={styles.navLink} onClick={handleNavClick}>Projects</a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink} onClick={handleNavClick}>Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
