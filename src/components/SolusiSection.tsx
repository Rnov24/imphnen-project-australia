
import React from 'react';
import { Brain, Puzzle, Users, Gamepad } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tooltip: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tooltip, delay }) => {
  return (
    <div 
      className="card-feature group relative flex flex-col items-center text-center animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="text-skyblue text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-skyblue-dark text-white p-3 rounded-lg -top-12 text-sm max-w-xs">
        {tooltip}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-skyblue-dark rotate-45"></div>
      </div>
    </div>
  );
};

const SolusiSection: React.FC = () => {
  return (
    <section id="solusi-section" className="py-20 bg-gradient-to-b from-blue-100 to-sky-50 relative">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          IMPHNEN: Belajar Ngoding Nggak Pake Ngoding? Seriusan?!
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-gray-700">
          Santai, di IMPHNEN kita percaya jadi jagoan IT itu intinya di LOGIKA & KONSEP. 
          Ngetiknya ntar dulu, lah. Kita oprek caranya biar asik, tanpa pusing mikirin titik koma.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon={<Brain />}
            title="Pahamin Intinya, Gak Perlu Nangis Liat Kode"
            description="Fokus ke logika pemrograman dengan cara yang santai dan gak bikin pusing."
            tooltip="Fokus mikir solusinya, bukan pusing sama titik koma."
            delay="0s"
          />
          
          <FeatureCard
            icon={<Users />}
            title="Komunitas Anti Baper, Anti Sok Jago"
            description="Gabung bareng orang-orang yang sama-sama santuy tapi pengen jago ngoding."
            tooltip="Nggak ada suhu, semua levelnya sama: level mager pengen pinter."
            delay="0.2s"
          />
          
          <FeatureCard
            icon={<Gamepad />}
            title="Belajar Sambil Main? Bisa Banget!"
            description="Metode belajar yang seru dan gak monoton, dengan pendekatan yang gak ngebosenin."
            tooltip="Diskusi, bedah kasus, main logika bareng. Biar gak ngantuk!"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default SolusiSection;
