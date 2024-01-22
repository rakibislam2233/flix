import React from "react";
import join from "@/assets/image/join.webp";
const JoinToday = () => {
  return (
    <div
      className="w-full bg-[#3A125B] p-10  text-white"
      style={{
        backgroundImage: `url(${join.src})`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition:'top'
      }}
    >
      <h1 className="text-2xl font-semibold ">Join Today</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 py-5">
        <div>
          <h1 className="text-lg">
            {`Get access to maintain your own custom personal lists, track what
                you've seen and search and filter for what to watch next—regardless
                if it's in theatres, on TV or available on popular streaming
                services like .`}
          </h1>
          <button className="px-5 py-2 bg-[#805BE7] rounded mt-8">Sign Up</button>
        </div>
        <div>
          <ul className="space-y-1 list-disc">
            <li>Enjoy Flix ad free</li>
            <li>Maintain a personal watchlist</li>
            <li>
              Filter by your subscribed streaming services and find something to
              watch
            </li>
            <li>{`Log the movies and TV shows you've seen`}</li>
            <li>Build custom lists</li>
            <li>Contribute to and improve our database</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JoinToday;
