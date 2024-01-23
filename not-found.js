import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <h1 className="text-7xl text-rose-500">404 Page</h1>
        <Link className="px-5 py-2 bg-cyan-500 rounded">Back To Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
