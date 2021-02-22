import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container-main">
      <Weather defaultCity="London" />
      </div>
      <footer>
         open-sourced on {" "}
        <a
        href="https://github.com/mayazirne/neon-weather-app-react"
        target="_blank"
        className="link"
        >
         GitHub {" "}
        </a>{" "} ▪ {" "} hosted on {" "}
        <a
        href="https://hopeful-poincare-7b41bf.netlify.app/"
        target="_blank"
        className="link"
        >Netlify</a>
         ▪ {" "} by{" "}
         <a
        href="https://www.linkedin.com/in/maya-zirne-788888100/"
        target="_blank"
        className="link"
        >
        Maya Zirne 
        </a>
      </footer>
      </div>
  );
}

