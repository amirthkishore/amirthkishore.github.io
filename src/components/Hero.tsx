"use client";

export default function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #26c6da, #004d40)',
      color: 'var(--foreground)',
      padding: '2rem',
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
      animation: 'slideIn 1s ease-in-out',
    }}>
      <div style={{
        maxWidth: '700px',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
      }}>
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczOoCuNHt0ETGCLUzJL2xAUcTGNflCx5-0NEICkCfkGkU0PKWMYxELgIXvId3kpocPDYkHR2n1za92LWqdDV7ki-9NxdoMcP5Ay3d-KGw6z0u59znNbJwUq70zV9iCQaTJ9wmeCG8sA8mbuiyb3_1L3qhA=w1081-h1081-s-no-gm?authuser=0"
          alt="My Photo"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            marginBottom: '1rem',
            animation: 'float 3s ease-in-out infinite',
          }}
        />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Welcome to My Portfolio
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
          Hi, I'm Amirth Kishore, a passionate developer crafting modern web applications with a focus on innovation, performance, and user experience.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
          <a
            href="#projects"
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'var(--background)',
              color: '#26c6da',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'var(--foreground)',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: '1px solid var(--foreground)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Contact Me
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}