import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="particles-bg"></div>
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name">Muhammadhu <span>Injas</span></h1>
          
          <div className="typing-container">
            <p className="typing-text">Full-Stack Developer & CS Undergraduate</p>
          </div>

          <p className="intro">
            I build responsive web and mobile applications using React, Spring Boot, Node.js, and modern web technologies.
          </p>

          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View Projects <FiArrowRight />
            </Link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download CV <FiDownload />
            </a>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="image-wrapper glass-card">
            <div className="profile-placeholder">
              {/* Add your actual image in assets folder and import it */}
              <div className="placeholder-text">MI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
