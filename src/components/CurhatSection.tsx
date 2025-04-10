
import React from 'react';
import { BrainCircuit, Code, Calendar } from 'lucide-react';

const CurhatCard: React.FC<{
  icon: React.ReactNode;
  text: string;
  delay: string;
}> = ({ icon, text, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-8 max-w-sm animate-fade-in-up card-hover"
      style={{ animationDelay: delay }}
    >
      <div className="flex justify-center mb-4">
        <div className="text-skyblue-dark text-4xl">
          {icon}
        </div>
      </div>
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
};

const CurhatSection: React.FC = () => {
  const handleCodeClick = () => {
    const codeElement = document.getElementById('scary-code');
    if (codeElement) {
      codeElement.classList.add('animate-wiggle');
      setTimeout(() => {
        codeElement.style.opacity = '0';
        codeElement.style.transform = 'scale(0.5) rotate(10deg)';
        
        // Add confetti effect
        for (let i = 0; i < 30; i++) {
          createConfetti();
        }
      }, 500);
    }
  };

  const createConfetti = () => {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;
    
    const confetti = document.createElement('div');
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    
    confetti.className = `absolute ${colors[Math.floor(Math.random() * colors.length)]} rounded-sm`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.top = '50%';
    confetti.style.left = '50%';
    confetti.style.transform = 'translate(-50%, -50%)';
    confetti.style.opacity = '1';
    
    // Random position and animation
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const duration = Math.random() * 2 + 1;
    
    confetti.animate([
      { transform: 'translate(-50%, -50%) rotate(0deg)', opacity: 1 },
      { 
        transform: `translate(
          calc(-50% + ${Math.cos(angle) * distance}px), 
          calc(-50% + ${Math.sin(angle) * distance}px)
        ) rotate(${Math.random() * 360}deg)`, 
        opacity: 0 
      }
    ], {
      duration: duration * 1000,
      easing: 'cubic-bezier(.05, .91, .2, .96)',
      fill: 'forwards'
    });
    
    confettiContainer.appendChild(confetti);
    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  };

  return (
    <section id="curhat-section" className="py-20 bg-gradient-to-b from-sky-100 to-blue-100 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex justify-center mb-12">
          <img 
            src="https://raw.githubusercontent.com/mathwithcode/mathwithcode/master/docs/public/img/sponsors/imphnen.png" 
            alt="IMPHNEN Logo" 
            className="h-32 md:h-48 lg:h-64 animate-float object-contain"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Lihat Titik Koma Auto Puyeng? Tos Dulu!
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch flex-wrap mb-16">
          <CurhatCard 
            icon={<BrainCircuit className="w-12 h-12" />}
            text="Udah nonton tutorial berjam-jam, eh... pahamnya mentok di 'Hello World'. Klasik!"
            delay="0s"
          />
          
          <CurhatCard 
            icon={<Code className="w-12 h-12" />}
            text="Error mulu? Debugging bikin darah tinggi? Wajar, bro/sis."
            delay="0.2s"
          />
          
          <CurhatCard 
            icon={<Calendar className="w-12 h-12" />}
            text="Niat sih ngumpul, tapi badan maunya rebahan terus? Welcome to the club!"
            delay="0.4s"
          />
        </div>
        
        <div className="flex justify-center items-center mt-12">
          <div 
            id="scary-code" 
            onClick={handleCodeClick}
            className="font-mono bg-gray-800 text-white px-8 py-4 rounded-lg cursor-pointer transition-all duration-500 hover:shadow-xl"
          >
            <code>if(err){'{'} console.log(&apos;MAMPUS&apos;); {'}'}</code>
          </div>
          <div id="confetti-container" className="absolute pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default CurhatSection;
