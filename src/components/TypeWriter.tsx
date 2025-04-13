
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  speed = 100,
  delay = 1500,
  loop = true,
  className = '',
  cursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const textArray = Array.isArray(text) ? text : [text];
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      const currentText = textArray[textIndex];
      
      if (!isDeleting) {
        // Typing effect
        if (displayText.length < currentText.length) {
          timer = setTimeout(() => {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          }, speed);
        } else {
          // Wait before deleting
          setIsTyping(false);
          timer = setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(true);
          }, delay);
        }
      } else {
        // Deleting effect
        if (displayText.length > 0) {
          timer = setTimeout(() => {
            setDisplayText(displayText.slice(0, displayText.length - 1));
          }, speed / 2);
        } else {
          // Move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textArray.length);
          
          // If we reached the end and loop is false, stop
          if (textIndex === textArray.length - 1 && !loop) {
            setIsTyping(false);
          }
        }
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, textIndex, isTyping, isDeleting, textArray, speed, delay, loop]);

  return (
    <span className={className}>
      {displayText}
      {cursor && isTyping && (
        <span className="inline-block w-0.5 h-5 ml-0.5 bg-current animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypeWriter;
