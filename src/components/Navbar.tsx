import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, MessageSquare, Lightbulb, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './ui/button';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label, onClick }) => {
  return (
    <motion.a
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-skyblue dark:hover:text-skyblue-light transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: '#home', icon: <Home size={18} />, label: 'Home' },
    { href: '#curhat', icon: <MessageSquare size={18} />, label: 'Curhat' },
    { href: '#solusi', icon: <Lightbulb size={18} />, label: 'Solusi' },
    { href: '#gabung', icon: <Users size={18} />, label: 'Gabung' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/imphnen.png" alt="IMPHNEN" className="h-10 w-auto" />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-700 dark:text-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col space-y-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}

            {/* Theme Toggle in Mobile Menu */}
            <div className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="flex items-center gap-2 w-full justify-start px-0 hover:bg-transparent"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
