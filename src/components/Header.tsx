import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, MessageSquare, Menu, X, Sun, Moon, ChevronDown, Search, ArrowRight } from 'lucide-react';
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
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Calculate scroll progress for progress bar
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Update active section based on scroll position
      const sections = ['features', 'community', 'resources'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header 
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800" 
          : "bg-transparent"
      )}
    >
      {/* Scroll Progress Indicator */}
      <div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-skyblue via-purple-500 to-pink-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#" 
            className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 transition-transform duration-300"
          >
            <motion.img 
              src="/imphnen.png" 
              alt="IMPHNEN Logo" 
              className="h-10 w-auto transition-transform duration-300" 
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <span className="hidden sm:inline bg-gradient-to-r from-skyblue to-purple-500 dark:from-skyblue-light dark:to-purple-400 bg-clip-text text-transparent font-display">
              IMPHNEN
            </span>
          </a>
        </motion.div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={cn(
                  "px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium",
                  activeSection === 'features' && "text-skyblue-dark dark:text-skyblue-light"
                )}
              >
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[400px] p-4 grid grid-cols-2 gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-xl"
                >
                  <div className="col-span-2 mb-2">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-skyblue to-purple-500 bg-clip-text text-transparent">Explore Features</h3>
                  </div>
                  
                  {[
                    { title: 'Curhat', description: 'Share your experiences', icon: MessageSquare },
                    { title: 'Solusi', description: 'Find solutions together', icon: ArrowRight },
                    { title: 'Bocoran', description: 'Insider tips and tricks', icon: Search },
                    { title: 'Gabung', description: 'Join our community', icon: Facebook }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={`#${item.title.toLowerCase()}`}
                      className="flex items-start p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="mr-2 text-skyblue dark:text-skyblue-light mt-0.5">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#community" 
                className={cn(
                  "px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium relative overflow-hidden group",
                  activeSection === 'community' && "text-skyblue-dark dark:text-skyblue-light"
                )}
              >
                <span className="relative z-10">Community</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-1 bg-skyblue dark:bg-skyblue-light"
                  initial={{ width: activeSection === 'community' ? '100%' : '0%' }}
                  animate={{ width: activeSection === 'community' ? '100%' : '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#resources" 
                className={cn(
                  "px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-colors font-medium relative overflow-hidden group",
                  activeSection === 'resources' && "text-skyblue-dark dark:text-skyblue-light"
                )}
              >
                <span className="relative z-10">Resources</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-1 bg-skyblue dark:bg-skyblue-light"
                  initial={{ width: activeSection === 'resources' ? '100%' : '0%' }}
                  animate={{ width: activeSection === 'resources' ? '100%' : '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex items-center space-x-3 pl-4">
          <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-skyblue dark:hover:text-skyblue-light rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
            <Search size={18} />
          </button>
          
          <motion.a 
            href="https://www.facebook.com/groups/programmerhandal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={20} />
          </motion.a>
          
          <motion.a 
            href="https://www.instagram.com/imphnen.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} />
          </motion.a>
          
          <motion.a 
            href="https://discord.gg/W4XyRAmPSD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare size={20} />
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="ml-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button 
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </motion.div>
          
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm border-0 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 300, backdropFilter: 'blur(0px)' }}
            animate={{ 
              opacity: 1, 
              x: 0,
              backdropFilter: 'blur(10px)',
              transition: { duration: 0.3, staggerChildren: 0.1 }
            }}
            exit={{ 
              opacity: 0, 
              x: 300,
              backdropFilter: 'blur(0px)',
              transition: { duration: 0.3 }
            }}
            className="fixed inset-0 bg-white/90 dark:bg-gray-900/90 pt-20 px-6 md:hidden z-40"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-skyblue via-purple-500 to-pink-500" />
            
            <div className="mb-8 flex items-center justify-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-skyblue dark:focus:ring-skyblue-light"
                />
                <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            
            <nav className="flex flex-col space-y-1">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Community', href: '#community' },
                { name: 'Resources', href: '#resources' }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href} 
                  className="text-gray-800 dark:text-gray-200 text-xl font-medium w-full rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-skyblue-dark dark:hover:text-skyblue-light transition-all duration-300 flex justify-between items-center"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <ArrowRight size={16} className="text-gray-500 dark:text-gray-400" />
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-10 left-0 w-full px-6">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-skyblue to-purple-500 bg-clip-text text-transparent">Connect with us</h3>
                <div className="flex items-center justify-between">
                  <motion.a 
                    href="https://www.facebook.com/groups/programmerhandal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 shadow-md transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <Facebook size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/imphnen.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full text-pink-600 dark:text-pink-400 shadow-md transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <Instagram size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://discord.gg/W4XyRAmPSD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full text-indigo-600 dark:text-indigo-400 shadow-md transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <MessageSquare size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
