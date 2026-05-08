import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span>Education</span>
      </motion.h2>

      <div className="education-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="education-card glass-card"
        >
          <div className="edu-icon">
            <FiBookOpen />
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <h3>BSc (Hons) Computer Science</h3>
              <span className="edu-date">2024 – Present</span>
            </div>
            <h4 className="edu-institution">Informatics Institute of Technology (IIT)</h4>
            
            <div className="edu-details">
              <div className="detail-item">
                <span className="badge">Foundation Merit</span>
                <p>Completed the foundation program with Merit recognition.</p>
              </div>
              <div className="detail-item">
                <span className="badge">Key Modules</span>
                <p>Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Web Development.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
