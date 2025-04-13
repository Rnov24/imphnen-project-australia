
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Code, Sparkles } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import BackgroundSystem from './BackgroundSystem';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Animation for the hero appearing
    if (logoRef.current) {
      const logo = logoRef.current;
      logo.style.opacity = '1';
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

  const tags = ['PHP', 'JS', 'Python', 'Go', 'Java', 'React', 'TypeScript'];

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10 overflow-hidden 
                bg-gradient-to-b from-blue-50 to-sky-100 dark:from-gray-900 dark:to-blue-950"
    >
      <BackgroundSystem type="auto" density="medium" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div 
          ref={logoRef} 
          className="flex justify-center mb-8 opacity-0 transition-opacity duration-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative">
            <img 
              src="/imphnen.png" 
              alt="IMPHNEN Logo" 
              className={`h-40 md:h-56 lg:h-72 object-contain transition-all duration-500 filter drop-shadow-lg ${isHovering ? 'scale-110' : ''}`}
            />
            {isHovering && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                <Sparkles className="text-yellow-400 h-12 w-12 animate-spin-slow" />
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-2 mb-10">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Programmer ngoding?
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            mending scroll fesnuk.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Siapkan penggorengan, Atmint.
          </p>
        </div>
        
        {/* Programming Language Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag, index) => (
            <span 
              key={tag}
              className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 text-sm font-medium shadow-md 
                        backdrop-blur-sm transform transition-all duration-300 animate-fade-in-up hover:scale-110 hover:shadow-lg"
              style={{animationDelay: `${0.2 + (index * 0.1)}s`}}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center mt-4 mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <button 
            className="btn-primary flex items-center gap-2 group"
            onClick={() => window.open("https://github.com/trending", "_blank")}
          >
            <Code className="group-hover:rotate-12 transition-transform" />
            Lihat Trending di GitHub
          </button>
        </div>
        
        <div 
          className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in-up cursor-pointer"
          style={{animationDelay: '0.8s'}}
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center transform transition-all duration-300 hover:translate-y-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll untuk melihat lebih banyak</span>
            <div className="p-2 rounded-full bg-skyblue/30 dark:bg-skyblue-dark/30 backdrop-blur-sm">
              <ArrowDown className="animate-bounce text-gray-600 dark:text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
