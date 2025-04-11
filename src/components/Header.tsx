
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageSquare, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <img src="/imphnen.png" alt="IMPHNEN Logo" className="h-10 w-auto animate-pulse-slow" />
            <span className="hidden sm:inline">IMPHNEN</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium">
            Features
          </a>
          <a href="#community" className="text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium">
            Community
          </a>
          <a href="#resources" className="text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium">
            Resources
          </a>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-300 dark:border-gray-700">
            <a href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/imphnen.dev/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://discord.gg/W4XyRAmPSD" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <MessageSquare size={20} />
            </a>

            <button 
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-gray-900 pt-20 px-4 transform transition-transform duration-300 ease-in-out md:hidden z-40",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#features" 
            className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full text-center py-3 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#community" 
            className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full text-center py-3 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </a>
          <a 
            href="#resources" 
            className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full text-center py-3 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </a>
          
          <div className="flex items-center space-x-6 w-full justify-center mt-4">
            <a href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 dark:text-blue-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/imphnen.dev/" target="_blank" rel="noopener noreferrer"
               className="text-pink-600 dark:text-pink-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://discord.gg/W4XyRAmPSD" target="_blank" rel="noopener noreferrer"
               className="text-indigo-600 dark:text-indigo-400 transition-colors">
              <MessageSquare size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
