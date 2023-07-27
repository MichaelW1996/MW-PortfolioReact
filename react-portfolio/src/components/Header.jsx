import { React } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { Nav } from "./index";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between">
      <Link to="/">
      <h1 className="p-4 text-xl">
        &lt;Michael&gt;<span className="text-red-500"> &lt;/Walters&gt;</span>
      </h1></Link>
      <Nav />
    </header>
  );
};

export default Header;
