import { React } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/index.css";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-b-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        {/* <Link to="/" className="flex items-center"> */}
        <img src="" className="h-10 mr-3 ml-10" alt="logo" />
        <span className="self-center text-2xl text-sky-400 whitespace-nowrap">
          Michael
          <span className="text-cyan-700">Walters</span>
        </span>
        {/* </Link> */}
        <div className="">{/* Courses */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
