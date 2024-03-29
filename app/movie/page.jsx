"use client";
import Accordion from "@/components/Accordion";
import MovieCard from "@/components/MovieCard";
import { getGenresMovies, getDiscoverMovies } from "@/lib/api";
import { useEffect, useState } from "react";
const Movie = () => {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  const [sortMovies, setSortMovies] = useState("popularity.desc");
  const [genres, setGenres] = useState([]);
  const fetchPopularMovies = async (page, sortMovies) => {
    const movies = await getDiscoverMovies(page, sortMovies);
    setPopularMovies(movies);
  };
  const fetchGenres = async () => {
    const genresData = await getGenresMovies();
    setGenres(genresData);
  };
  useEffect(() => {
    fetchPopularMovies(page, sortMovies);
    fetchGenres();
  }, [page, sortMovies]);
  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortMovies(selectedSortOption);
  };
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 px-8 py-5 gap-8">
      <div className="col-span-full md:col-span-3">
        <h1 className="text-2xl font-semibold pb-5">Popular Movies</h1>
        <div>
          <Accordion title="Sort">
            <div className="px-4 py-2">
              <h1 className="pb-2">Sort Results By</h1>
              <select
                name="sortOptions"
                id="sortOptions"
                className="px-3 py-2 rounded border space-y-2 focus:outline-none bg-gray-200"
                onChange={handleSortChange}
                value={sortMovies}
              >
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="popularity.desc">Popularity Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value={"release_date.asc"}>
                  Release Date Ascending
                </option>
                <option value={"release_date.desc"}>
                  Release Date Decending
                </option>
                <option>{`Title (A-Z)`}</option>
              </select>
            </div>
          </Accordion>
          <Accordion title="Filters">
            <div className="px-4 py-3">
              <h1 className="py-1">Show Me</h1>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 flex justify-center items-center border rounded-full bg-cyan-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-white "></div>
                  </div>
                  <span>Everything</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 border rounded-full"></div>
                  <span>Movies I Haven t Seen</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 border rounded-full"></div>
                  <span>Movies I Have Seen</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-4 py-3">
              <h1 className="py-1">Release Dates</h1>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  name=""
                  id=""
                  className="rounded-full p-2"
                />
                <span>Search all releases?</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center gap-5">
                  <label htmlFor="">From</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[75%] px-5 py-1 border rounded-md focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="flex justify-between items-center gap-5">
                  <label htmlFor="">To</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[75%] px-5 py-1 border rounded-md focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="px-4 py-3">
              <h1 className="py-1">Genres</h1>
              <div className="w-full grid grid-cols-2 gap-3">
                {genres?.map((gener) => (
                  <span
                    key={gener.id}
                    className="p-3 py-1 text-sm border  rounded-full flex justify-center items-center"
                  >
                    {gener?.name}
                  </span>
                ))}
              </div>
            </div>
            <hr />
            <div className="px-4 py-3">
              <span>Certification</span>
            </div>
            <hr />
            <div className="px-4 py-3">
              <h1>Language</h1>
            </div>
          </Accordion>
          <button className="w-full px-5 py-2 bg-cyan-500 rounded-full text-white font-semibold">
            Search
          </button>
        </div>
      </div>
      <div className="col-span-full md:col-span-9 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className="w-full px-5 py-2 bg-cyan-500 rounded-full text-white font-semibold"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Movie;
