"use client";

const SearchQuery = () => {
  return (
    <div className="w-full bg-white flex rounded-full ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a movie, tv show, person......."
        className="w-full px-5 rounded-full text-black"
      />
      <button className="px-8 py-3 bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] rounded-full">
        Search
      </button>
    </div>
  );
};

export default SearchQuery;
