"use client";
import { useState} from "react";
const Progress = () => {
  const [circumference, setCircumference] = useState(20 * 2 * Math.PI);
  const [percent, setPercent] = useState(50);

  return (
    <div
    className="relative flex justify-center items-center"
      style={{ "--circumference": circumference, "--percent": percent }}
    >
      <svg
        className="w-12 h-12 rounded-full bg-[#081C22] flex justify-center items-center "
        aria-hidden="true"
      >
        <circle
          className="text-gray-800"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="24"
          cy="24"
        />
        <circle
          className="text-yellow-500"
          strokeWidth="3"
          style={{
            strokeDasharray: "var(--circumference)",
            strokeDashoffset: `calc(var(--circumference) - var(--percent) / 100 * var(--circumference))`,
          }}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="24"
          cy="24"
        />
      </svg>
      <span className="absolute text-sm text-white">{percent}%</span>
    </div>
  );
};
export default Progress;
