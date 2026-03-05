import React from "react";
import { motion } from "framer-motion";
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

  const completedProjects = projects.filter(p => p.status === 'Completed');

  return (
    <div className="relative py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`title-font text-4xl md:text-6xl mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          PROJECTS & WORK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 pb-24">
          {completedProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex h-full"
            >
              <ProjectCard project={project} isFocused={false} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}