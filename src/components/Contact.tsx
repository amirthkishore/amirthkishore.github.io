"use client";

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '4rem 2rem',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      textAlign: 'center',
      animation: 'zoomIn 1.5s ease-in-out',
      height: '100vh', // Full screen height
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Contact Me</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
        Feel free to reach out to me for any opportunities or collaborations.
      </p>
      <a
        href="mailto:your.email@example.com"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#26c6da',
          color: '#fff',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Email Me
      </a>
    </section>
  );
}