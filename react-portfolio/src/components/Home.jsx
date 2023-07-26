import { React } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { Sidebar } from "./index";
import { About } from "./index";
import { Nav } from "./index";
// Home

const Home = () => {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="pt-5 mx-5 mb-10 flex justify-between">
        <div className="bg-slate-300 rounded-md p-2 h-full">
          <button>CV</button>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="mx-5 flex mb-5">
        <About />
      </div>
      <div id="bottom_nav">
        <Nav />
      </div>
    </div>
  );
};

export default Home;
