import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-container">
        <div className="card">
          <h3>MinuteMunch</h3>
          <p name="projecttext">A quick-and-easy React app that allows users to access simple P2P food delivery service through UMass Dining and fellow student Munchers</p>
          <a href="https://github.com/Amandinh0/MinuteMunch" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Repeat cards for more projects */}
      </div>
    </section>
  );
}

export default Projects;