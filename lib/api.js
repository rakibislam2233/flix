export const getDiscoverMovies = async (totalPages,sortBy) => {
  let allMovies = [];
  for (let page = 1; page <= totalPages; page++) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=b07785a918a90e5816110d5e6e835fd2&sort_by=${sortBy}&page=${page}`;
    const res = await fetch(url, {
      cache: "no-store",
    });
    const data = await res.json();
    const movies = data.results;
    allMovies = [...allMovies, ...movies];
  }
  return allMovies;
};
export const getPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
}
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
  return data;
};
export const getMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b07785a918a90e5816110d5e6e835fd2`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return data;
};
