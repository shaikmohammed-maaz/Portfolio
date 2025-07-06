import React from "react";
import "./Experience.css"; // Importing the CSS file for Experience styles

// Example Experience & Education Data
const timeline = [
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    org: "Madras University",
    period: "2023 – Present",
    description: "persuing a degree in Computer Applications with a focus on software development and core conpects.",
  },
  {
    type: "education",
    title: "Bsc Data Science",
    org: "IIT Madras",
    period: "2025 - Present",
    description: "A keen interest in data made me pursue a Bsc in Data Science from IIT Madras, where I am learning advanced data analysis and machine learning techniques.",
  },
  {
    type: "experience",
    title: "Swift developer Intern",
    org: "Arjava Tech pvt ltd",
    period: "2024 Aug – 2023 Sep",
    description: "Worked as a Swift developer intern, where I developed and maintained iOS applications, focusing on user experience and making accessiblity easy to old users the PSPVoice Over App is the product of the intership.",
  },
  // Add more as needed...
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-16 px-6 md:px-24 bg-primary-light rounded-lg shadow-md max-w-5xl mx-auto my-12"
    >
      <h2 className="text-3xl font-semibold mb-8 text-text-main"><span className="text-gray-950"> Experience</span> & Education</h2>
      <div className="relative border-l-2 border-primary pl-8">
        {timeline.map((item, i) => (
          <div key={i} className="mb-10 last:mb-0 relative">
            {/* Timeline Dot */}
            <span
              className={`absolute -left-4 top-2 w-4 h-4 rounded-full ${
                item.type === "experience" ? "bg-accent" : "bg-secondary"
              } border-2 border-white shadow`}
            />
            <div>
              <h3 className="text-xl text-gray-950 font-bold text-text-main">
                {item.title}
              </h3>
              <span className="text-sm text-text-secondary font-medium">
                {item.org} &middot; {item.period}
              </span>
              <p className="text-text-secondary mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
