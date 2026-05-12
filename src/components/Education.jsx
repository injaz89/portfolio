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
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="education-card glass-card"
        >
          <div className="edu-icon">
            <FiBookOpen />
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <h3>Foundation Certificate in Higher Education</h3>
              <span className="edu-date">2024</span>
            </div>
            <h4 className="edu-institution">Informatics Institute of Technology (IIT)</h4>
            
            <div className="edu-details">
              <div className="detail-item">
                <span className="badge">Merit</span>
                <p>Completed with Merit recognition.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="education-card glass-card"
        >
          <div className="edu-icon">
            <FiBookOpen />
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <h3>G.C.E O/L</h3>
              <span className="edu-date">Completed</span>
            </div>
            <h4 className="edu-institution">All Saints' College, Galle</h4>
            
            <div className="edu-details">
              <div className="detail-item">
                <span className="badge">Results</span>
                <p>2A, 2B, 5C</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
