import React from 'react';
import {
  FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaDatabase,
  FaCloud, FaCuttlefish
} from 'react-icons/fa'; // Icons from react-icons
import { SiTensorflow, SiKeras, SiPytorch, SiDjango, SiFlask } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skill-category">
          <h3>Bahasa Pemrograman</h3>
          <div className="skill-grid">
            <div className="skill-card"><FaPython className="skill-icon" /><p>Python</p></div>
            <div className="skill-card"><FaJava className="skill-icon" /><p>Java</p></div>
            <div className="skill-card"><FaJs className="skill-icon" /><p>JavaScript</p></div>
            <div className="skill-card"><FaCuttlefish className="skill-icon" /><p>C++</p></div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Framework dan Library</h3>
          <div className="skill-grid">
            <div className="skill-card"><FaReact className="skill-icon" /><p>React.js</p></div>
            <div className="skill-card"><SiDjango className="skill-icon" /><p>Django</p></div>
            <div className="skill-card"><SiFlask className="skill-icon" /><p>Flask</p></div>
            <div className="skill-card"><SiTensorflow className="skill-icon" /><p>TensorFlow</p></div>
            <div className="skill-card"><SiKeras className="skill-icon" /><p>Keras</p></div>
            <div className="skill-card"><SiPytorch className="skill-icon" /><p>PyTorch</p></div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Pengembangan Web dan Mobile</h3>
          <div className="skill-grid">
            <div className="skill-card"><FaHtml5 className="skill-icon" /><p>HTML</p></div>
            <div className="skill-card"><FaCss3Alt className="skill-icon" /><p>CSS</p></div>
            <div className="skill-card"><FaNodeJs className="skill-icon" /><p>Node.js</p></div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Database dan Manajemen Data</h3>
          <div className="skill-grid">
            <div className="skill-card"><FaDatabase className="skill-icon" /><p>SQL</p></div>
            <div className="skill-card"><FaDatabase className="skill-icon" /><p>NoSQL (MongoDB)</p></div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Cloud dan DevOps</h3>
          <div className="skill-grid">
            <div className="skill-card"><FaAws className="skill-icon" /><p>AWS</p></div>
            <div className="skill-card"><FaDocker className="skill-icon" /><p>Docker</p></div>
            <div className="skill-card"><FaCloud className="skill-icon" /><p>Azure</p></div>
            <div className="skill-card"><FaGitAlt className="skill-icon" /><p>Git</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
