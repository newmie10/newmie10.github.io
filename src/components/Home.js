import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <h2 name="home">developing...</h2>
      <div className="nav-options">
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/courses" className="nav-link">Classes</Link>
        <Link to="/about" className="nav-link">About Me</Link>
      </div>
    </section>
  );
}

export default Home;