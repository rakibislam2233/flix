import axiosInstances from "@/axiosInstances/axiosInstances";
const tmdbApiKey = process.env.TMDB_API_KEY;
export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.results;
};
