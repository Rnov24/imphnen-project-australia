
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Code, Sparkles, Facebook, ArrowRight } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import BackgroundSystem from './BackgroundSystem';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set loaded state after initial render
    setIsLoaded(true);
    
    // Animation for the hero appearing
    if (logoRef.current) {
      const logo = logoRef.current;
      logo.style.opacity = '1';
    }

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Auto-cycle through tags
    const interval = setInterval(() => {
      setActiveTagIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % tags.length;
      });
    }, 2000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tags = ['PHP', 'JS', 'Python', 'Go', 'Java', 'React', 'TypeScript'];

  return (
    <motion.section 
      ref={heroRef} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-32 overflow-hidden 
                bg-gradient-to-b from-blue-50 to-sky-100 dark:from-gray-900 dark:to-blue-950"
    >
      <BackgroundSystem type="auto" density="medium" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div 
          ref={logoRef} 
          className="flex justify-center mb-8 opacity-0 transition-all duration-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          initial={{ scale: 0.8, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2
          }}
        >
          <div className="relative">
            <motion.img 
              src="/imphnen.png" 
              alt="IMPHNEN Logo" 
              className="h-40 md:h-56 lg:h-72 object-contain filter drop-shadow-lg"
              animate={{
                scale: isHovering ? 1.1 : 1,
                rotate: isHovering ? [0, -5, 5, -5, 0] : 0
              }}
              transition={{
                scale: { duration: 0.3 },
                rotate: { duration: 0.5, repeat: isHovering ? Infinity : 0 }
              }}
            />
            <AnimatePresence>
              {isHovering && (
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="text-yellow-400 h-12 w-12 animate-spin-slow" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        <div className="space-y-2 mb-10">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Programmer ngoding?
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            mending scroll fesnuk.
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Siapkan penggorengan, Atmint.
          </motion.p>
        </div>
        
        {/* Programming Language Tags with hover effects */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag, index) => (
            <motion.span 
              key={tag}
              className={`px-4 py-2 rounded-full ${activeTagIndex === index ? 'bg-skyblue/20 text-skyblue-dark dark:bg-skyblue-dark/20 dark:text-skyblue-light' : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300'} 
                        text-sm font-medium shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg
                        hover:bg-skyblue/20 hover:text-skyblue-dark dark:hover:bg-skyblue-dark/20 dark:hover:text-skyblue-light`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: activeTagIndex === index ? 1.1 : 1 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
                y: { duration: 0.5, delay: 0.2 + index * 0.1 },
                scale: { duration: 0.3 }
              }}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setActiveTagIndex(index)}
              onMouseLeave={() => setActiveTagIndex(null)}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Updated CTA Button */}
        <motion.div 
          className="flex justify-center mt-4 mb-32" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="group bg-skyblue hover:bg-skyblue-dark dark:bg-skyblue-dark dark:hover:bg-skyblue text-white font-medium 
                     py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                     flex items-center gap-2"
              onClick={() => window.open("https://www.facebook.com/groups/programmerhandal", "_blank")}
            >
              <Facebook className="group-hover:rotate-12 transition-transform" size={20} />
              Mari scroll fesnuk
              <motion.div 
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator with animation */}
        <motion.div 
          className="absolute bottom-14 left-0 right-0 flex justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={scrollToNext}
        >
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll untuk melihat lebih banyak</span>
            <div className="p-2 rounded-full bg-skyblue/30 dark:bg-skyblue-dark/30 backdrop-blur-sm">
              <ArrowDown className="text-gray-600 dark:text-gray-400" size={20} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
