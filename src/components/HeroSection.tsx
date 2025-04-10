
import React, { useEffect, useRef } from 'react';
import CloudBackground from './CloudBackground';
import FloatingCodeElements from './FloatingCode';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the logo appearing
    if (logoRef.current) {
      const logo = logoRef.current;
      logo.style.opacity = '1';
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('curhat-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-gradient-to-b from-blue-50 to-sky-100">
      <CloudBackground />
      <FloatingCodeElements />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div 
          ref={logoRef} 
          className="flex justify-center mb-10 opacity-0 transition-opacity duration-1000"
        >
          <img 
            src="https://raw.githubusercontent.com/mathwithcode/mathwithcode/master/docs/public/img/sponsors/imphnen.png" 
            alt="IMPHNEN Logo" 
            className="h-40 md:h-60 lg:h-80 object-contain animate-float"
          />
        </div>
        
        <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 animate-fade-in-up">
          Pengen Jago Ngoding Tapi Mager? Sama!
        </h3>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-700 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Woy! Selamat dateng di IMPHNEN. Komunitas buat lo yang cita-citanya setinggi Monas, tapi semangat geraknya sebatas guling.
        </p>
        
        <button 
          onClick={scrollToNext}
          className="btn-primary group"
        >
          Gimana Caranya? (Scroll Pelan-Pelan Aja)
          <ArrowDown className="ml-2 inline group-hover:animate-bounce-lazy" size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
