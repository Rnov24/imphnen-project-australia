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
  color?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  icon, title, description, buttonText, delay, className = '', color = 'from-blue-500/20 to-cyan-500/20 dark:from-blue-900/30 dark:to-cyan-800/30' 
}) => {
  return (
    <CustomCard
      variant="glass"
      hoverEffect="lift"
      animation="fade-in"
      animationDelay={delay}
      className={`group overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
      
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-skyblue dark:text-skyblue-light text-5xl flex justify-center mt-8 mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          <div className="p-4 rounded-full bg-white/50 dark:bg-gray-800/50 shadow-inner group-hover:shadow-md transition-all duration-300">
            {icon}
          </div>
        </div>
        
        <CustomCardHeader>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
            {title}
          </h3>
        </CustomCardHeader>
        
        <CustomCardContent>
          <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
            {description}
          </p>
        </CustomCardContent>
        
        <CustomCardFooter className="mb-4">
          <button className="flex items-center gap-1 px-4 py-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-blue-600 dark:text-blue-400 font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transform group-hover:scale-105 shadow-sm group-hover:shadow-md">
            {buttonText}
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </CustomCardFooter>
      </div>
    </CustomCard>
  );
};

const ResourcesSection: React.FC = () => {
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
            color="from-red-500/20 to-amber-500/20 dark:from-red-900/30 dark:to-amber-800/30"
          />
          
          <ResourceCard
            icon={<FileText className="w-12 h-12" />}
            title="Artikel & Tutorial"
            description="Pelajari konsep programming melalui artikel yang disusun secara terstruktur."
            buttonText="Baca Artikel"
            delay="0.2s"
            color="from-emerald-500/20 to-green-500/20 dark:from-emerald-900/30 dark:to-green-800/30"
          />
          
          <ResourceCard
            icon={<Code className="w-12 h-12" />}
            title="Tantangan Koding"
            description="Uji kemampuanmu dengan tantangan koding yang menyenangkan dan menantang."
            buttonText="Mulai Tantangan"
            delay="0.4s"
            color="from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-800/30"
          />
          
          <ResourceCard
            icon={<Users className="w-12 h-12" />}
            title="Sharing Session"
            description="Ikuti sesi sharing bersama programmer berpengalaman dan belajar dari mereka."
            buttonText="Jadwal Session"
            delay="0.6s"
            color="from-blue-500/20 to-cyan-500/20 dark:from-blue-900/30 dark:to-cyan-800/30"
          />

          <ResourceCard
            icon={<BookOpen className="w-12 h-12" />}
            title="E-Book Gratis"
            description="Unduh e-book programming gratis untuk dipelajari kapan saja dan di mana saja."
            buttonText="Download E-Book"
            delay="0.8s"
            color="from-amber-500/20 to-yellow-500/20 dark:from-amber-900/30 dark:to-yellow-800/30"
          />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
