
import React, { useEffect, useRef } from 'react';
import { BrainCircuit, Users, FileCode, Code, BrainCog, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
      className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-xl shadow-md dark:shadow-lg dark:shadow-blue-900/20 p-8 flex flex-col items-center transform transition-all duration-500 opacity-0 translate-y-8 card-hover"
      style={{ animationDelay: delay }}
      data-feature-card
    >
      <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-125 hover:rotate-6">
        <div className="text-skyblue-dark dark:text-skyblue-light text-4xl animate-pulse-ring">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
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
    
    // Let's create some floating code elements as background decoration
    const floatingElementsContainer = document.getElementById('floating-elements');
    if (floatingElementsContainer) {
      const codeElements = ['<div>', '</div>', '<span>', '</span>', 'const', 'let', 'function()', 'return', 'async', '{ }', '[ ]', 'import'];
      
      codeElements.forEach((element) => {
        const codeEl = document.createElement('div');
        codeEl.className = 'absolute text-blue-200 dark:text-blue-300 opacity-20 text-xl font-mono animate-float';
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white animate-fade-in-up">
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
        <div className="absolute top-1/4 left-1/5 text-blue-200 dark:text-blue-300 opacity-20 text-xl font-mono animate-float">
          &lt;div&gt;
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-blue-200 dark:text-blue-300 opacity-20 text-xl font-mono animate-float" style={{ animationDelay: '1s' }}>
          &lt;/&gt;
        </div>
        <div className="absolute top-1/2 right-1/5 text-blue-200 dark:text-blue-300 opacity-20 text-xl font-mono animate-float" style={{ animationDelay: '2s' }}>
          const code = true;
        </div>
        
        {/* Add some SVG particles that float in the background */}
        <div className="absolute h-full w-full">
          <svg className="absolute top-1/4 left-1/3 text-blue-200 dark:text-blue-300 opacity-10 w-12 h-12 animate-spin-slow" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M12 2L12 6" stroke="currentColor" strokeWidth="1" />
            <path d="M12 18L12 22" stroke="currentColor" strokeWidth="1" />
            <path d="M2 12L6 12" stroke="currentColor" strokeWidth="1" />
            <path d="M18 12L22 12" stroke="currentColor" strokeWidth="1" />
          </svg>
          
          <svg className="absolute bottom-1/4 right-1/3 text-blue-200 dark:text-blue-300 opacity-10 w-10 h-10 animate-blob" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

// Add this style to the index.css file to support the animations
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    [data-feature-card].is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
});

export default CurhatSection;
