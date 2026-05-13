import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaPython, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiExpress, SiMysql, SiMongodb, SiPostgresql, SiBootstrap, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { SiIntellijidea } from 'react-icons/si';
import { BsCloudFill } from 'react-icons/bs';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, level: 85 },
        { name: "Java", icon: <FaJava color="#007396" />, level: 80 },
        { name: "Python", icon: <FaPython color="#3776AB" />, level: 75 },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, level: 70 },
        { name: "SQL", icon: <FaDatabase color="#00758F" />, level: 80 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact color="#61DAFB" />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, level: 75 },
        { name: "HTML/CSS", icon: <FaHtml5 color="#E34F26" />, level: 90 },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" />, level: 80 },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" />, level: 85 },
        { name: "Figma", icon: <FaFigma color="#F24E1E" />, level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" />, level: 80 },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" />, level: 75 },
        { name: "Express.js", icon: <SiExpress color="#ffffff" />, level: 80 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" />, level: 75 },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, level: 70 },
        { name: "Cloudinary", icon: <BsCloudFill color="#3448C5" />, level: 80 }
      ]
    },
    {
      title: "Project Management & Tools",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt color="#F05032" />, level: 85 },
        { name: "VS Code", icon: <VscVscode color="#007ACC" />, level: 90 },
        { name: "IntelliJ", icon: <SiIntellijidea color="#000000" />, level: 85 },
        { name: "ClickUp", icon: <span style={{color: '#7B68EE'}}>CU</span>, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span>Skills</span>
      </motion.h2>

      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="skill-category glass-card"
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
