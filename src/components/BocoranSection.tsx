
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

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
    <div 
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 animate-fade-in-up hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <div className={`text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-700 text-center mb-6">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`py-2 px-6 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg ${color}`}
      >
        {buttonText}
      </a>
    </div>
  );
};

const BocoranSection: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-sky-50 to-blue-50 relative">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Komunitas Kami
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700">
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

export default BocoranSection;
