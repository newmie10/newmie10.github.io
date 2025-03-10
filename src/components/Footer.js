import React from 'react';
import '../styles/Footer.css';

const months_dictionary={ 
  "1":"January", 
  "2":"February", 
  "3":"March", 
  "4":"April", 
  "5":"May", 
  "6":"June", 
  "7":"July", 
  "8":"August", 
  "9":"September", 
  "10":"October", 
  "11":"November", 
  "12":"December", 
};

const week_dictionary={ 
  "1":"Monday", 
  "2":"Tuesday", 
  "3":"Wednesday", 
  "4":"Thursday", 
  "5":"Friday", 
  "6":"Saturday", 
  "7":"Sunday", 
};


function Footer() {
  return (
    <footer className="footer">
      <p>{week_dictionary[new Date().getDay()]}, {months_dictionary[new Date().getMonth() + 1]} {new Date().getDate()} {new Date().getFullYear()} | Feel free to connect!</p>
      <div className="footer-links">
        <a href="mailto:snewman0546@gmail.com" target="_blank" rel="noopener noreferrer">📧 snewman0546@gmail.com </a>
        <a href="https://github.com/newmie10" target="_blank" rel="noopener noreferrer">🐙 GitHub </a>
        <a href="https://linkedin.com/in/s-newman0" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
      </div>
      <p className="dev-notice">Website still in development. Best viewed on desktop.</p>
    </footer>
  );
}

export default Footer;
