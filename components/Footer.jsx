import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#031F37] px-10 py-20 ">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 text-white">
        <div>
          <h1 className="text-4xl font-bold tracking-[5px] text-transparent bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] bg-clip-text ">
            Flix
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-bold">THE BASICS</h1>
          <ul className="flex flex-col gap-2">
            <li className="pt-2">
              <Link href={"/"}>About TMDB</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us </Link>
            </li>
            <li>
              <Link href={"/"}>Support Forums </Link>
            </li>
            <li>
              <Link href={"/"}>API</Link>
            </li>
            <li>
              <Link href={"/"}>System Status</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">GET INVOLVED</h1>
          <ul className="flex flex-col gap-2">
            <li className="pt-2">
              <Link href={"/"}>Contribution Bible</Link>
            </li>
            <li>
              <Link href={"/"}>Add New Movie</Link>
            </li>
            <li>
              <Link href={"/"}>Add New TV Show</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">COMMUNITY</h1>
          <ul className="flex flex-col gap-2">
            <li className="pt-2">
              <Link href={"/"}>Guidelines</Link>
            </li>
            <li>
              <Link href={"/"}>Discussions</Link>
            </li>
            <li>
              <Link href={"/"}>Leaderboard</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">LEGAL</h1>
          <ul className="flex flex-col gap-2">
            <li className="pt-2">
              <Link href={"/"}>Terms of Use</Link>
            </li>
            <li>
              <Link href={"/"}>API Terms of Use</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>DMCA Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
