import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from '../contexts/ThemeContext';
import ProjectCard from './ProjectCard';
import PortfolioImg from "../assets/PortfoiloImg.png";
import AgroImg from "../assets/AgroValueImg.png";
import SaasImg from "../assets/SaaSBayImg.png";
import QuizImg from "../assets/QuizGameImg.png";
import HangmanImg from "../assets/HangmanImg.png";
import NearByImg from "../assets/NearByNowImg.png";
import DSImg from "../assets/DSImg.png";
import PSPImg from "../assets/PSPImg.png";

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      link: "https://shaikmohammed-maaz.github.io/Portfolio/",
      github: "https://github.com/shaikmohammed-maaz/Portfolio",
      image: PortfolioImg,
      status: "Completed",
    },
    {
      title: "Agro Value",
      description: "A place where farmers predict their crops and get the best price for their crops.",
      tech: ["HTML", "CSS", "FastApi", "Python"],
      link: "https://shaikmohammed-maaz.github.io/agroValue/",
      github: "https://github.com/shaikmohammed-maaz/agroValue",
      image: AgroImg,
      status: "Completed",
    },
    {
      title: "SaaSBay",
      description: "A market place that serves as a buying and comparing platform which enables users to make the best choice in their SaaS purchase.",
      tech: ["React", "TailwindCss", "FireBase"],
      link: "https://shaikmohammed-maaz.github.io/SaaSBay/",
      github: "https://github.com/shaikmohammed-maaz/SaaSBay",
      image: SaasImg,
      status: "In Progress",
    },
    {
      title: "Quiz Game",
      description: "A fun and interactive quiz game that tests your knowledge on various topics just give the questions in js file and play.",
      tech: ["React", "TailwindCss", "JavaScript"],
      link: "https://shaikmohammed-maaz.github.io/QuizGame-react/",
      github: "https://github.com/shaikmohammed-maaz/QuizGame-react",
      image: QuizImg,
      status: "Completed",
    },
    {
      title: "HangMan Game Terminal",
      description: "A classic Hangman game implemented in the terminal using Python. Guess the word before running out of attempts!",
      tech: ["Python"],
      link: "https://example.com",
      github: "https://github.com/shaikmohammed-maaz/hangman_game_python",
      image: HangmanImg,
      status: "Completed",
    },
    {
      title: "NearBy Now",
      description: "A app where you can find any near by events and also you can create your own event and share it with others.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "https://shaikmohammed-maaz.github.io/NearBy_Now/",
      github: "https://github.com/shaikmohammed-maaz/Nearby_Now",
      image: NearByImg,
      status: "In Progress",
    },
    {
      title: "Data Structures Learning",
      description: "All my logic of understanding data structures and algorithms.",
      tech: ["C++"],
      link: "https://example.com",
      github: "https://github.com/shaikmohammed-maaz/C--Files",
      image: DSImg,
      status: "In Progress",
    },
    {
      title: "PSP VoiceOver App",
      description: "A app which helps old people to use their phone with ease to record voice message and send it to their loved ones.",
      tech: ["SwiftUI", "Firebase"],
      link: "https://drive.google.com/file/d/1iC0vBaQKMaOoS3Gz4lUBYXWB1WLg6FFT/view?usp=sharing",
      github: "https://drive.google.com/drive/folders/1PO_3x4Uv6Y2fOJ3Nb3k5DpygawL1iBP7?usp=sharing",
      image: PSPImg,
      status: "Completed",
    }
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-5000px"]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `1000vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <h2 className={`title-font text-4xl md:text-6xl mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          PROJECTS & WORK
        </h2>
        <motion.div 
          className="flex gap-8 pl-80"
          style={{ x }}
        >
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              project={project} 
              isFocused={false}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}