
import React from 'react';

interface FloatingCodeBackgroundProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

const FloatingCodeBackground: React.FC<FloatingCodeBackgroundProps> = ({ 
  className = '', 
  density = 'medium',
  animated = true 
}) => {
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
  
  // Create random positions
  const positions = Array.from({ length: elementCount }, (_, i) => {
    const randomCode = codeElements[Math.floor(Math.random() * codeElements.length)];
    return {
      id: i,
      code: randomCode,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 15}s`,
      scale: 0.7 + Math.random() * 0.6,
      rotate: Math.floor(Math.random() * 40) - 20
    };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {positions.map((element) => (
        <div 
          key={element.id} 
          className={`absolute font-mono text-sm md:text-base text-blue-200/30 dark:text-blue-300/20 transform ${
            animated ? 'animate-float' : ''
          }`}
          style={{
            top: element.top,
            left: element.left,
            animationDelay: element.delay,
            animationDuration: element.duration,
            transform: `scale(${element.scale}) rotate(${element.rotate}deg)`,
            opacity: 0.2 + Math.random() * 0.3
          }}
        >
          {element.code}
        </div>
      ))}
    </div>
  );
};

export default FloatingCodeBackground;
