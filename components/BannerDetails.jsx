import SearchQuery from "./SearchQuery";

const BannerDetails = ({ movie }) => {
  const { poster_path } = movie;
  console.log(poster_path)
  return (
    <div>
      <div
        className="w-full  bg-[#001C32] cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full px-8 py-16 text-white">
          <div className="space-y-2 ">
            <h1 className="text-5xl font-semibold">Welcome to Flix</h1>
            <p className="text-2xl">
              Your go-to destination for discovering the best in movies and TV
              shows.
            </p>
          </div>
          <div className="pt-10">
            <SearchQuery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
