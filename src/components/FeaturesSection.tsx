import React from 'react';
import { BrainCircuit, Users, FileCode, Zap } from 'lucide-react';
import { CustomCard, CustomCardHeader, CustomCardContent } from './ui/custom-card';
import { useTheme } from '@/hooks/useTheme';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  color = "bg-skyblue/20 dark:bg-skyblue-dark/20" 
}) => {
  return (
    <CustomCard 
      variant="glass" 
      hoverEffect="scale" 
      animation="fade-in" 
      animationDelay={delay}
      className="group dark:border dark:border-gray-700/50 h-full flex flex-col"
    >
      <div className="flex justify-center mt-8 mb-6">
        <div className={`relative p-4 rounded-full ${color} transition-all duration-300 w-20 h-20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6`}>
          <div className="text-skyblue-dark dark:text-skyblue-light text-4xl">
            {icon}
          </div>
          <span className="absolute inset-0 rounded-full animate-pulse-ring border-2 border-skyblue dark:border-skyblue-light opacity-0 group-hover:opacity-100"></span>
        </div>
      </div>
      
      <CustomCardHeader className="text-center px-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-all duration-300 group-hover:text-skyblue-dark dark:group-hover:text-skyblue-light">
          {title}
        </h3>
      </CustomCardHeader>
      
      <CustomCardContent className="flex-grow px-6 pb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          {description}
        </p>
      </CustomCardContent>
    </CustomCard>
  );
};

const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white animate-fade-in-up text-gradient">
          Fitur Unggulan
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          IMPHNEN hadir dengan berbagai fitur untuk membantu kamu menjadi programmer handal tanpa harus pusing dengan coding.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
          <FeatureCard 
            icon={<BrainCircuit className="w-12 h-12" />}
            title="Belajar Tanpa Koding"
            description="Pelajari konsep programming dengan cara yang mudah dipahami tanpa harus menulis kode yang rumit."
            delay="0s"
            color="bg-purple-100 dark:bg-purple-900/30"
          />
          
          <FeatureCard 
            icon={<Users className="w-12 h-12" />}
            title="Komunitas Supportif"
            description="Bergabunglah dengan komunitas programmer Indonesia yang siap membantu dan berbagi pengalaman."
            delay="0.2s"
            color="bg-blue-100 dark:bg-blue-900/30"
          />
          
          <FeatureCard 
            icon={<FileCode className="w-12 h-12" />}
            title="Tutorial Interaktif"
            description="Akses tutorial interaktif yang membuat konsep pemrograman sulit menjadi mudah dipahami."
            delay="0.4s"
            color="bg-green-100 dark:bg-green-900/30"
          />

          <FeatureCard 
            icon={<Zap className="w-12 h-12" />}
            title="AI Learning Assistant"
            description="Asisten berbasis AI yang membantu proses belajar kamu dengan menjawab pertanyaan seputar pemrograman."
            delay="0.6s"
            color="bg-amber-100 dark:bg-amber-900/30"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
