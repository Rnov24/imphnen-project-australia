
import React from 'react';
import { Facebook, MessageSquare } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, delay }) => {
  return (
    <div 
      className="bg-white/70 dark:bg-gray-800/70 dark:border dark:border-gray-700/50 rounded-lg shadow-md p-6 backdrop-blur-sm animate-fade-in-up hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{quote}"</p>
      <div className="flex flex-col">
        <span className="font-bold text-gray-800 dark:text-white">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{role}</span>
      </div>
    </div>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  color: string;
  hoverEffect: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, link, color, hoverEffect }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center gap-3 py-4 px-6 rounded-lg shadow-md text-white font-medium transition-all duration-300 ${color} ${hoverEffect}`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

const JoinSection: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Testimoni Member
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          Apa kata mereka yang telah bergabung dengan komunitas IMPHNEN?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          <Testimonial 
            quote="Saya yang tadinya tidak mengerti apa-apa tentang programming, sekarang bisa memahami konsep dasar dengan mudah. Terima kasih IMPHNEN!"
            name="Budi Santoso"
            role="Web Developer Pemula"
            delay="0s"
          />
          
          <Testimonial 
            quote="Komunitas yang sangat supportif! Setiap pertanyaan selalu dijawab dengan cepat dan jelas. Metode penjelasannya mudah dipahami."
            name="Anisa Rahma"
            role="Mahasiswa Informatika"
            delay="0.2s"
          />
          
          <Testimonial 
            quote="Server Discord IMPHNEN adalah tempat belajar terbaik untuk programmer pemula seperti saya. Materinya lengkap dan komunitas sangat membantu."
            name="Dodi Permana"
            role="Front-end Developer"
            delay="0.4s"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Siap Menjadi Programmer Handal?
        </h2>
        
        <p className="text-xl text-center mb-10 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          Bergabunglah dengan komunitas IMPHNEN sekarang dan mulai perjalanan programming-mu dengan cara yang menyenangkan!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto mb-12">
          <SocialButton 
            icon={<MessageSquare />}
            text="Gabung Discord"
            link="https://discord.gg/W4XyRAmPSD"
            color="bg-indigo-600"
            hoverEffect="hover:-translate-y-1 hover:shadow-lg"
          />
          
          <SocialButton 
            icon={<Facebook />}
            text="Join Facebook Group"
            link="https://www.facebook.com/groups/programmerhandal"
            color="bg-blue-600"
            hoverEffect="hover:-translate-y-1 hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
