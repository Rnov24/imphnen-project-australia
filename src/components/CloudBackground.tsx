
import React, { useEffect, useRef } from 'react';

const CloudBackground: React.FC = () => {
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cloudsRef.current) return;
    
    const container = cloudsRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear previous clouds
    container.innerHTML = '';
    
    // Create cloud particles
    const createClouds = (count: number) => {
      for (let i = 0; i < count; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        // Random properties
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * containerWidth;
        const posY = Math.random() * containerHeight;
        const opacity = Math.random() * 0.6 + 0.3;
        const duration = Math.random() * 60 + 30;
        const delay = Math.random() * 10;
        
        // Apply styles
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size}px`;
        cloud.style.left = `${posX}px`;
        cloud.style.top = `${posY}px`;
        cloud.style.opacity = opacity.toString();
        cloud.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        container.appendChild(cloud);
      }
    };
    
    // Initial creation
    createClouds(15);
    
    // Resize handler
    const handleResize = () => {
      if (container) {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;
        
        // Update cloud positions if container size changes
        const clouds = container.querySelectorAll('.cloud');
        clouds.forEach((cloud: Element) => {
          const cloudElement = cloud as HTMLElement;
          cloudElement.style.left = `${Math.random() * newWidth}px`;
          cloudElement.style.top = `${Math.random() * newHeight}px`;
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={cloudsRef} className="clouds"></div>;
};

export default CloudBackground;
