"use client";

import { useState } from 'react';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <header style={{
          backgroundColor: 'linear-gradient(135deg, #26c6da, #004d40)', // Match Hero gradient
          color: 'var(--foreground)',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>My Portfolio</h1>
          <nav>
            <ul style={{
              display: 'flex',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}>
              <li><a href="#about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
              <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Projects</a></li>
              <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
            </ul>
          </nav>
          <button
            onClick={toggleMenu}
            style={{
              backgroundColor: '#fff',
              color: '#0070f3',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'none',
            }}
          >
            {isMenuOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </header>
        <main>{children}</main>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
