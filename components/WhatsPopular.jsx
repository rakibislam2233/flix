import { getPopularMovies } from "@/lib/api";
import Carasoul2 from "./Carasoul2";
import MovieCard from "./MovieCard";

const WhatsPopular = async () => {
  const popularMovies = await getPopularMovies();
  return (
    <div className="w-full px-8 py-5">
      <div className="flex gap-2 items-center pb-5">
        <h1 className="text-2xl font-semibold ">{`What's Popular`}</h1>
        <button className="px-5 py-1 rounded-full bg-[#032541]">
          <span className="opacity-0">In Theaters</span>
        </button>
      </div>
      <Carasoul2 slide={2} smSlide={4} mdSlide={6} lgSlide={8}>
        {popularMovies?.slice(0, 10)?.map((popularMovie) => (
          <MovieCard key={popularMovie.id} movie={popularMovie} />
        ))}
      </Carasoul2>
    </div>
  );
};

export default WhatsPopular;
