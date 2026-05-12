import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { title: "Professional Certificate in Java programming", issuer: "Certification" },
    { title: "Professional Certificate in Artificial Intelligence", issuer: "Certification" },
    { title: "Machine Learning : AI python & R + Chat-GPT Prize", issuer: "Certification" },
    { title: "Java Object-Oriented Programming", issuer: "LinkedIn Learning" },
    { title: "Introduction to Cloud Security", issuer: "Simple Learn" },
    { title: "Volunteer — Haxmas Journey 2024 Grand Finale", issuer: "Ascentic (Participation)" },
    { title: "Industry Visit — Virtusa Sri Lanka", issuer: "IEEE IIT Insight Gen (Participation)" }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span>Certifications & Participations</span>
      </motion.h2>

      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="cert-card glass-card"
          >
            <div className="cert-icon">
              <FiAward />
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
