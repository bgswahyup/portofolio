import React from 'react';
import { FaLaptop, FaGift } from 'react-icons/fa';  // Import icons
import '../styles/About.css';
import profilePic from '../assets/laptop.gif'; // Import profile picture

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I am <strong>Bagus Wahyu Pratomo</strong>
            </p>
            <p>
            <FaLaptop className="icon" /> I enjoy working on cutting-edge technology, especially in the fields of machine learning and AI.
            </p>
            <p>
              <FaGift className="icon" /> Let's connect and explore how we can build something amazing together!
            </p>
          </div>
          <div className="about-image">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
