import logo from "./logo.svg";
import "./App.css";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;