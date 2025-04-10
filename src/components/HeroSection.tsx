
import React, { useEffect, useRef } from 'react';
import CloudBackground from './CloudBackground';
import FloatingCodeElements from './FloatingCode';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const fullNameRef = useRef<HTMLHeadingElement>(null);
  const acronymRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Simple animation for the name appearing letter by letter
    if (fullNameRef.current && acronymRef.current) {
      const fullName = fullNameRef.current;
      const acronym = acronymRef.current;

      fullName.style.opacity = '1';
      setTimeout(() => {
        acronym.style.opacity = '1';
        acronym.classList.add('animate-bounce-lazy');
      }, 2000);
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
        <h2 
          ref={fullNameRef} 
          className="text-lg md:text-xl mb-4 opacity-0 transition-opacity duration-1000 font-display text-gray-700"
        >
          Ingin Menjadi Programmer Handal Namun Enggan Ngoding
        </h2>
        
        <h1 
          ref={acronymRef} 
          className="text-5xl md:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-1000 text-gradient"
        >
          IMPHNEN
        </h1>
        
        <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 animate-fade-in-up">
          Pengen Jago Ngoding Tapi Mager? Sama!
        </h3>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-700 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Woy! Selamat dateng di IMPHNEN. Komunitas buat lo yang cita-citanya setinggi Monas, tapi semangat geraknya sebatas guling.
        </p>
        
        <div className="relative">
          <div className="inline-block animate-float cursor-pointer mb-10">
            <img 
              src="https://cdn3d.iconscout.com/3d/premium/thumb/lazy-sloth-5577199-4663948.png" 
              alt="Sloth programmer" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
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
