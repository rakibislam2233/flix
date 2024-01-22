import {getTopRatedMovies } from "@/lib/api";
import Carasoul from "./Carasoul";
import BannerDetails from "./BannerDetails";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = async () => {
  const movies = await getTopRatedMovies();;
  return (
    <div className="w-full">
      <Carasoul>
        {movies?.map((movie) => (
          <BannerDetails key={movie.id} movie={movie} />
        ))}
      </Carasoul>
      <div
        className="w-full bg-[#032541]" //bg-[#123A4B]
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full px-8 py-8 text-white space-y-4 ">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-b from-[#8EC6B0] to-[#43A2E6] bg-clip-text ">{`That's a`}</h1>
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-b from-[#8EC6B0] to-[#43A2E6] bg-clip-text ">
            Wrap 2023
          </h1>
          <p>The best (and worst) of the year from TMDB.</p>
          <button className="px-5 py-2 border-2 rounded-full font-semibold text-white flex justify-center items-center gap-2">
            Check it out <FaArrowRightLong className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
