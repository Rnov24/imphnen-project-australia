
import React, { useEffect, useRef } from 'react';
import CloudBackground from './CloudBackground';
import FloatingCodeElements from './FloatingCode';
import { ArrowDown, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const targetValue = 168.5;

  useEffect(() => {
    // Animation for the hero appearing
    if (logoRef.current) {
      const logo = logoRef.current;
      logo.style.opacity = '1';
    }

    // Counter animation
    if (counterRef.current) {
      let currentValue = 0;
      const duration = 2000; // 2 seconds
      const stepTime = 20; // Update every 20ms
      const steps = duration / stepTime;
      const increment = targetValue / steps;

      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(counter);
        }
        if (counterRef.current) {
          counterRef.current.textContent = currentValue.toFixed(1) + 'k';
        }
      }, stepTime);
    }

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tags = ['PHP', 'JS', 'Python', 'HTML', 'CSS'];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10 overflow-hidden bg-gradient-to-b from-blue-50 to-sky-100">
      <CloudBackground />
      <FloatingCodeElements />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div 
          ref={logoRef} 
          className="flex justify-center mb-8 opacity-0 transition-opacity duration-1000"
        >
          <img 
            src="/logo.svg" 
            alt="IMPHNEN Logo" 
            className="h-32 md:h-48 lg:h-64 object-contain animate-float"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800 animate-fade-in-up">
          IMPHNEN
        </h1>
        
        <div className="space-y-2 mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Ingin Menjadi Programmer Handal?
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Namun Enggan Ngoding
          </p>
        </div>
        
        {/* Programming Language Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag, index) => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full bg-white/70 text-gray-700 text-sm font-medium shadow-sm animate-fade-in-up"
              style={{animationDelay: `${0.2 + (index * 0.1)}s`}}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="md:flex gap-6 justify-center mb-12">
          <div className="mb-4 md:mb-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Bantu kami mengembangkan landing page</h3>
          </div>
          
          <div className="flex justify-center space-x-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={scrollToNext}
              className="btn-primary group"
            >
              Jelajahi Fitur
              <ChevronDown className="ml-1 inline group-hover:animate-bounce" size={18} />
            </button>
            
            <a 
              href="https://discord.gg/W4XyRAmPSD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-indigo-500 hover:bg-indigo-600"
            >
              Gabung Discord
            </a>
          </div>
        </div>
        
        {/* Member counter */}
        <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600">Total Member</span>
            <span ref={counterRef} className="text-3xl md:text-4xl font-bold text-skyblue-dark">0k</span>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="flex flex-col items-center cursor-pointer" onClick={scrollToNext}>
            <span className="text-sm text-gray-600 mb-2">Scroll untuk melihat lebih banyak</span>
            <ArrowDown className="animate-bounce text-gray-600" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
