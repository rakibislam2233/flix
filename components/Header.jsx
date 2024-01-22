import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
const Header = () => {
  return (
    <nav
      className={`w-full px-10 py-4 bg-[#032541]  flex justify-between items-center text-white`}
    >
      <div>
        <ul className="flex justify-center items-center gap-6">
          <li className="flex justify-center items-center gap-1">
            <h1 className="text-4xl font-bold tracking-[5px] text-transparent bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] bg-clip-text">
              Flix
            </h1>
            <div className="w-14 h-5 bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] rounded-full"></div>
          </li>
          <li className="relative">
            <Link href={"/movie"}>Movies</Link>
            <ul
              className={`w-40 absolute top-8 left-0 right-0 bg-slate-500 p-5 flex flex-col gap-2 rounded transition-opacity duration-300 opacity-0`}
            >
              <Link href="/movies/popular">
                <li>Popular</li>
              </Link>
              <Link href="/movies/now-playing">
                <li>Now Playing</li>
              </Link>
              <Link href="/movies/upcoming">
                <li>Upcoming</li>
              </Link>
              <Link href="/movies/top-rated">
                <li>Top Rated</li>
              </Link>
            </ul>
          </li>
          {/* <li className="relative group">
            <Link href={"/"}>TV Shows</Link>
            <ul className="w-40 absolute top-8 left-0 right-0 bg-slate-500 p-5 flex flex-col gap-2 rounded opacity-0  transition-opacity duration-300">
              <Link href="/movies/popular">
                <li>Popular</li>
              </Link>
              <Link href="/movies/now-playing">
                <li>Now Playing</li>
              </Link>
              <Link href="/movies/upcoming">
                <li>Upcoming</li>
              </Link>
              <Link href="/movies/top-rated">
                <li>Top Rated</li>
              </Link>
            </ul>
          </li> */}
          <li>
            <Link href={"/"}>People</Link>
          </li>
          <li>
            <Link href={"/"}>More</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-6">
          <li>
            <FaPlus className="w-6 h-6 cursor-pointer" />
          </li>
          <li>
            <button className="w-7 h-7 border p-2 flex justify-center items-center text-sm rounded hover:bg-white hover:text-gray-950">
              EN
            </button>
          </li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Join Flix</li>
          <li>
            <IoMdSearch className="w-6 h-6 cursor-pointer" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
