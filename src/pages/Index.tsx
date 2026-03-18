import { Scene } from '@/components/canvas/Scene';
import { Navbar } from '@/components/layout/Navbar';
import { LoadingScreen } from '@/components/sections/LoadingScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useState, useCallback } from 'react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  useSmoothScroll(loaded);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />
      {loaded && (
        <>
          <Scene />
          <Navbar />
          <main>
            <HeroSection />
            <div id="about"><AboutSection /></div>
            <div id="experience"><ExperienceSection /></div>
            <div id="services"><ServicesSection /></div>
            <ProjectsSection />
            <div id="skills"><SkillsSection /></div>
            <BlogSection />
            <ContactSection />
          </main>
          <FooterSection />
        </>
      )}
    </>
  );
};

export default Index;
