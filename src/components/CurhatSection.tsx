
import React, { useEffect, useRef, useState } from 'react';
import { BrainCircuit, Users, FileCode } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="bg-white/90 dark:bg-gray-800/90 dark:border dark:border-gray-700/50 rounded-xl shadow-md dark:shadow-lg 
                dark:shadow-blue-900/10 p-8 flex flex-col items-center transform transition-all duration-500 
                opacity-0 translate-y-8 hover:shadow-xl dark:hover:shadow-blue-900/30"
      style={{ animationDelay: delay }}
      data-feature-card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex justify-center mb-4 transform transition-all duration-500 ${
          isHovered ? 'scale-125 rotate-6' : ''
        }`}
      >
        <div className="relative p-4 rounded-full bg-skyblue/20 dark:bg-skyblue-dark/20">
          <div className="text-skyblue-dark dark:text-skyblue-light text-4xl">
            {icon}
          </div>
          {isHovered && (
            <span className="absolute inset-0 rounded-full animate-pulse-ring border-2 border-skyblue dark:border-skyblue-light"></span>
          )}
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-3 text-gray-800 dark:text-white transition-all duration-300 ${
        isHovered ? 'text-skyblue-dark dark:text-skyblue-light' : ''
      }`}>
        {title}
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
};

const CurhatSection: React.FC = () => {
  useEffect(() => {
    // Add animation class after a short delay to trigger animations
    const timer = setTimeout(() => {
      document.querySelectorAll('[data-feature-card]').forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('is-visible');
        }, index * 200);
      });
    }, 300);
    
    // Create floating code elements as background decoration
    const floatingElementsContainer = document.getElementById('floating-elements');
    if (floatingElementsContainer) {
      const codeElements = ['<div>', '</div>', '<span>', '</span>', 'const', 'let', 'function()', 'return', 'async', '{ }', '[ ]', 'import'];
      
      codeElements.forEach((element) => {
        const codeEl = document.createElement('div');
        codeEl.className = 'absolute text-blue-200 dark:text-blue-400 opacity-20 text-xl font-mono animate-float';
        codeEl.textContent = element;
        codeEl.style.top = `${Math.random() * 100}%`;
        codeEl.style.left = `${Math.random() * 100}%`;
        codeEl.style.animationDelay = `${Math.random() * 5}s`;
        
        floatingElementsContainer.appendChild(codeEl);
      });
    }
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-sky-100 to-blue-100 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white animate-fade-in-up text-gradient">
          Fitur Unggulan
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          IMPHNEN hadir dengan berbagai fitur untuk membantu kamu menjadi programmer handal tanpa harus pusing dengan coding.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          <FeatureCard 
            icon={<BrainCircuit className="w-12 h-12" />}
            title="Belajar Tanpa Koding"
            description="Pelajari konsep programming dengan cara yang mudah dipahami tanpa harus menulis kode yang rumit."
            delay="0s"
          />
          
          <FeatureCard 
            icon={<Users className="w-12 h-12" />}
            title="Komunitas Supportif"
            description="Bergabunglah dengan komunitas programmer Indonesia yang siap membantu dan berbagi pengalaman."
            delay="0.2s"
          />
          
          <FeatureCard 
            icon={<FileCode className="w-12 h-12" />}
            title="Tutorial Interaktif"
            description="Akses tutorial interaktif yang membuat konsep pemrograman sulit menjadi mudah dipahami."
            delay="0.4s"
          />
        </div>
      </div>

      {/* Add some floating code elements as background decoration */}
      <div id="floating-elements" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic elements are added via JavaScript in useEffect */}
      </div>
      
      <style jsx>{`
        [data-feature-card].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CurhatSection;
