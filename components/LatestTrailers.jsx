import { getupcomingMovies } from "@/lib/api";
import Carasoul2 from "./Carasoul2";
import TrailerVideo from "./TrailerVideo";
const LatestTrailers = async () => {
  const movies = await getupcomingMovies();
  return (
    <div className="w-full px-8 bg-[#0F2C3E] py-5">
      <div className="flex items-center gap-4 pb-5 flex-wrap">
        <h1 className="text-2xl font-semibold text-white">Latest Trailers</h1>
        <div className="border border-[#2FD9AD] rounded-full flex justify-between items-center">
          <button
            className={`px-6 py-1 rounded-full font-semibold  bg-gradient-to-l from-[#B5FBCC] to-[#2FD9AD]`}
            style={{
              transition: "background-color 0.3s ease",
            }}
          >
            <span>Today</span>
          </button>
          <button
            className={`px-6 py-1 rounded-full text-white font-semibold`}
            style={{
              transition: "background-color 0.3s ease",
            }}
          >
            <span>This Week</span>
          </button>
        </div>
      </div>
      <Carasoul2>{movies?.map((movie) => <TrailerVideo key={movie.id} movie={movie}/>)}</Carasoul2>
    </div>
  );
};

export default LatestTrailers;
