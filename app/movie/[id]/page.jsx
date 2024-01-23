import Progress from "@/components/Progress";
import { getMovieCast, getMovieDetails } from "@/lib/api";
import moment from "moment";
import Image from "next/image";
import {
  FaBookmark,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaPlay,
  FaTwitter,
} from "react-icons/fa";
import { IoMdStar, IoMdHeart } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import Carasoul2 from "@/components/Carasoul2";
import CastCard from "@/components/CastCard";
const MovieDetails = async ({ params }) => {
  const { id } = params;
  const movieDetials = await getMovieDetails(id);
  const {
    poster_path,
    original_title,
    overview,
    popularity,
    release_date,
    runtime,
    genres,
    status,
    original_language,
    budget,
    revenue,
  } = movieDetials;
  const credits = await getMovieCast(id);
  const formattedYear = moment(release_date).format("YYYY");
  const formattedrelease_date = moment(release_date).format("MM/DD/YYYY");
  const formattedRuntime = moment
    .utc(runtime * 60 * 1000)
    .format("h[h] m[min]");
  const director = credits?.crew?.find(
    (crewMember) => crewMember.job === "Director"
  );
  const writers = credits?.crew?.filter(
    (crewMember) => crewMember.department === "Writing"
  );
  return (
    <div>
      <div
        className="w-full bg-[#032541] cursor-pointer bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-full md:col-span-3">
            <Image
              className="rounded-xl"
              width={600}
              height={600}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              layout="responsive"
              placeholder="blur"
              blurDataURL="data:image/png;base64, iVBORw0KG..."
            />
          </div>
          <div className="col-span-full md:col-span-9 text-white">
            <h1 className="text-3xl font-semibold">{`${original_title} (${formattedYear})`}</h1>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <button className="w-12 h-5 border text-sm">PG-13</button>
              <h1 className="py-2">{`  ${formattedrelease_date} . ${genres?.map(
                (gener) => gener.name
              )} . ${formattedRuntime} `}</h1>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Progress popularity={popularity} />
              <h1>User Score</h1>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <CiCircleList className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <IoMdHeart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <FaBookmark className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <IoMdStar className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                <button>
                  <FaPlay />
                </button>
                <h1>Play Trailer</h1>
              </div>
            </div>
            <h1 className="py-3 italic">The heist begins at 40,000 ft.</h1>
            <h1 className="text-xl font-semibold py-2">Overview</h1>
            <h1>{overview}</h1>
            <div className="py-5 flex gap-10">
              <div>
                <h1 className="font-medium">
                  {director ? director.name : "Not available"}
                </h1>
                <h1>Director</h1>
              </div>
              <div>
                <h1 className="font-medium">
                  {writers?.slice(0, 1).map((writer) => writer.name)}
                </h1>
                <h1>Writers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="col-span-full md:col-span-9">
          <h1 className="text-xl font-semibold">Top Billed Cast</h1>
          <Carasoul2 slide={2} smSlide={4} mdSlide={6} lgSlide={8}>
            {credits?.cast?.map((cast) => (
              <CastCard key={cast.id} cast={cast} />
            ))}
          </Carasoul2>
        </div>
        <div className="col-span-full md:col-span-3 mt-3 space-y-4">
          <div className="flex gap-5 items-center">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaLink className="w-6 h-6 cursor-pointer" />
          </div>
          <div>
            <h1 className="font-semibold">Status</h1>
            <h1>{status}</h1>
          </div>
          <div>
            <h1 className="font-semibold">Original Language</h1>
            <h1>{original_language}</h1>
          </div>
          <div>
            <h1 className="font-semibold">Budget</h1>
            <h1>${budget}</h1>
          </div>
          <div>
            <h1 className="font-semibold">Revenue</h1>
            <h1>${revenue}</h1>
          </div>
          <div>
            <h1 className="font-semibold">Keyword</h1>
            <div className="pt-2 flex gap-1 flex-wrap">
              {genres?.map((gener) => (
                <h1 className="mr-2 my-1 border rounded p-1 bg-gray-200 text-sm" key={gener.id}>
                  {gener.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
