import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate developer specializing in React and TypeScript.</p>
          <a href="#about" className="btn btn-primary">Learn More</a>
        </div>
      </section>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;