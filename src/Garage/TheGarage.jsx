import React, { useState } from 'react';
import './TheGarage.css';

const TheGarage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/300/200",
      category: "Web Application",
      year: "2024",
      status: "Completed"
    },
    {
      id: 2,
      name: "Mobile Racing Game",
      description: "Cross-platform mobile racing game built with React Native",
      tech: ["React Native", "Expo", "Three.js"],
      image: "/api/placeholder/300/200",
      category: "Mobile App",
      year: "2024",
      status: "In Development"
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "Racing-themed portfolio with tachometer loading animation",
      tech: ["React", "CSS3", "SVG"],
      image: "/api/placeholder/300/200",
      category: "Web Design",
      year: "2024",
      status: "Completed"
    },
    {
      id: 4,
      name: "API Dashboard",
      description: "Real-time dashboard for monitoring API performance",
      tech: ["Vue.js", "D3.js", "WebSocket"],
      image: "/api/placeholder/300/200",
      category: "Dashboard",
      year: "2023",
      status: "Completed"
    }
  ];

  const handleCarClick = (project) => {
    setSelectedCar(project);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <section className="the-garage">
      <div className="garage-header">
        <h2 className="garage-title">The Garage</h2>
        <p className="garage-subtitle">Where Projects Come to Life</p>
        <div className="garage-stats">
          <div className="stat">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">{projects.filter(p => p.status === 'Completed').length}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">{projects.filter(p => p.status === 'In Development').length}</span>
            <span className="stat-label">In Development</span>
          </div>
        </div>
      </div>

      <div className="showroom-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`car-card ${selectedCar?.id === project.id ? 'selected' : ''}`}
            onClick={() => handleCarClick(project)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="car-image-container">
              <div className="car-image">
                <div className="project-image-placeholder">
                  <span className="project-initial">{project.name.charAt(0)}</span>
                </div>
                <div className="car-glow"></div>
              </div>
              <div className="car-status-badge">
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="car-info">
              <h3 className="car-name">{project.name}</h3>
              <p className="car-description">{project.description}</p>
              <div className="car-specs">
                <div className="spec">
                  <span className="spec-label">Category:</span>
                  <span className="spec-value">{project.category}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Year:</span>
                  <span className="spec-value">{project.year}</span>
                </div>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="car-actions">
              <button className="action-btn view-btn">
                <span>View Details</span>
                <div className="btn-glow"></div>
              </button>
              <button className="action-btn demo-btn">
                <span>Live Demo</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedCar && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedCar.name}</h2>
                <span className={`modal-status ${selectedCar.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedCar.status}
                </span>
              </div>
              <div className="modal-body">
                <div className="modal-image">
                  <div className="project-image-placeholder large">
                    <span className="project-initial">{selectedCar.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="modal-info">
                  <p className="modal-description">{selectedCar.description}</p>
                  <div className="modal-specs">
                    <div className="modal-spec">
                      <strong>Category:</strong> {selectedCar.category}
                    </div>
                    <div className="modal-spec">
                      <strong>Year:</strong> {selectedCar.year}
                    </div>
                    <div className="modal-spec">
                      <strong>Technologies:</strong>
                      <div className="modal-tech-stack">
                        {selectedCar.tech.map((tech, index) => (
                          <span key={index} className="modal-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button className="modal-btn primary">
                  <span>View Project</span>
                </button>
                <button className="modal-btn secondary">
                  <span>View Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TheGarage;
