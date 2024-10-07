import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-container">
        <div className="card">
          <h3>Project 1: My Cool App</h3>
          <p>Description of the project. You can add links below.</p>
          <a href="https://github.com/username/my-cool-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Repeat cards for more projects */}
      </div>
    </section>
  );
}

export default Projects;