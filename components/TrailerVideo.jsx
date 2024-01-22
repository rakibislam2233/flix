"use client";
// import { getLatestMoviesTrailers } from "@/lib/api";
import { useState } from "react";
import { BsThreeDots, BsX } from "react-icons/bs";
import ReactPlayer from "react-player";

const TrailerVideo = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const [video, setVideo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchYoutubeVideo = async () => {
    try {
      const videosResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b07785a918a90e5816110d5e6e835fd2`
      );
      const movieKey = await videosResponse.json();
      setVideo(movieKey.results[0].key);
      setIsOpen(true);
    } catch (error) {
      console.error("Error searching TMDb:", error);
    }
  };

  const closeYoutubeVideo = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full p-2 space-y-2">
      <div className="relative">
        <img
          className="w-full h-56 rounded-xl cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          onClick={searchYoutubeVideo}
        />
        <div
          className="absolute top-3 right-3 w-5 h-5 bg-gray-400 hover:bg-[#07B4E2] rounded-full flex justify-center items-center cursor-pointer"
          onClick={searchYoutubeVideo}
        >
          <BsThreeDots className="text-gray-700" />
        </div>
      </div>
      <h1 className="font-semibold text-xl text-white text-center">{title}</h1>
      {isOpen && (
        <div className="flex justify-center items-center">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video}`}
            controls
          />
        </div>
      )}
    </div>
  );
};

export default TrailerVideo;
