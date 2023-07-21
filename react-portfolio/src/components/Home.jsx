import { React } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";

// Home

const Home = () => {
  return (
    <div>
      <div className="mb-5">
        <button>CV</button>
        <p>background image needs selecting</p>
        <div>
          <p>Sidebar goes here</p>
        </div>
      </div>
      <div className="mb-5">
        <p>about me goes here</p>
      </div>
      <div>
        <p>contact things</p>
      </div>
    </div>
  );
};

export default Home;
