import React from "react";
import {
  FaLaptopCode, FaChartBar, FaCode, FaDatabase,
  FaCalculator, FaCalendar, FaComment, FaApple, FaCodepen
} from "react-icons/fa";
import "./FloatingIcons.css";

const icons = [
  FaLaptopCode, FaChartBar, FaCode,
  FaDatabase, FaCalculator, FaCalendar,
  FaComment, FaApple, FaCodepen,
];

// Helper to generate a random offset within ±10% of the cell
function randomOffset() {
  return Math.random() * 20 - 10; // -10 to +10
}

// 3x3 grid cell positions (as percentages)
const grid = [
  [10, 12], [10, 50], [10, 80],
  [45, 20], [50, 50], [45, 80],
  [80, 10], [80, 50], [80, 85],
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {icons.map((Icon, i) => {
        // Add a little random offset to each icon's position
        const [top, left] = grid[i];
        const topOffset = top + randomOffset();
        const leftOffset = left + randomOffset();
        const duration = 4 + Math.random() * 3; // 4s to 7s
        const delay = Math.random() * 2; // 0s to 2s
        const opacity = 0.15 + Math.random() * 0.25; // 0.15-0.4

        return (
          <Icon
            key={i}
            className="absolute text-4xl md:text-5xl text-gray-400 floating-icon"
            style={{
              top: `${topOffset}%`,
              left: `${leftOffset}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
