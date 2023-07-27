import { React } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";

const Nav = () => {
  return (
    <div>
      <ul className="flex p-2 ">
        <Link to="/" className="p-2 m-2 rounded-md text-xl bg-teal-600">Home</Link>
        <Link to="/projects" className="p-2 m-2 rounded-md text-xl bg-teal-600">Projects</Link>
        {/* <Link to="/contact" className="p-2 m-2 rounded-md text-xl bg-teal-600">Contact</Link> */}
      </ul>
    </div>
  );
};

export default Nav;
