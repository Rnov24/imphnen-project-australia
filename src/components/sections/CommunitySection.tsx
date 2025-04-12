
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { CustomCard, CustomCardHeader, CustomCardContent, CustomCardFooter } from '../ui/custom-card';

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  color: string;
  delay: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ 
  icon, title, description, buttonText, link, color, delay 
}) => {
  return (
    <CustomCard
      variant="glass"
      hoverEffect="glow"
      animation="fade-in"
      animationDelay={delay}
      className="group dark:border dark:border-gray-700/50"
    >
      <div className="flex justify-center mt-6">
        <div className={`text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 ${color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
          {icon}
        </div>
      </div>
      
      <CustomCardHeader>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-all duration-300 group-hover:text-skyblue-dark dark:group-hover:text-skyblue-light">
          {title}
        </h3>
      </CustomCardHeader>
      
      <CustomCardContent>
        <p className="text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </CustomCardContent>
      
      <CustomCardFooter className="mb-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`py-2 px-6 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg ${color} transform group-hover:scale-105`}
        >
          {buttonText}
        </a>
      </CustomCardFooter>
    </CustomCard>
  );
};

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-transparent relative">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Komunitas Kami
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          Bergabunglah dengan ribuan programmer Indonesia yang saling membantu dan berbagi pengetahuan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CommunityCard 
            icon={<Facebook size={32} />}
            title="Facebook Group"
            description="Bergabunglah dengan grup Facebook kami untuk tanya jawab, sharing ide, dan artikel menarik."
            buttonText="Gabung Sekarang"
            link="https://www.facebook.com/groups/programmerhandal"
            color="bg-blue-600 hover:bg-blue-700"
            delay="0s"
          />
          
          <CommunityCard 
            icon={<Instagram size={32} />}
            title="Instagram"
            description="Ikuti kami di Instagram untuk tips programming, quotes inspiratif, dan info event terbaru."
            buttonText="Follow Kami"
            link="https://www.instagram.com/imphnen.dev/"
            color="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            delay="0.2s"
          />
          
          <CommunityCard 
            icon={<MessageCircle size={32} />}
            title="Discord Server"
            description="Diskusi realtime dengan sesama programmer dan dapatkan bantuan langsung dari para ahli."
            buttonText="Join Server"
            link="https://discord.gg/W4XyRAmPSD"
            color="bg-indigo-600 hover:bg-indigo-700"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
