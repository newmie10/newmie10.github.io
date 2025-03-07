import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

// Import project images
import minuteMunchImage from '../images/minutemunch.png';
import portfolioImage from '../images/code.jpg';
// Import other project images as needed

// Project data structure - easy to add new projects
const projects = [
  {
    title: "MinuteMunch",
    description: "A quick-and-easy React app that allows users to access a simple P2P food delivery service through UMass Dining and fellow student Munchers",
    longDescription: "MinuteMunch revolutionizes campus food delivery by connecting hungry students with those willing to deliver. Features include real-time order tracking, secure payment processing, and an intuitive user interface.",
    image: minuteMunchImage,
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Amandinh0/MinuteMunch",
    liveDemo: "https://minutemunch.vercel.app", // Add if available
    status: "Complete",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and modern web technologies",
    longDescription: "A responsive portfolio website showcasing my projects and skills. Features smooth animations, dynamic content loading, and modern design principles.",
    image: portfolioImage,
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/newmie10/newmie10.github.io",
    liveDemo: "https://newmie10.github.io",
    status: "In Progress",
    featured: true
  }
  // Add more projects here following the same structure
];

function Projects() {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="projects-container">
      <button onClick={() => navigate('/')} className="back-button">
        Home
      </button>
      
      <div className="title-container">
        <motion.h1 
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.div 
          className="title-underline"
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredProject(project.title)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              {hoveredProject === project.title && (
                <div className="project-overlay">
                  <p className="overlay-description">{project.longDescription}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links-container">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> GitHub
                </a>
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
              <div className="project-status">
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
