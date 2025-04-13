export default function About() {
  return (
    <section id="about" style={{
      padding: '4rem 2rem',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      textAlign: 'center',
      animation: 'fadeIn 1.5s ease-in-out',
      height: '100vh', // Full screen height
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>About Me</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
        Hi, I'm Amirth Kishore, a passionate developer with expertise in building modern web applications. I love solving problems and creating user-friendly digital experiences.
      </p>
    </section>
  );
}