"use client";
import { getTrendingMovies } from "@/lib/api";
import MovieCard from "./MovieCard";
import Carasoul2 from "./Carasoul2";
import { useEffect, useState, useCallback } from "react";
const Trending = () => {
  const [status, setStatus] = useState("today");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      if (status === "today") {
        const movies = await getTrendingMovies("day");
        setTrendingMovies(movies);
      } else if (status === "thisWeek") {
        const movies = await getTrendingMovies("week");
        setTrendingMovies(movies);
      }
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }, [status]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full px-8 py-10">
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
      <Carasoul2>
        {trendingMovies?.slice(0, 10)?.map((trendingMovie) => (
          <MovieCard key={trendingMovie.id} movie={trendingMovie} />
        ))}
      </Carasoul2>
    </div>
  );
};

export default Trending;
