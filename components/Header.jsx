"use client";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full px-10 py-4 bg-[#032541] ">
      <div className="hidden  lg:flex justify-between items-center text-white flex-wrap">
        <div className="">
          <ul className="flex justify-center items-center gap-6">
            <li className="flex justify-center items-center gap-1">
              <Link href="/">
                <h1 className="text-4xl font-bold tracking-[5px] text-transparent bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] bg-clip-text">
                  Flix
                </h1>
              </Link>
              <div className="w-14 h-5 bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] rounded-full"></div>
            </li>
            <li className="relative group py-1.5">
              <Link href="">Movies</Link>
              <ul
                className={`w-40 absolute top-8 left-0 right-0 bg-white p-5 rounded z-10 text-gray-950 hidden group-hover:block`}
              >
                <Link href="/movie">
                  <li>Popular</li>
                </Link>
                <Link href="">
                  <li>Now Playing</li>
                </Link>
                <Link href="">
                  <li>Upcoming</li>
                </Link>
                <Link href="">
                  <li>Top Rated</li>
                </Link>
              </ul>
            </li>
            <li className="relative group py-1.5">
              <Link href="">TV Shows</Link>
            </li>
            <li className="relative group py-1.5">
              <Link href="">People</Link>
            </li>
            <li>
              <Link href="">More</Link>
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
      </div>
      <div className="w-full h-full flex lg:hidden justify-between items-center relative">
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="w-6 h-6 text-white" />
          </button>
        </div>

        <div>
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-[5px] text-transparent bg-gradient-to-l from-[#00A3E1] to-[#1BD1AF] bg-clip-text">
              Flix
            </h1>
          </Link>
        </div>
        <div className="flex  items-center gap-2">
          <IoPersonOutline className="w-6 h-6 text-white" />
          <IoMdSearch className="w-8 h-8 cursor-pointer text-[#1BD1AF] " />
        </div>
        <div
          className={`absolute w-64 h-screen top-14 ${
            isOpen ? "-left-10" : "-left-96"
          } bg-[#042743] z-10  p-5 text-white transition-all duration-500`}
        >
          <ul className="flex flex-col  gap-1">
            <li
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              Movie
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/movie"}>Popular</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              TV Show
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              People
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              More
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
