
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CurhatSection from '@/components/CurhatSection';
import SolusiSection from '@/components/SolusiSection';
import BocoranSection from '@/components/BocoranSection';
import GabungSection from '@/components/GabungSection';
import FooterSection from '@/components/FooterSection';
import BackgroundSystem from '@/components/BackgroundSystem';
import FloatingParticles from '@/components/FloatingParticles';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Fade in elements as they enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add a fun staggered animation for children
            if (entry.target.classList.contains('stagger-children')) {
              const children = entry.target.querySelectorAll('.stagger-item');
              children.forEach((child, index) => {
                (child as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
                child.classList.add('visible');
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    // Parallax scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax').forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <HeroSection />
          <FloatingParticles count={30} speed={0.3} className="absolute top-0 left-0 z-0 opacity-50" />
        </div>
        
        <section id="features" className="relative">
          <BackgroundSystem type="auto" density="low" />
          <CurhatSection />
          <SolusiSection />
        </section>
        
        <section id="community" className="relative">
          <BackgroundSystem type="auto" density="medium" />
          <FloatingParticles count={20} speed={0.2} className="absolute top-0 left-0 z-0 opacity-30" />
          <BocoranSection />
        </section>
        
        <section id="resources" className="relative">
          <BackgroundSystem type="auto" density="low" />
          <GabungSection />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
