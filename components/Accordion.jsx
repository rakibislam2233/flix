"use client";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="mb-3">
      <div
        className={`flex justify-between items-center border px-4 py-2 cursor-pointer ${
          isActive ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={handleClick}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <FaCaretRight
          className={`w-5 h-5 transition-transform transform ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isActive && (
        <div className="bg-white border rounded-b-md">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
