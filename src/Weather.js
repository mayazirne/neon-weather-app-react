import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 5,
    date: "Sunday 12:00",
    description: "Sunny",
    humidity: "50",
    wind: "10"
  };

  return (
    <div>
       <div className="row">
      <div className="col-sm">
        <form className="search-city">
          <input
            type="text"
            id="city-input"
            className="form"
            placeholder="Search for a city"
            autoComplete="off"
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button id="current-location-button">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
      </div>
    </div>
        <h3>{weatherData.time}</h3>
        <div className="wrapper">
          <div className="neon-wrapper">
            <div className="neon-text">
              <span className="city-name">{weatherData.city}</span>
              <br />
              <span>{weatherData.temperature}</span>°
              <span id="units">
                <a href="/" id="celsius-link">
                 {" "} C {" "}
                </a>
                |
                <a href="/" id="fahrenheit-link" className="active">
                 {" "} F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <span className="description">{weatherData.description}</span>
              </li>
              <li>
                humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                wind: <span id="wind">{weatherData.wind}</span>km/h
              </li>
            </ul>
            <div className="col text-center main-icon">
              <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="white"
    size={180}
    animate={true}
  />
            </div>
          </div>
        </div>
        <hr />
      </div>
  );
}