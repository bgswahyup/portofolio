import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
