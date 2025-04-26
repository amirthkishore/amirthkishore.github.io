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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Amirth Kishore - Portfolio" />
        <title>Amirth Kishore - Portfolio</title>
      </head>
      <body>
        <header style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          color: 'var(--foreground)',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000,
        }}>
          <img
            src="/ak.png"
            alt="ak"
            style={{ height: '50px', borderRadius: '50%' }}
          />
          {/* <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Amirth Kishore</h1> */}
          <nav style={{ display: isMenuOpen ? 'block' : undefined }}>
            <ul style={{
              display: 'flex',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button
            onClick={toggleMenu}
            className="mobile-menu-button"
            style={{
              backgroundColor: 'var(--gray-100)',
              color: 'var(--foreground)',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {isMenuOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </header>
        <main style={{ paddingTop: '74px' }}>{children}</main>
        <footer style={{ 
          backgroundColor: 'var(--gray-100)', 
          color: 'var(--foreground)', 
          padding: '1rem 0', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
            <p>&copy; <>{new Date().getFullYear()}</> Amirth Kishore. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
