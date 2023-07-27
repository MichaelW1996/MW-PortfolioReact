import { React } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { Sidebar } from "./index";
import { About } from "./index";
import { Nav } from "./index";
// Home

const Home = () => {

  const CVLink = 'https://drive.google.com/file/d/1wA-gFA2ioMNLY-NxGqSMBQedZCJv0u9e/view?usp=sharing';
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="pt-5 mx-5 mb-10 flex flex-col md:flex-row justify-between">
        <div onClick={() => window.open(CVLink, '_blank')} className=" absolute bg-rose-300 font-bold rounded-md h-auto">
          <button className="p-4 h-auto" >CV</button>
        </div>
        <div className="image-container">
          <img id="profilePic"src="../Michael.png" alt="Michael"></img>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="mx-5 flex mb-5">
        <About />
      </div>
      <div id="bottom_nav">
      <ul className="flex p-2 ">
        <Link to="/projects" className="p-2 m-2 text-2xl rounded-md bg-teal-600">Projects</Link>
        {/* <Link to="/contact" className="p-2 m-2 text-2xl rounded-md bg-teal-600">Contact</Link> */}
      </ul>
      </div>
    </div>
  );
};

export default Home;
