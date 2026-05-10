import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import profileImg from '../assets/projects/injas.jpeg';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return (
    <section id="home" className="hero-section">
      <div className="particles-bg"></div>
      <div className="hero-content">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text"
        >
          <motion.h2 variants={itemVariants} className="greeting">Hi, I'm</motion.h2>
          <motion.h1 variants={itemVariants} className="name">Muhammadhu <span>Injas M</span></motion.h1>
          
          <motion.div variants={itemVariants} className="typing-container">
            <p className="typing-text">Computer Science Undergraduate | Full-Stack & Mobile App Developer</p>
          </motion.div>

          <motion.p variants={itemVariants} className="intro">
            I build responsive web and mobile applications using React, Spring Boot, Node.js, and modern web technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View Projects <FiArrowRight />
            </Link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download CV <FiDownload />
            </a>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="image-wrapper glass-card">
            <img src={profileImg} alt="Muhammadhu Injas M" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
