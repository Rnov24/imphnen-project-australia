
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const programmingLanguages = ['PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'Node.js'];

  return (
    <footer className="py-12 bg-gradient-to-b from-sky-100 to-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">IMPHNEN</h3>
            <p className="text-gray-600 mb-4">
              Komunitas programmer Indonesia yang bertujuan membantu semua orang belajar programming dengan cara yang menyenangkan.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/imphnen.dev/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://discord.gg/W4XyRAmPSD" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-indigo-600 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-skyblue-dark transition-colors">Fitur</a></li>
              <li><a href="#community" className="text-gray-600 hover:text-skyblue-dark transition-colors">Komunitas</a></li>
              <li><a href="#resources" className="text-gray-600 hover:text-skyblue-dark transition-colors">Sumber Belajar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Sumber Belajar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-skyblue-dark transition-colors">Video Tutorial</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skyblue-dark transition-colors">Artikel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skyblue-dark transition-colors">Tantangan Koding</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skyblue-dark transition-colors">Sharing Session</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Bahasa Pemrograman</h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map(lang => (
                <span key={lang} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600">
            © {currentYear} IMPHNEN - Ingin Menjadi Programmer Handal, Namun Enggan Ngoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
