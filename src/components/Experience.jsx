import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Junior Web Developer",
      company: "Sparkle Media",
      date: "June 2025 – Present",
      tasks: [
        "Developed responsive client websites using modern frontend technologies.",
        "Improved UI/UX to enhance user engagement and retention.",
        "Built dynamic and performant frontend interfaces.",
        "Collaborated with the design team to ensure visual consistency."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span>Experience</span>
      </motion.h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            key={index} 
            className="timeline-item"
          >
            <div className="timeline-dot">
              <FiBriefcase />
            </div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-tasks">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
