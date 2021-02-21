import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        This project was build by {" "}
        <a
        href="https://www.linkedin.com/in/maya-zirne-788888100/"
        target="_blank"
        className="link"
        >
        Maya Zirne
        </a> and is open-sourced on {" "}
        <a
        href="https://github.com/mayazirne/neon-weather-app-react"
        target="_blank"
        className="link"
        >
         GitHub
        </a>
      </footer>
      </div>
  );
}

