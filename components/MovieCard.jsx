import Image from "next/image";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import Progress from "./Progress";
const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, popularity } = movie;
  // Format the release date using Moment.js
  const formattedDate = moment(release_date).format("MMM DD, YYYY");
  return (
    <div className="w-ful p-2 ">
      <Link href={`/movie/${id}`}>
        <div className="relative cursor-pointer">
          <Image
            className="rounded-xl"
            width={600}
            height={600}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            layout="responsive"
            placeholder="blur"
            blurDataURL="data:image/png;base64, iVBORw0KG..."
          />
          <div className="absolute top-3 right-3 w-5 h-5 bg-gray-400 hover:bg-[#07B4E2] rounded-full flex justify-center items-center">
            <BsThreeDots className="text-gray-700" />
          </div>
          <div className="absolute left-2 -bottom-6">
           <Progress popularity={popularity} type={'movie'}/>
          </div>
        </div>
      </Link>
      <div className="p-2 pt-8">
        <h1 className="font-semibold">{title}</h1>
        <h1>{formattedDate}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
