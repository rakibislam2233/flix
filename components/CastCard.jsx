import Image from "next/image";

const CastCard = ({cast}) => {
    const {name,profile_path} = cast;
  return (
    <div className="w-ful p-2 ">
      <div className="cursor-pointer">
        <Image
          className="rounded-xl"
          width={600}
          height={600}
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
          layout="responsive"
          placeholder="blur"
          blurDataURL="data:image/png;base64, iVBORw0KG..."
        />
      </div>
      <div className="p-2">
        <h1 className="font-semibold">{name}</h1>
      </div>
    </div>
  );
};

export default CastCard;
