
import React from 'react';
import { BrainCircuit, Users, FileCode } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center animate-fade-in-up card-hover"
      style={{ animationDelay: delay }}
    >
      <div className="flex justify-center mb-4">
        <div className="text-skyblue-dark text-4xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-lg text-gray-700 text-center">{description}</p>
    </div>
  );
};

const CurhatSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-sky-100 to-blue-100 relative overflow-hidden">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Fitur Unggulan
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700">
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
    </section>
  );
};

export default CurhatSection;
