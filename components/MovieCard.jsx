"use client";
import Image from "next/image";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, popularity } = movie;
  // Format the release date using Moment.js
  const formattedDate = moment(release_date).format("MMM DD, YYYY");
  const popularityPercentage = (parseFloat(popularity) * 10).toFixed(2);
  const percentage = popularityPercentage.slice(0, 2);
  const [circumference] = useState(20 * 2 * Math.PI);
  const [percent,setPercent] = useState(percentage);
  useEffect(()=>{
    setPercent(percentage)
  },[percentage])
  return (
    <div className="w-ful p-2 ">
      <div className="relative cursor-pointer">
        <Image
          className="rounded-xl"
          width={600}
          height={600}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          layout="responsive"
          placeholder="blur"
          blurDataURL="data:image/png;base64, iVBORw0KG..."
        />
        <div className="absolute top-3 right-3 w-5 h-5 bg-gray-400 hover:bg-[#07B4E2] rounded-full flex justify-center items-center">
          <BsThreeDots className="text-gray-700" />
        </div>
        <div className="absolute left-2 -bottom-6">
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
                className={`${percentage>50 ? 'text-yellow-300' : 'text-green-500'}`}
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
        </div>
      </div>
      <div className="p-2 pt-8">
        <h1 className="font-semibold">{title}</h1>
        <h1>{formattedDate}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
