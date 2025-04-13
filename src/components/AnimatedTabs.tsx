
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

const AnimatedTabs: React.FC<AnimatedTabsProps> = ({ 
  tabs, 
  defaultTabId = tabs[0]?.id,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTabId);
  const { theme } = useTheme();

  const getActiveTabIndex = () => {
    return tabs.findIndex(tab => tab.id === activeTab);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="flex border-b border-gray-200 dark:border-gray-700 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-2 px-4 text-sm md:text-base transition-colors duration-200 flex items-center gap-2
                          ${activeTab === tab.id 
                            ? 'text-skyblue-dark dark:text-skyblue-light font-medium' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'}`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-skyblue-dark dark:bg-skyblue-light"
                  layoutId="activetab"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>
        
        <div className="mt-4 p-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabs.find(tab => tab.id === activeTab)?.content}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTabs;
