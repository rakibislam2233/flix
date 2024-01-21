"use client";

import { useState } from "react";

const SectionTitle = () => {
  const [status, setStatus] = useState("today");
  return (
    <div className="flex gap-4 pb-5">
      <h1 className="text-2xl font-semibold ">Trending</h1>
      <div className="border rounded-full flex justify-between items-center">
        <button
          onClick={() => setStatus("today")}
          className={`px-6 py-1 rounded-full text-gray-950 font-semibold ${
            status === "today" && "bg-[#032541]"
          }`}
          style={{
            transition: "background-color 0.3s ease",
          }}
        >
          <span
            className={` ${
              status === "today" &&
              "text-transparent bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] bg-clip-text"
            } `}
          >
            Today
          </span>
        </button>
        <button
          onClick={() => setStatus("thisWeek")}
          className={`px-6 py-1 rounded-full text-gray-950 font-semibold ${
            status === "thisWeek" && "bg-[#032541]"
          }`}
          style={{
            transition: "background-color 0.3s ease",
          }}
        >
          <span
            className={` ${
              status === "thisWeek" &&
              "text-transparent bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] bg-clip-text"
            } `}
          >
            This Week
          </span>
        </button>
      </div>
    </div>
  );
};

export default SectionTitle;
