
import React from 'react';
import Header from '@/components/Header';
import BackgroundSystem from '@/components/BackgroundSystem';
import { useTheme } from '@/hooks/useTheme';

// Import renamed section components
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import CommunitySection from '@/components/sections/CommunitySection';
import JoinSection from '@/components/sections/JoinSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      {/* Unified background for the entire page based on theme */}
      <div className="fixed inset-0 z-0">
        <BackgroundSystem type="auto" density="medium" />
      </div>
      
      <Header />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="resources">
          <ResourcesSection />
        </section>
        <section id="community">
          <CommunitySection />
        </section>
        <section id="join">
          <JoinSection />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
