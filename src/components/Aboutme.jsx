import React from 'react';
import './Aboutme.css'; // Importing the CSS file for Aboutme styles
import AboutImg from '../assets/aboutImg.jpg'


export default function Aboutme() { 
 return(
<section id='aboutme' className="aboutme bg-primary-light text-text-main py-16 px-8 md:px-24 rounded-lg shadow-lg max-w-5xl mx-auto my-12">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Left: Text */}
    <div className="md:w-2/3">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="mb-4 text-text-secondary leading-relaxed">
        Hello! I’m Shaik Mohammed Maaz, a passionate developer who thrives at the intersection of creativity and logic. With a background in both frontend and backend development, I build seamless digital experiences that are both intuitive and robust.
      </p>
      <p className="mb-4 text-text-secondary leading-relaxed">
        My journey began with a curiosity for technology and a desire to solve real-world problems through code. I enjoy exploring new technologies, data science insights, and continuously improving my craft. I believe in team work since i started working with my frieds in various hacathons and learn a lot from them. this opened a new perspective for me to look at the problems and solve them in a better way.
      </p>
      <p className='mb-6 text-text-secondary leading-relaxed'> Recently I got intrested in data science since the out burst of the AI which heavely relies on data so i joined a data science course which led me to explore the world of statistics which totally changed my view on problem solving and how statistics is embedded in our daily lives</p>
      <p className="mb-6 text-text-secondary leading-relaxed">
        Outside of coding, I enjoy hiking, photography, and reading about emerging tech trends. I believe a balanced life fuels creativity and innovation.
      </p>
      <a href="MyResume.pdf" target='blank' className="inline-block px-6 py-2 rounded hover:bg-steel transition">
        Check out my resume
      </a>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/3 flex justify-center">
      <img
        src={AboutImg}
        alt="Shaik Mohammed Maaz"
        className="rounded-lg shadow-md object-cover w-64 h-64"
      />
    </div>
  </div>
</section>

 );
}