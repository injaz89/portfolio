import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'IIT Connect App',
      category: 'Mobile',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Expo', 'TypeScript'],
      desc: 'Campus mobile app for IIT students — centralizes university life: activities, info, and resources. Built as part of SDGP.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Prestige Auto Detailing',
      category: 'Frontend',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Fully responsive website for a car detailing business in New Zealand with interactive booking system.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Personal Finance Tracker',
      category: 'Full-Stack',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
      desc: 'Full-stack finance tracking system with user login, transaction management, and financial summaries.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Sparkle Gems E-Commerce',
      category: 'Full-Stack',
      tech: ['HTML', 'CSS', 'JS', 'MySQL', 'Java'],
      desc: 'E-commerce platform for a gemstone business with product listings and category pages.',
      image: 'https://images.unsplash.com/photo-1599643478524-fb6664536694?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Traffic Data Histogram',
      category: 'Backend',
      tech: ['Python', 'OOP', 'CSV'],
      desc: 'Python program that analyzes vehicle counts from two junctions and displays traffic patterns using histograms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Aurifera Gems Website',
      category: 'Frontend',
      tech: ['HTML', 'CSS'],
      desc: 'Business website built to increase brand awareness for a gemstone company.',
      image: 'https://images.unsplash.com/photo-1615486171448-4fb3eb526368?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    }
  ];

  const filters = ['All', 'Frontend', 'Full-Stack', 'Mobile', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured <span>Projects</span>
      </motion.h2>

      <div className="filter-container">
        {filters.map(f => (
          <button 
            key={f} 
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id} 
              className="project-card glass-card"
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
