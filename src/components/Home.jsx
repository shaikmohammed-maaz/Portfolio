import React from 'react';
import { useState , useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'; // Importing the CSS file for Home styles
import mainImg from '../assets/MyPic_3.jpg'; // Importing the main image

function Home() {
    const [headingDone, setHeadingDone] = useState(false);

    useEffect(() => {
    // "Shaik Mohammed Maaz" has 20 characters, typeSpeed=70ms per char
    const headingTypingDuration = 20 * 70 + 1000; // 1000ms delay after typing
    const timer = setTimeout(() => setHeadingDone(true), headingTypingDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
 <div id='home' className="home min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-background">
  {/* Left: Content */}
  <div className="home-content md:w-1/2 w-full md:pr-12">
     {/* Heading with typing effect */}
      <h1 className="text-3xl font-bold text-text-main ">
        <Typewriter
          words={['Shaik Mohammed Maaz']}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          loop={1}
        />
      </h1>

      {/* Paragraph with typing effect, appears after heading is done */}
      <p className="text-lg mt-4 text-text-secondary min-h-[120px]">
        {headingDone && (
          <Typewriter
            words={[
              `I am a passionate developer with a love for building seamless digital experiences—whether it's crafting intuitive web interfaces, engineering robust backend systems, or exploring insights through data science. I thrive at the intersection of creativity and logic, always eager to bring ideas to life through code.`
            ]}
            cursor
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={1}
          />
        )}
      </p>
    <button className="mt-6 px-6 py-2 rounded hover:animate-bounce">
      View Projects
    </button>
  </div>
  {/* Right: Image */}
  <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
    <img
      src={mainImg}
      alt="Shaik Mohammed Maaz"
      className="w-72 h-72 object-cover rounded-xl shadow-lg"
    />
  </div>
</div>

  );
}


export default Home;