
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

const CloudBackground: React.FC = () => {
  const cloudsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

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
        const size = Math.random() * 150 + 80; // Larger clouds
        const posX = Math.random() * containerWidth;
        const posY = Math.random() * containerHeight;
        const opacity = Math.random() * 0.5 + 0.2; // Slightly more transparent
        const duration = Math.random() * 120 + 60; // Slower movement
        const delay = Math.random() * 20;
        
        // Apply styles based on theme
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size}px`;
        cloud.style.left = `${posX}px`;
        cloud.style.top = `${posY}px`;
        cloud.style.opacity = opacity.toString();
        cloud.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Apply theme-specific styles
        if (theme === 'dark') {
          cloud.style.background = 'rgba(30, 41, 59, 0.3)';
          cloud.style.borderRadius = '50%';
          cloud.style.filter = 'blur(30px)';
        } else {
          cloud.style.background = 'rgba(255, 255, 255, 0.6)';
          cloud.style.borderRadius = '50%';
          cloud.style.filter = 'blur(30px)';
        }
        
        container.appendChild(cloud);
      }
    };
    
    // Initial creation - more clouds for a fuller effect
    createClouds(50);
    
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
  }, [theme]);

  return (
    <div 
      ref={cloudsRef} 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    ></div>
  );
};

export default CloudBackground;
