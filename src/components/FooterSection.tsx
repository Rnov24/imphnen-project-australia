
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const programmingLanguages = ['PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'Node.js'];

  return (
    <footer className="py-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">IMPHNEN</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Komunitas programmer Indonesia yang bertujuan membantu semua orang belajar programming dengan cara yang menyenangkan.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/imphnen.dev/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://discord.gg/W4XyRAmPSD" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Fitur</a></li>
              <li><a href="#community" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Komunitas</a></li>
              <li><a href="#resources" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Sumber Belajar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Sumber Belajar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Video Tutorial</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Artikel</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Tantangan Koding</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors">Sharing Session</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Bahasa Pemrograman</h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map(lang => (
                <span 
                  key={lang} 
                  className="px-3 py-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 hover:bg-skyblue/20 hover:text-skyblue-dark dark:hover:bg-skyblue-dark/20 dark:hover:text-skyblue-light"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} IMPHNEN - Ingin Menjadi Programmer Handal, Namun Enggan Ngoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
