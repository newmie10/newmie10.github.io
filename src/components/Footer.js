import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Feel free to connect!</p>
      <div className="footer-links">
        <a href="mailto:snewman0546@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email </a>
        <a href="https://github.com/newmie10" target="_blank" rel="noopener noreferrer">🐙 GitHub </a>
        <a href="https://linkedin.com/in/s-newman0" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
