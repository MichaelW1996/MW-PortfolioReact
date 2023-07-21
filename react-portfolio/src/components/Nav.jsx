import { React } from "react";
import "../assets/css/index.css";

const Nav = () => {
  return (
    <div>
      <ul className="flex p-2 ">
        <li className="p-2 m-2 rounded-md bg-teal-600">Home</li>
        <li className="p-2 m-2 rounded-md bg-teal-600">Projects</li>
        <li className="p-2 m-2 rounded-md bg-teal-600">Contact me</li>
      </ul>
    </div>
  );
};

export default Nav;
