export const getPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};
export const getTrendingMovies = async (type) => {
  const url = `https://api.themoviedb.org/3/trending/movie/${type}?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};
export const getupcomingMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};
export const getTopRatedMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};
export const getGenresMovies = async () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.genres;
};

export const getMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};
