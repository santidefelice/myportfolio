import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <span className="placeholder-text">Your Photo Here</span>
              </div>
            </div>
            <div className="image-glow"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Full Stack</span>
              <span className="title-line highlight">Developer</span>
            </h1>
            <p className="hero-description">
              Passionate about creating high-performance web applications and mobile solutions. 
              I specialize in React, Node.js, and modern JavaScript frameworks, bringing ideas 
              to life with clean code and innovative solutions.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="action-btn primary">
                <span>View My Work</span>
                <div className="btn-glow"></div>
              </button>
              <button className="action-btn secondary">
                <span>Get In Touch</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background-elements">
        <div className="speed-lines">
          <div className="speed-line"></div>
          <div className="speed-line"></div>
          <div className="speed-line"></div>
        </div>
        <div className="corner-markers">
          <div className="corner-marker top-left"></div>
          <div className="corner-marker top-right"></div>
          <div className="corner-marker bottom-left"></div>
          <div className="corner-marker bottom-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
