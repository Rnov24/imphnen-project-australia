
import React from 'react';
import { VideoIcon, FileText, Code, Users } from 'lucide-react';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, buttonText, delay }) => {
  return (
    <div 
      className="card-feature group relative flex flex-col items-center text-center animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="text-skyblue text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <button className="text-skyblue-dark font-medium hover:underline transition-all">
        {buttonText}
      </button>
    </div>
  );
};

const SolusiSection: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-blue-100 to-sky-50 relative">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Sumber Belajar
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-gray-700">
          Akses berbagai materi belajar yang akan membantu kamu menguasai konsep programming dengan cara yang menyenangkan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ResourceCard
            icon={<VideoIcon />}
            title="Video Tutorial"
            description="Belajar melalui tutorial video langkah demi langkah yang mudah diikuti."
            buttonText="Lihat Semua Video"
            delay="0s"
          />
          
          <ResourceCard
            icon={<FileText />}
            title="Artikel & Tutorial"
            description="Pelajari konsep programming melalui artikel yang disusun secara terstruktur."
            buttonText="Baca Artikel"
            delay="0.2s"
          />
          
          <ResourceCard
            icon={<Code />}
            title="Tantangan Koding"
            description="Uji kemampuanmu dengan tantangan koding yang menyenangkan dan menantang."
            buttonText="Mulai Tantangan"
            delay="0.4s"
          />
          
          <ResourceCard
            icon={<Users />}
            title="Sharing Session"
            description="Ikuti sesi sharing bersama programmer berpengalaman dan belajar dari pengalaman mereka."
            buttonText="Jadwal Session"
            delay="0.6s"
          />
        </div>
      </div>
    </section>
  );
};

export default SolusiSection;
