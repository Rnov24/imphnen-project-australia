
import React, { useState } from 'react';
import { Facebook, Instagram, MessageSquare, ChevronUp, ExternalLink, Mail } from 'lucide-react';
import BackgroundSystem from './BackgroundSystem';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './ui/button';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  const programmingLanguages = ['PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'Node.js', 'TypeScript', 'Go'];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 relative">
      <BackgroundSystem type="auto" density="low" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white relative inline-block">
              IMPHNEN
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-skyblue dark:bg-skyblue-light transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Komunitas programmer Indonesia yang bertujuan membantu semua orang belajar programming dengan cara yang menyenangkan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/groups/programmerhandal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={() => setActiveTooltip('facebook')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="relative group">
                  <Facebook size={22} />
                  {activeTooltip === 'facebook' && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Facebook Group
                    </span>
                  )}
                </div>
              </a>
              <a 
                href="https://www.instagram.com/imphnen.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={() => setActiveTooltip('instagram')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="relative group">
                  <Instagram size={22} />
                  {activeTooltip === 'instagram' && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Instagram
                    </span>
                  )}
                </div>
              </a>
              <a 
                href="https://discord.gg/W4XyRAmPSD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={() => setActiveTooltip('discord')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="relative group">
                  <MessageSquare size={22} />
                  {activeTooltip === 'discord' && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Discord Server
                    </span>
                  )}
                </div>
              </a>
              <a 
                href="mailto:contact@imphnen.dev" 
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors hover:scale-110 transform duration-200"
                onMouseEnter={() => setActiveTooltip('email')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="relative group">
                  <Mail size={22} />
                  {activeTooltip === 'email' && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Email Us
                    </span>
                  )}
                </div>
              </a>
            </div>
          </div>
          
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Fitur</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Komunitas</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Sumber Belajar</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Sumber Belajar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Video Tutorial</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Artikel</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Tantangan Koding</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors link-underline flex items-center gap-1">
                  <span>Sharing Session</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Bahasa Pemrograman</h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map(lang => (
                <span 
                  key={lang} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 
                            hover:bg-skyblue/20 hover:text-skyblue-dark dark:hover:bg-skyblue-dark/20 dark:hover:text-skyblue-light hover:scale-105"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={scrollToTop}
            className="rounded-full bg-skyblue/10 dark:bg-skyblue-dark/10 text-skyblue-dark dark:text-skyblue-light p-3 hover:bg-skyblue/20 dark:hover:bg-skyblue-dark/20 transition-all duration-300 hover:scale-110"
            variant="ghost"
            size="icon"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} IMPHNEN - Ingin Menjadi Programmer Handal, Namun Enggan Ngoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
