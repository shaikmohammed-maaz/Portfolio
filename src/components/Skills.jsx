import React from "react";
import "./Skills.css"; // Importing the CSS file for Skills styles
import {
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaAws,
  FaSwift,
  
} from "react-icons/fa";

const skills = [
  { name: "React", icon: FaReact, color: "text-accent" },
  { name: "Java", icon: FaJava, color: "text-accent" },
  { name: "Python", icon: FaPython, color: "text-accent" },
  { name: "SQL/NoSQL", icon: FaDatabase, color: "text-accent" },
  { name: "HTML5", icon: FaHtml5, color: "text-accent" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-accent" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-accent" },
  { name: "Git", icon: FaGitAlt, color: "text-accent" },
  { name: "DynamoDB", icon: FaAws, color: "text-accent" },
    { name: "Swift", icon: FaSwift, color: "text-accent" },

];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-24 rounded-lg shadow-md max-w-5xl mx-auto my-12"
    >
      <h2 className="text-3xl font-semibold mb-8 text-text-main">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map(({ name, icon: Icon, color }, i) => (
          <div
            key={name}
            className="skill-bx flex flex-col items-center justify-center bg-opacity-60 rounded-lg p-6 shadow hover:scale-105 transition-transform duration-300"
          >
            <Icon className={`text-4xl mb-3 ${color}`} />
            <span className="text-text-main font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
