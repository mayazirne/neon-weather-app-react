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
         Open-sourced on {" "}
        <a
        href="https://github.com/mayazirne/neon-weather-app-react"
        target="_blank"
        className="link"
        >
         GitHub {" "}
        </a>
         by{" "}
         <a
        href="https://www.linkedin.com/in/maya-zirne-788888100/"
        target="_blank"
        className="link"
        >
        Maya Zirne {" "}
        </a>
      </footer>
      </div>
  );
}

