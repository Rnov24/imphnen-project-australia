
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageSquare, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

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
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/imphnen.png" 
              alt="IMPHNEN Logo" 
              className="h-10 w-auto animate-pulse-slow transition-transform duration-300 hover:scale-110" 
            />
            <span className="hidden sm:inline bg-gradient-to-r from-skyblue to-purple-500 dark:from-skyblue-light dark:to-purple-400 bg-clip-text text-transparent font-display">
              IMPHNEN
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#features" 
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Features</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-skyblue dark:bg-skyblue-light transition-all duration-300 group-hover:w-full"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#community" 
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Community</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-skyblue dark:bg-skyblue-light transition-all duration-300 group-hover:w-full"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#resources" 
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Resources</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-skyblue dark:bg-skyblue-light transition-all duration-300 group-hover:w-full"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex items-center space-x-3 pl-4">
          <a 
            href="https://www.facebook.com/groups/programmerhandal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.instagram.com/imphnen.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://discord.gg/W4XyRAmPSD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
          >
            <MessageSquare size={20} />
          </a>

          <Button 
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="ml-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button
            variant="outline"
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm border-0 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg pt-20 px-4 transform transition-transform duration-500 ease-in-out md:hidden z-40",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#features" 
            className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full text-center py-3 border-b border-gray-100 dark:border-gray-800 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#community" 
            className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full text-center py-3 border-b border-gray-100 dark:border-gray-800 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </a>
          <a 
            href="#resources" 
            className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full text-center py-3 border-b border-gray-100 dark:border-gray-800 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </a>
          
          <div className="flex items-center space-x-6 w-full justify-center mt-4">
            <a 
              href="https://www.facebook.com/groups/programmerhandal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/imphnen.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 dark:text-pink-400 transition-all duration-300 transform hover:scale-125"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://discord.gg/W4XyRAmPSD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 transition-all duration-300 transform hover:scale-125"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
