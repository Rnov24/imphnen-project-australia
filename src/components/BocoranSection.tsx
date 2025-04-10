
import React from 'react';
import { MessageCircle, BarChart, MousePointer, Coffee, Mic } from 'lucide-react';

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  text: string;
  delay: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, text, delay }) => {
  return (
    <div 
      className="flex items-center bg-white rounded-xl shadow-md p-6 animate-fade-in-up hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <div className="bg-skyblue-light text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
        {number}
      </div>
      <div className="text-skyblue-dark text-2xl mr-4">{icon}</div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

const BocoranSection: React.FC = () => {
  return (
    <section id="bocoran-section" className="py-20 bg-gradient-to-b from-sky-50 to-blue-50 relative">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Rahasia Dapur IMPHNEN <span className="text-gray-600 text-xl">(Tenang, Gak Pake Pelet)</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 mt-12">
          <StepCard 
            number={1}
            icon={<MessageCircle />}
            text="Ngerumpiin Konsep 'Ajaib' Biar Nyambung."
            delay="0s"
          />
          
          <StepCard 
            number={2}
            icon={<BarChart />}
            text="Ngulik Studi Kasus Real, Tapi Versi Woles."
            delay="0.1s"
          />
          
          <StepCard 
            number={3}
            icon={<MousePointer />}
            text="Mainan Tools No-Code/Low-Code Biar Kebayang."
            delay="0.2s"
          />
          
          <StepCard 
            number={4}
            icon={<Coffee />}
            text="Sesi Curhat IT: Tanya Apa Aja Bebas!"
            delay="0.3s"
          />
        </div>
        
        <p className="text-center text-gray-500 italic mt-10">
          *Hasil mungkin beda-beda ya, tergantung tingkat kemageran akut masing-masing.
        </p>
      </div>
    </section>
  );
};

export default BocoranSection;
