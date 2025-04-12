
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

type BackgroundType = 'cloud' | 'code' | 'auto';
type Density = 'low' | 'medium' | 'high';

interface BackgroundSystemProps {
  type?: BackgroundType;
  density?: Density;
  className?: string;
}

const BackgroundSystem: React.FC<BackgroundSystemProps> = ({ 
  type = 'auto', 
  density = 'medium',
  className = '' 
}) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-select background type based on theme if type is 'auto'
  const backgroundType = type === 'auto' 
    ? (theme === 'light' ? 'cloud' : 'code')
    : type;

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear previous elements
    container.innerHTML = '';
    
    if (backgroundType === 'cloud') {
      // Cloud particles count based on density
      const cloudCount = {
        low: 25,
        medium: 50,
        high: 75
      }[density];
      
      // Create cloud particles
      for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        // Random properties
        const size = Math.random() * 150 + 80;
        const posX = Math.random() * containerWidth;
        const posY = Math.random() * containerHeight;
        const opacity = Math.random() * 0.5 + 0.2;
        const duration = Math.random() * 120 + 60;
        const delay = Math.random() * 20;
        
        // Apply styles
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
    } else if (backgroundType === 'code') {
      // Code elements
      const codeElements = [
        'const mager = true;',
        '{ ...props }',
        '<div>',
        '</div>',
        'function()',
        'return null;',
        'useState()',
        'useEffect(() => {})',
        'export default',
        'import React from "react";',
        '</>',
        'console.log()',
        'setInterval()',
        '() => {}',
        '[...array]',
        'map((item) => item)',
        'async/await',
        '{ loading && <Loading /> }',
        'const { data } = props;',
        'try { } catch { }',
        'const getCode = () => "mager";',
      ];
      
      // Determine number of elements based on density
      const elementCount = {
        low: 8,
        medium: 15,
        high: 30
      }[density];
      
      // Create code elements
      for (let i = 0; i < elementCount; i++) {
        const codeElement = document.createElement('div');
        const randomCode = codeElements[Math.floor(Math.random() * codeElements.length)];
        
        // Style code element
        codeElement.textContent = randomCode;
        codeElement.className = 'code-element';
        codeElement.style.position = 'absolute';
        codeElement.style.top = `${Math.random() * 100}%`;
        codeElement.style.left = `${Math.random() * 100}%`;
        codeElement.style.transform = `scale(${0.7 + Math.random() * 0.6}) rotate(${Math.floor(Math.random() * 40) - 20}deg)`;
        codeElement.style.opacity = (0.2 + Math.random() * 0.3).toString();
        codeElement.style.color = theme === 'light' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)';
        codeElement.style.fontFamily = 'monospace';
        codeElement.style.fontSize = `${12 + Math.random() * 8}px`;
        codeElement.style.animation = `float ${5 + Math.random() * 15}s ease-in-out ${Math.random() * 5}s infinite`;
        codeElement.style.transition = 'color 0.3s ease, opacity 0.3s ease';
        
        container.appendChild(codeElement);
      }
    }
    
    // Resize handler
    const handleResize = () => {
      if (container) {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;
        
        // Update elements positions
        const elements = container.children;
        Array.from(elements).forEach((element) => {
          const htmlElement = element as HTMLElement;
          htmlElement.style.left = `${Math.random() * newWidth}px`;
          htmlElement.style.top = `${Math.random() * newHeight}px`;
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme, backgroundType, density]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
    >
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          
          .cloud {
            position: absolute;
            transition: background 0.3s ease, filter 0.3s ease;
          }
          
          .code-element {
            pointer-events: none;
            user-select: none;
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundSystem;
