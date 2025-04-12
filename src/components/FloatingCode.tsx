
import React from 'react';

interface FloatingCodeProps {
  code: string;
  className?: string;
}

const FloatingCode: React.FC<FloatingCodeProps> = ({ code, className = '' }) => {
  return (
    <div className={`inline-block font-mono text-lg opacity-70 animate-melting ${className}`}>
      {code}
    </div>
  );
};

const FloatingCodeElements: React.FC = () => {
  const codeElements = [
    { code: '<div>', position: 'top-1/4 left-1/5' },
    { code: '{...state}', position: 'top-1/3 right-1/4' },
    { code: '</>', position: 'bottom-1/3 left-1/3' },
    { code: 'const mager = true;', position: 'bottom-1/4 right-1/5' },
    { code: '{ loading && <Zzz /> }', position: 'top-2/5 left-2/5' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {codeElements.map((element, index) => (
        <div key={index} className={`absolute ${element.position}`}>
          <FloatingCode 
            code={element.code} 
            className={`text-skyblue-dark opacity-40 delay-${index}`} 
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingCodeElements;
