import { React } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { Nav } from "./index";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="p-4 text-xl">
        &lt;Michael&gt;<span className="text-red-500"> &lt;/Walters&gt;</span>
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
