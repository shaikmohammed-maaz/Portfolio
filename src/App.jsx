import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './components/Home.jsx';
import Aboutme from './components/AboutmeNew.jsx';
import SkillsSection from './components/SkillsNew.jsx';
import ProjectsNew from './components/ProjectsNew.jsx';
import TimelineSection from './components/ExperienceNew.jsx';
import ContactSection from './components/ContactTerminal.jsx';
import Footer from './components/Footer.jsx';
import LeftSidebar from './components/LeftSidebar.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import ShiftScrollEasterEgg from './components/ShiftScrollEasterEgg.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-500">
        <ScrollProgress />
        <AnimatedBackground />
        <ShiftScrollEasterEgg />
        <LeftSidebar />
        <main className="w-full lg:pl-72">
          <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
            <Aboutme />
            <SkillsSection />
            <ProjectsNew />
            <TimelineSection />
            <ContactSection />
            {/* <Footer /> */}
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
