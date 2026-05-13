import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase } from 'react-icons/fi';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      desc: 'Building responsive, dynamic UIs with React and modern CSS.'
    },
    {
      icon: <FiDatabase />,
      title: 'Backend Development',
      desc: 'Creating robust APIs with Node.js, Express, Spring Boot, and Java.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Development',
      desc: 'Developing cross-platform mobile applications using Expo.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        About <span>Me</span>
      </motion.h2>

      <div className="about-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-text glass-card"
        >
          <p>
            Curious and driven Computer Science undergraduate passionate about Full-Stack Development and Software Engineering. Skilled in Java, OOP, Data Structures & Algorithms, with hands-on experience in Spring Boot, Node.js, Express.js, React, React Native, JavaScript, HTML, CSS, MySQL, and MongoDB.
          </p>
          <p>
            Familiar with MERN Stack and focused on building responsive, scalable applications with clean, maintainable code.
          </p>
          <div className="quick-info">
            <div className="info-item">
              <span className="info-label">Education:</span>
              <span className="info-value">BSc (Hons) Computer Science, IIT</span>
            </div>
            <div className="info-item">
              <span className="info-label">Experience:</span>
              <span className="info-value">Junior Web Developer</span>
            </div>
            <div className="info-item">
              <span className="info-label">Focus:</span>
              <span className="info-value">Full-Stack & Mobile App Dev</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-cards"
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="service-card glass-card"
            >
              <div className="service-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
