import React, { useState } from 'react';
import './LoadingScreen.css';
import Tachometer from './Tachometer';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFadeOut, setShowFadeOut] = useState(false);

  const handleTachometerComplete = () => {
    // Add a small delay before starting fade out
    setTimeout(() => {
      setShowFadeOut(true);
      
      // Complete loading after fade out animation
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete && onLoadingComplete();
      }, 1000); // Match fade out duration
    }, 300);
  };

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`loading-screen ${showFadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <Tachometer 
          isLoading={isLoading} 
          onComplete={handleTachometerComplete}
        />
        
        {/* Racing-themed background elements */}
        <div className="racing-elements">
          <div className="speed-lines">
            <div className="speed-line"></div>
            <div className="speed-line"></div>
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
      </div>
    </div>
  );
};

export default LoadingScreen;
