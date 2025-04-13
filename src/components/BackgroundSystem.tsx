
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

type BackgroundType = 'cloud' | 'code' | 'auto';

interface BackgroundSystemProps {
  type?: BackgroundType;
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
}

const BackgroundSystem: React.FC<BackgroundSystemProps> = ({
  type = 'auto',
  density = 'medium',
  animated = true,
  className = ''
}) => {
  const { theme } = useTheme();
  const [activeBackground, setActiveBackground] = useState<'cloud' | 'code'>('cloud');
  
  useEffect(() => {
    if (type === 'auto') {
      setActiveBackground(theme === 'light' ? 'cloud' : 'code');
    } else {
      setActiveBackground(type as 'cloud' | 'code');
    }
  }, [theme, type]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {activeBackground === 'cloud' && <CloudBackground density={density} animated={animated} />}
      {activeBackground === 'code' && <CodeBackground density={density} animated={animated} />}
    </div>
  );
};

interface BackgroundElementProps {
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

const CloudBackground: React.FC<BackgroundElementProps> = ({ density = 'medium', animated = true }) => {
  const cloudCount = {
    low: 10,
    medium: 20,
    high: 30
  }[density];
  
  const { theme } = useTheme();
  
  const clouds = Array.from({ length: cloudCount }, (_, i) => ({
    id: i,
    size: 50 + Math.random() * 100,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: 0.2 + Math.random() * 0.4,
    delay: `${Math.random() * 5}s`,
    duration: `${20 + Math.random() * 40}s`,
    blur: 10 + Math.random() * 10
  }));

  return (
    <div className="absolute inset-0">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`absolute rounded-full ${animated ? 'animate-float' : ''}`}
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size}px`,
            top: cloud.top,
            left: cloud.left,
            opacity: cloud.opacity,
            background: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.8)',
            filter: `blur(${cloud.blur}px)`,
            animationDelay: cloud.delay,
            animationDuration: cloud.duration,
          }}
        />
      ))}
    </div>
  );
};

const CodeBackground: React.FC<BackgroundElementProps> = ({ density = 'medium', animated = true }) => {
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
    'export const App = () => <div />;',
    'import { useState } from "react";',
    'const [state, setState] = useState();',
    'React.memo((props) => null)',
    '<Button onClick={() => {}} />',
  ];
  
  // Determine number of elements based on density
  const elementCount = {
    low: 10,
    medium: 20,
    high: 35
  }[density];
  
  // Create random positions
  const positions = Array.from({ length: elementCount }, (_, i) => {
    const randomCode = codeElements[Math.floor(Math.random() * codeElements.length)];
    return {
      id: i,
      code: randomCode,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 20}s`,
      scale: 0.7 + Math.random() * 0.6,
      rotate: Math.floor(Math.random() * 40) - 20,
      opacity: 0.1 + Math.random() * 0.3
    };
  });

  return (
    <div className="absolute inset-0">
      {positions.map((element) => (
        <div 
          key={element.id} 
          className={`absolute font-mono text-sm md:text-base text-blue-200/30 dark:text-blue-300/20 transform ${
            animated ? 'animate-float' : ''
          } hover:text-blue-400/40 dark:hover:text-blue-300/40 transition-colors duration-300`}
          style={{
            top: element.top,
            left: element.left,
            animationDelay: element.delay,
            animationDuration: element.duration,
            transform: `scale(${element.scale}) rotate(${element.rotate}deg)`,
            opacity: element.opacity
          }}
        >
          {element.code}
        </div>
      ))}
    </div>
  );
};

export default BackgroundSystem;
