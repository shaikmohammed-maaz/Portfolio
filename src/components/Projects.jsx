import React from "react";
import "./Projects.css"; // Importing the CSS file for Projects styles
import aboutImg from "../assets/aboutImg.jpg"; // Importing a sample image for projects
import AgroImg from "../assets/AgroValueImg.png"; // Importing Agro Value project image
import SaasImg from "../assets/SaaSBayImg.png"; // Importing SaaSBay project image
import QuizImg from "../assets/QuizGameImg.png"; // Importing Quiz Game project image
import HangmanImg from "../assets/HangmanImg.png"; // Importing Hangman Game project image
import NearByImg from "../assets/NearByNowImg.png"; // Importing NearBy Now project image
import DSImg from "../assets/DSImg.png"; // Importing Data Science project image

// Example Project Data
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React, Tailwind CSS, and custom animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
    image: aboutImg,
    status: "Completed",
  },
  {
    title: "Agro Value",
    description: "A place where farmers pridect their crops and get the best price for their crops.",
    tech: ["HTML", "CSS", "FastApi", "Python"],
    link: "https://shaikmohammed-maaz.github.io/agroValue/",
    github: "https://github.com/shaikmohammed-maaz/agroValue",
    image: AgroImg,
    status: "Completed",
  },
    {
    title: "SaaSBay",
    description: "A market place that serves as a buying and comparing platform which enables users to make the best choice in thier SaaS purchase.",
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
    tech: ["HTML", "CSS", "JavaScript","Firebase"],
    link: "https://example.comhttps://shaikmohammed-maaz.github.io/NearBy_Now/",
    github: "https://github.com/shaikmohammed-maaz/Nearby_Now",
    image: NearByImg, // Replace with actual image URL
    status: "In Progress",
  },
  {
    title: "Data Structures Learning",
    description: "All my logic of understanding data structures and algorithms.",
    tech: ["C++"],
    link: "https://example.com",
    github: "https://github.com/shaikmohammed-maaz/C--Files",
    image: DSImg, // Replace with actual image URL
    status: "In Progress",
  }
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-24 bg-background rounded-lg shadow-md max-w-5xl mx-auto my-12"
    >
      <h2 className="text-3xl font-semibold mb-8 text-text-main">Projects & Work</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-text-main mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-accent text-gray-900 rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-text-main px-4 py-2 rounded hover:bg-primary-light transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-gray-700 px-4 py-2 rounded hover:bg-text-main hover:text-secondary transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
