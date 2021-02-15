import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container-main">
      <Weather />
      </div>
      <footer>
        This project was build by {" "}
        <a
        href="https://www.linkedin.com/in/maya-zirne-788888100/"
        target="_blank"
        className="link"
        >
        Maya Zirne
        </a> and is {" "}
        <a
        href="https://github.com/mayazirne/neon-weather-app-react"
        target="_blank"
        className="link"
        >
        open-sourced on GitHub
        </a>
      </footer>
      </div>
  );
}

