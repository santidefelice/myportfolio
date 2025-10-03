import React, { useEffect, useState } from 'react';
import './Tachometer.css';

const Tachometer = ({ isLoading, onComplete }) => {
  const [rpm, setRpm] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    if (isLoading && !isAnimating && !hasCompleted) {
      setIsAnimating(true);
      
      // Animate RPM from 0 to redline (8000 RPM)
      const duration = 30000; // 4 seconds
      const targetRpm = 8000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth acceleration
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentRpm = Math.floor(easedProgress * targetRpm);
        
        setRpm(currentRpm);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Start bouncing effect when hitting rev limiter
          setIsBouncing(true);
          startBounceEffect();
        }
      };
      
      const startBounceEffect = () => {
        let bounceCount = 0;
        const maxBounces = 6;
        const bounceDuration = 150; // 200ms per bounce
        
        const bounce = () => {
          if (bounceCount < maxBounces) {
            // Bounce down
            setRpm(7500);
            setTimeout(() => {
              // Bounce back up
              setRpm(8000);
              bounceCount++;
              setTimeout(bounce, bounceDuration);
            }, bounceDuration);
          } else {
            // Final bounce and fade out
            setRpm(8000);
            setTimeout(() => {
              setIsAnimating(false);
              setIsBouncing(false);
              setHasCompleted(true);
              onComplete && onComplete();
            }, 300);
          }
        };
        
        bounce();
      };
      
      requestAnimationFrame(animate);
    }
  }, [isLoading, isAnimating, hasCompleted, onComplete]);

  // Calculate needle rotation angle (0-180 degrees for half circle)
  const maxRpm = 8000;
  const needleAngle = (rpm / maxRpm) * 180;

  return (
    <div className="tachometer-container">
      <div className={`tachometer ${isBouncing ? 'bouncing' : ''}`}>
        <svg width="300" height="300" viewBox="0 0 300 300" className="tachometer-svg">
          {/* Background circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="8"
            className="tachometer-background"
          />
          
          {/* RPM markings */}
          {Array.from({ length: 10 }, (_, i) => {
            const angle = (i * 20) - 90; // -90 to 70 degrees
            const x1 = 150 + 100 * Math.cos((angle * Math.PI) / 180);
            const y1 = 150 + 100 * Math.sin((angle * Math.PI) / 180);
            const x2 = 150 + 110 * Math.cos((angle * Math.PI) / 180);
            const y2 = 150 + 110 * Math.sin((angle * Math.PI) / 180);
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i >= 7 ? "#ff4444" : "#666666"}
                strokeWidth="3"
              />
            );
          })}
          
          {/* RPM numbers */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
            const angle = (value * 20) - 90;
            const x = 150 + 85 * Math.cos((angle * Math.PI) / 180);
            const y = 150 + 85 * Math.sin((angle * Math.PI) / 180);
            
            return (
              <text
                key={value}
                x={x}
                y={y + 5}
                textAnchor="middle"
                className={`rpm-text ${value >= 7 ? 'redline-text' : ''}`}
                fontSize="12"
              >
                {value}
              </text>
            );
          })}
          
          {/* Needle */}
          <g className="needle-group">
            <line
              x1="150"
              y1="150"
              x2="150"
              y2="50"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${needleAngle} 150 150)`}
              className="needle"
            />
            <circle
              cx="150"
              cy="150"
              r="8"
              fill="#ff4444"
              className="needle-center"
            />
          </g>
          
          {/* Center text */}
          <text x="150" y="180" textAnchor="middle" className="center-text" fontSize="14">
            RPM
          </text>
        </svg>
        
        {/* Digital RPM display */}
        <div className="digital-rpm">
          <span className="rpm-label"></span>
        </div>
        
        {/* Loading text */}
        {isLoading && (
          <div className="loading-text">
            <span className="loading-dots"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tachometer;
