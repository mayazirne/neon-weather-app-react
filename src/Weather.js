import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from"axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready:false });
  function handleResponse (response) {
    setWeatherData({
      ready: true,
      date: "sunday 12:00",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
        <h3>{weatherData.date}</h3>
        <div className="wrapper">
          <div className="neon-wrapper">
            <div className="neon-text">
              <span className="city-name">{weatherData.city}</span>
              <br />
              <span>{Math.round(weatherData.temperature)}</span>°
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
                wind: <span id="wind">{Math.round(weatherData.wind)}</span>{" "}km/h
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

  } else {

  const apiKey = "777f2ae51fd48d180efbcfe9388ca9cb";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
  }
  
}