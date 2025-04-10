
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CurhatSection from '@/components/CurhatSection';
import SolusiSection from '@/components/SolusiSection';
import BocoranSection from '@/components/BocoranSection';
import GabungSection from '@/components/GabungSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    // Fade in elements as they enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <CurhatSection />
      <SolusiSection />
      <BocoranSection />
      <GabungSection />
      <FooterSection />
    </div>
  );
};

export default Index;
