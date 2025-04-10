
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Headphones } from 'lucide-react';

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  color: string;
  hoverEffect: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, link, color, hoverEffect }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center gap-3 py-4 px-6 rounded-lg shadow-md text-white font-medium transition-all duration-300 ${color} ${hoverEffect}`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

const GabungSection: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const targetCounter = 13456;

  useEffect(() => {
    // Animate counter
    if (counter < targetCounter) {
      const timeout = setTimeout(() => {
        setCounter(prev => {
          const increment = Math.max(1, Math.floor((targetCounter - prev) / 20));
          return Math.min(prev + increment, targetCounter);
        });
      }, 20);
      
      return () => clearTimeout(timeout);
    }
  }, [counter]);

  return (
    <section id="gabung-section" className="py-20 bg-gradient-to-b from-blue-50 to-sky-100 relative">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Yuk, Jadi Programmer Kece (Tanpa Beranjak dari Kasur)!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <SocialButton 
            icon={<Facebook />}
            text="Join Grup FB (Markas Gibah Kode)"
            link="#"
            color="bg-blue-600"
            hoverEffect="hover:-translate-y-1 hover:shadow-lg"
          />
          
          <SocialButton 
            icon={<Instagram />}
            text="Kepoin IG Kita (Isinya Meme & Tips Santuy)"
            link="#"
            color="bg-gradient-to-r from-purple-600 to-pink-500"
            hoverEffect="hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 hover:-translate-y-1 hover:shadow-lg"
          />
          
          <SocialButton 
            icon={<Headphones />}
            text="Nongki di Discord (Ramein Biar Gak Ngoding Sendiri Mulu)"
            link="#"
            color="bg-indigo-600"
            hoverEffect="hover:-translate-y-1 hover:shadow-lg"
          />
        </div>
        
        <div className="text-center animate-fade-in-up">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-2xl font-bold text-skyblue-dark">{counter.toLocaleString('id-ID')}+</span>
            <span className="ml-2 text-gray-700">Jiwa Mager Tapi Cerdas Udah Ngumpul!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabungSection;
