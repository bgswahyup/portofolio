import React, { useEffect, useState } from 'react';
import '../styles/Hero.css'; // Menghubungkan dengan CSS untuk styling

const Hero = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "I'm Bagus Wahyu Pratomo",
    "I'm a Software Engineer",
    "I'm an AI Enthusiast",
    "I'm a Data Scientist"
  ];

  // Ganti teks setiap beberapa detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Ganti setiap 3 detik

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{texts[index]}</h1>
        <p>Creating solutions with technology.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </section>
  );
};

export default Hero;
