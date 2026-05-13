import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

import iitConnectImg from '../assets/projects/iit-connect-logo.png';
import prestigeImg from '../assets/projects/prestige.png';
import auriferaGemsImg from '../assets/projects/aurifera_gems.jpeg';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'IIT CONNECT Application',
      category: 'Mobile',
      tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Expo', 'TypeScript'],
      desc: 'Campus mobile app for IIT students — centralizes university life: activities, info, and resources. Built as part of SDGP.',
      image: iitConnectImg,
      github: 'https://github.com/Dev-Liss/IIT-Connect',
      demo: '#'
    },
    {
      id: 2,
      title: 'Prestige Auto Detailing Website',
      category: 'Frontend',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Fully responsive website for a car detailing business in New Zealand with interactive booking system.',
      image: prestigeImg,
      github: 'https://github.com/injaz89/Prestige-Auto-Detailers',
      demo: '#'
    },
    {
      id: 3,
      title: 'Personal Finance Tracker',
      category: 'Full-Stack',
      tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
      desc: 'Full-stack finance tracking system with user login, transaction management, and financial summaries.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com/injaz89/Personal-Finance-Tracker-',
      demo: '#'
    },
    {
      id: 4,
      title: 'Estate Agent Application',
      category: 'Frontend',
      tech: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'React Router DOM'],
      desc: 'Responsive property search application with advanced filtering, interactive property details, favorites, drag-and-drop features.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Smart Campus API',
      category: 'Backend',
      tech: ['Java', 'JAX-RS', 'Grizzly Server', 'Maven', 'REST API', 'JSON', 'ConcurrentHashMap'],
      desc: 'Scalable RESTful API for university facilities management with secure room and sensor tracking, nested resource architecture.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Graph Processing Solution',
      category: 'Backend',
      tech: ['Java', 'CSV Parsing', 'Graph Algorithms'],
      desc: 'Directed graph processing utility that parses CSV data, detects DAG structures, calculates graph metrics, and implements PageRank.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'Aurifera Gems Website',
      category: 'Frontend',
      tech: ['HTML', 'CSS'],
      desc: 'Business website built to increase brand awareness for a gemstone company.',
      image: auriferaGemsImg,
      github: 'https://github.com/injaz89/Aurifera-Gems',
      demo: '#'
    },
    {
      id: 8,
      title: 'Traffic Data Histogram',
      category: 'Backend',
      tech: ['Python', 'OOP', 'CSV Processing'],
      desc: 'Python program that analyzes vehicle counts from two junctions and displays traffic patterns using histograms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com/injaz89/Traffic-Data-Histogram---CW1',
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
