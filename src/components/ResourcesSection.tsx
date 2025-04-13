import React, { useState } from 'react';
import { VideoIcon, FileText, Code, Users, BookOpen, ChevronRight } from 'lucide-react';
import { CustomCard, CustomCardHeader, CustomCardContent, CustomCardFooter } from './ui/custom-card';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: string;
  className?: string;
  color?: string;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  icon, title, description, buttonText, delay, className = '', color = 'from-blue-500/20 to-cyan-500/20 dark:from-blue-900/30 dark:to-cyan-800/30', index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <CustomCard
        variant="glass"
        hoverEffect="lift"
        className={`group overflow-hidden ${className}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
        
        <motion.div 
          className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-2xl"
          animate={{
            scale: isHovered ? 1.25 : 1,
            opacity: isHovered ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.5 }}
          style={{ 
            background: `radial-gradient(circle, ${isHovered ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.2)'} 0%, rgba(49, 46, 129, 0.1) 70%)` 
          }}
        />
        
        <div className="relative z-10">
          <motion.div 
            className="text-skyblue dark:text-skyblue-light text-5xl flex justify-center mt-8 mb-4 transform transition-all duration-500"
            animate={{
              rotate: isHovered ? 6 : 0,
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -5 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div className="p-4 rounded-full bg-white/50 dark:bg-gray-800/50 shadow-inner group-hover:shadow-md transition-all duration-300">
              {icon}
            </div>
          </motion.div>
          
          <CustomCardHeader>
            <motion.h3 
              className="text-xl font-bold text-gray-800 dark:text-white transition-all duration-300"
              animate={{
                color: isHovered ? 'rgb(2, 132, 199)' : '',
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </CustomCardHeader>
          
          <CustomCardContent>
            <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              {description}
            </p>
          </CustomCardContent>
          
          <CustomCardFooter className="mb-4">
            <motion.button 
              className="flex items-center gap-1 px-4 py-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-blue-600 dark:text-blue-400 font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 shadow-sm group-hover:shadow-md"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
              <motion.div
                animate={{
                  x: isHovered ? [0, 5, 0] : 0
                }}
                transition={{
                  repeat: isHovered ? Infinity : 0,
                  duration: 1
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </CustomCardFooter>
        </div>
      </CustomCard>
    </motion.div>
  );
};

const ResourcesSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <motion.section 
      id="resources" 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background decorations */}
      <motion.div 
        className="absolute left-0 top-10 w-72 h-72 bg-gradient-to-br from-skyblue/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute right-0 bottom-10 w-96 h-96 bg-gradient-to-tr from-amber-500/5 to-pink-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Sumber Belajar
          </h2>
          
          <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
            Akses berbagai materi belajar yang akan membantu kamu menguasai konsep programming dengan cara yang menyenangkan.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          <ResourceCard
            icon={<VideoIcon className="w-12 h-12" />}
            title="Video Tutorial"
            description="Belajar melalui tutorial video langkah demi langkah yang mudah diikuti."
            buttonText="Lihat Semua Video"
            delay="0s"
            color="from-red-500/20 to-amber-500/20 dark:from-red-900/30 dark:to-amber-800/30"
            index={0}
          />
          
          <ResourceCard
            icon={<FileText className="w-12 h-12" />}
            title="Artikel & Tutorial"
            description="Pelajari konsep programming melalui artikel yang disusun secara terstruktur."
            buttonText="Baca Artikel"
            delay="0.2s"
            color="from-emerald-500/20 to-green-500/20 dark:from-emerald-900/30 dark:to-green-800/30"
            index={1}
          />
          
          <ResourceCard
            icon={<Code className="w-12 h-12" />}
            title="Tantangan Koding"
            description="Uji kemampuanmu dengan tantangan koding yang menyenangkan dan menantang."
            buttonText="Mulai Tantangan"
            delay="0.4s"
            color="from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-800/30"
            index={2}
          />
          
          <ResourceCard
            icon={<Users className="w-12 h-12" />}
            title="Sharing Session"
            description="Ikuti sesi sharing bersama programmer berpengalaman dan belajar dari mereka."
            buttonText="Jadwal Session"
            delay="0.6s"
            color="from-blue-500/20 to-cyan-500/20 dark:from-blue-900/30 dark:to-cyan-800/30"
            index={3}
          />

          <ResourceCard
            icon={<BookOpen className="w-12 h-12" />}
            title="E-Book Gratis"
            description="Unduh e-book programming gratis untuk dipelajari kapan saja dan di mana saja."
            buttonText="Download E-Book"
            delay="0.8s"
            color="from-amber-500/20 to-yellow-500/20 dark:from-amber-900/30 dark:to-yellow-800/30"
            index={4}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ResourcesSection;
