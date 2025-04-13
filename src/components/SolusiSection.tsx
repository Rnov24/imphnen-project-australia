
import React from 'react';
import { VideoIcon, FileText, Code, Users, BookOpen, ChevronRight } from 'lucide-react';
import { CustomCard, CustomCardHeader, CustomCardContent, CustomCardFooter } from './ui/custom-card';
import { useTheme } from '@/hooks/useTheme';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: string;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  icon, title, description, buttonText, delay, className = '' 
}) => {
  return (
    <CustomCard
      variant="glass"
      hoverEffect="lift"
      animation="fade-in"
      animationDelay={delay}
      className={`group ${className}`}
    >
      <div className="text-skyblue dark:text-skyblue-light text-5xl flex justify-center mt-6 mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <CustomCardHeader>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-skyblue-dark dark:group-hover:text-skyblue-light transition-all duration-300">
          {title}
        </h3>
      </CustomCardHeader>
      
      <CustomCardContent>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </CustomCardContent>
      
      <CustomCardFooter className="mb-4">
        <button className="flex items-center gap-1 text-skyblue-dark dark:text-skyblue-light font-medium hover:underline transition-all duration-300 group-hover:scale-105">
          {buttonText}
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </CustomCardFooter>
    </CustomCard>
  );
};

const SolusiSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="resources" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Sumber Belajar
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          Akses berbagai materi belajar yang akan membantu kamu menguasai konsep programming dengan cara yang menyenangkan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          <ResourceCard
            icon={<VideoIcon className="w-12 h-12" />}
            title="Video Tutorial"
            description="Belajar melalui tutorial video langkah demi langkah yang mudah diikuti."
            buttonText="Lihat Semua Video"
            delay="0s"
          />
          
          <ResourceCard
            icon={<FileText className="w-12 h-12" />}
            title="Artikel & Tutorial"
            description="Pelajari konsep programming melalui artikel yang disusun secara terstruktur."
            buttonText="Baca Artikel"
            delay="0.2s"
          />
          
          <ResourceCard
            icon={<Code className="w-12 h-12" />}
            title="Tantangan Koding"
            description="Uji kemampuanmu dengan tantangan koding yang menyenangkan dan menantang."
            buttonText="Mulai Tantangan"
            delay="0.4s"
          />
          
          <ResourceCard
            icon={<Users className="w-12 h-12" />}
            title="Sharing Session"
            description="Ikuti sesi sharing bersama programmer berpengalaman dan belajar dari mereka."
            buttonText="Jadwal Session"
            delay="0.6s"
          />

          <ResourceCard
            icon={<BookOpen className="w-12 h-12" />}
            title="E-Book Gratis"
            description="Unduh e-book programming gratis untuk dipelajari kapan saja dan di mana saja."
            buttonText="Download E-Book"
            delay="0.8s"
          />
        </div>
      </div>
    </section>
  );
};

export default SolusiSection;
