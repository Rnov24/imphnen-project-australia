import React from 'react';
import { Facebook, Instagram, MessageCircle, Github, Youtube } from 'lucide-react';
import { CustomCard, CustomCardHeader, CustomCardContent, CustomCardFooter } from './ui/custom-card';
import { useTheme } from '@/hooks/useTheme';

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  color: string;
  hoverColor: string;
  bgColor: string;
  delay: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ 
  icon, title, description, buttonText, link, color, hoverColor, bgColor, delay 
}) => {
  return (
    <CustomCard
      variant="glass"
      hoverEffect="glow"
      animation="fade-in"
      animationDelay={delay}
      className="group dark:border dark:border-gray-700/50 h-full flex flex-col"
    >
      <div className="flex justify-center mt-8">
        <div className={`text-white rounded-full w-20 h-20 flex items-center justify-center mb-6 ${bgColor} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}>
          {icon}
        </div>
      </div>
      
      <CustomCardHeader className="text-center px-6">
        <h3 className={`text-xl font-bold transition-all duration-300 ${color} group-hover:${hoverColor}`}>
          {title}
        </h3>
      </CustomCardHeader>
      
      <CustomCardContent className="flex-grow px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </CustomCardContent>
      
      <CustomCardFooter className="flex justify-center pb-8 pt-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`py-2 px-6 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg ${bgColor} hover:brightness-110 transform group-hover:scale-105 flex items-center gap-2`}
        >
          {icon}
          <span>{buttonText}</span>
        </a>
      </CustomCardFooter>
    </CustomCard>
  );
};

const CommunitySection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Komunitas Kami
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          Bergabunglah dengan ribuan programmer Indonesia yang saling membantu dan berbagi pengetahuan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <CommunityCard 
            icon={<Facebook size={24} />}
            title="Facebook"
            description="Bergabunglah dengan grup Facebook kami untuk tanya jawab dan sharing pengetahuan."
            buttonText="Gabung"
            link="https://www.facebook.com/groups/programmerhandal"
            color="text-blue-600 dark:text-blue-400"
            hoverColor="text-blue-700 dark:text-blue-300"
            bgColor="bg-blue-600 hover:bg-blue-700"
            delay="0s"
          />
          
          <CommunityCard 
            icon={<Instagram size={24} />}
            title="Instagram"
            description="Ikuti kami di Instagram untuk tips programming dan info event terbaru."
            buttonText="Follow"
            link="https://www.instagram.com/imphnen.dev/"
            color="text-pink-600 dark:text-pink-400"
            hoverColor="text-pink-700 dark:text-pink-300"
            bgColor="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            delay="0.2s"
          />
          
          <CommunityCard 
            icon={<MessageCircle size={24} />}
            title="Discord"
            description="Diskusi realtime dengan sesama programmer dan bantuan langsung."
            buttonText="Join"
            link="https://discord.gg/W4XyRAmPSD"
            color="text-indigo-600 dark:text-indigo-400"
            hoverColor="text-indigo-700 dark:text-indigo-300"
            bgColor="bg-indigo-600 hover:bg-indigo-700"
            delay="0.4s"
          />

          <CommunityCard 
            icon={<Github size={24} />}
            title="GitHub"
            description="Kontribusi di proyek open source dan lihat kode sumber project kami."
            buttonText="Follow"
            link="https://github.com/imphnen"
            color="text-gray-800 dark:text-gray-300"
            hoverColor="text-gray-900 dark:text-gray-100"
            bgColor="bg-gray-800 hover:bg-gray-900"
            delay="0.6s"
          />

          <CommunityCard 
            icon={<Youtube size={24} />}
            title="YouTube"
            description="Tonton tutorial video dan live coding session dari tim kami."
            buttonText="Subscribe"
            link="https://youtube.com/c/imphnen"
            color="text-red-600 dark:text-red-400"
            hoverColor="text-red-700 dark:text-red-300"
            bgColor="bg-red-600 hover:bg-red-700"
            delay="0.8s"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
