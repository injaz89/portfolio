import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="home" smooth={true} duration={500}>
            Injas<span>.</span>
          </Link>
        </div>
        
        <p className="footer-text">
          &copy; {year} Injas Ifham. All rights reserved.
        </p>
        
        <div className="footer-links">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
