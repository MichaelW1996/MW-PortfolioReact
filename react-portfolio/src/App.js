import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Footer, Header, Home, Projects } from "./components";

function App() {
  return (
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/MW-PortfolioReact/" element={<Home />}/>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/MW-PortfolioReact/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
