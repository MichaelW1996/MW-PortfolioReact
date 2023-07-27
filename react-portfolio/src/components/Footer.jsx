import { React } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { Email } from "./index";  

// footers

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-900 mb-0 bg-white bg-opacity-90 border-t-0 left-0 w-full z-0">
      <div className="py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col items-start">
            <h2 className="text-base font-bold mb-4">
              Michael <span className="text-red-500">Walters</span>
            </h2>
          </div>

          <div className="flex items-center ">
            <a
              href="https://github.com/MichaelW1996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-sm hover:text-blue-300"
            >
              <FaGithub className="inline-block text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 py-4">
        <div className="flex flex-wrap justify-center text-sm">
          <Email/>
        </div>
        <p className="text-xs text-center mt-4">
          &copy; {year} Michael Walters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
