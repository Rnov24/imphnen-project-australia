import React, { useState } from 'react';
import { BrainCircuit, Users, FileCode, Zap } from 'lucide-react';
import { CustomCard, CustomCardHeader, CustomCardContent } from './ui/custom-card';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  color?: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  color = "bg-skyblue/20 dark:bg-skyblue-dark/20",
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <CustomCard 
        variant="glass" 
        hoverEffect="scale" 
        className="group dark:border dark:border-gray-700/50 h-full flex flex-col transform transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex justify-center mt-8 mb-6">
          <motion.div 
            className={`relative p-4 rounded-full ${color} transition-all duration-300 w-20 h-20 flex items-center justify-center`}
            animate={{
              rotate: isHovered ? 6 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-skyblue-dark dark:text-skyblue-light text-4xl">
              {icon}
            </div>
            <motion.span 
              className="absolute inset-0 rounded-full border-2 border-skyblue dark:border-skyblue-light"
              animate={{
                opacity: isHovered ? [0, 1, 0] : 0,
                scale: isHovered ? [1, 1.2, 1] : 1
              }}
              transition={{
                repeat: isHovered ? Infinity : 0,
                duration: 1.5
              }}
            />
          </motion.div>
        </div>
        
        <CustomCardHeader className="text-center px-6">
          <motion.h3 
            className="text-xl font-bold text-gray-800 dark:text-white transition-all duration-300 group-hover:text-skyblue-dark dark:group-hover:text-skyblue-light"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
        </CustomCardHeader>
        
        <CustomCardContent className="flex-grow px-6 pb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            {description}
          </p>
        </CustomCardContent>
      </CustomCard>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <motion.div 
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-skyblue/20 dark:bg-skyblue-dark/20 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fitur Unggulan
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          IMPHNEN hadir dengan berbagai fitur untuk membantu kamu menjadi programmer handal tanpa harus pusing dengan coding.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
          <FeatureCard 
            icon={<BrainCircuit className="w-12 h-12" />}
            title="Belajar Tanpa Koding"
            description="Pelajari konsep programming dengan cara yang mudah dipahami tanpa harus menulis kode yang rumit."
            delay="0s"
            color="bg-purple-100 dark:bg-purple-900/30"
            index={0}
          />
          
          <FeatureCard 
            icon={<Users className="w-12 h-12" />}
            title="Komunitas Supportif"
            description="Bergabunglah dengan komunitas programmer Indonesia yang siap membantu dan berbagi pengalaman."
            delay="0.2s"
            color="bg-blue-100 dark:bg-blue-900/30"
            index={1}
          />
          
          <FeatureCard 
            icon={<FileCode className="w-12 h-12" />}
            title="Tutorial Interaktif"
            description="Akses tutorial interaktif yang membuat konsep pemrograman sulit menjadi mudah dipahami."
            delay="0.4s"
            color="bg-green-100 dark:bg-green-900/30"
            index={2}
          />

          <FeatureCard 
            icon={<Zap className="w-12 h-12" />}
            title="AI Learning Assistant"
            description="Asisten berbasis AI yang membantu proses belajar kamu dengan menjawab pertanyaan seputar pemrograman."
            delay="0.6s"
            color="bg-amber-100 dark:bg-amber-900/30"
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
