import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaShieldAlt, FaCode, FaSearch } from 'react-icons/fa';
import '../styles/CyberSecurity.css';

function CyberSecurity() {
  const navigate = useNavigate();

  return (
    <section className="cybersecurity-container">
      <button onClick={() => navigate('/')} className="back-button">
        Home
      </button>
      
      <motion.h1 
        className="cybersecurity-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cybersecurity CTF Challenges
      </motion.h1>

      <motion.div 
        className="coming-soon-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="coming-soon-content">
          <h2>Coming Soon</h2>
          <p>
            My collection of Capture The Flag challenges and write-ups is currently under development.
            Check back soon for challenges in:
          </p>
          
          <div className="ctf-categories">
            <div className="ctf-category">
              <FaLock className="category-icon" />
              <h3>Cryptography</h3>
            </div>
            <div className="ctf-category">
              <FaCode className="category-icon" />
              <h3>Web Exploitation</h3>
            </div>
            <div className="ctf-category">
              <FaShieldAlt className="category-icon" />
              <h3>Binary Exploitation</h3>
            </div>
            <div className="ctf-category">
              <FaSearch className="category-icon" />
              <h3>Forensics</h3>
            </div>
          </div>
          
          <div className="subscribe-section">
            <p>Want to be notified when challenges are available?</p>
            <button className="subscribe-button">Subscribe for Updates</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CyberSecurity; 