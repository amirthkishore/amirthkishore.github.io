"use client";

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '5rem 2rem',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      textAlign: 'center',
      animation: 'slideIn 1.5s ease-in-out',
      height: '100vh', // Full screen height
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>My Projects</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
        Here are some of the projects I've worked on:
      </p>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
        <li style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
          <strong>Project 1:</strong> A web application for managing tasks.
        </li>
        <li style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
          <strong>Project 2:</strong> An e-commerce platform with a modern UI.
        </li>
        <li style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
          <strong>Project 3:</strong> A portfolio website showcasing my skills.
        </li>
      </ul>
    </section>
  );
}