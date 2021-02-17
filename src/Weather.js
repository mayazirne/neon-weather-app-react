import React, { useState } from "react";
import axios from"axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready:false });
  function handleResponse (response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

function search() {
  const apiKey = "777f2ae51fd48d180efbcfe9388ca9cb";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div>
       <div className="row">
      <div className="col-sm">
        <form className="search-city" onSubmit={handleSubmit}>
          <input
            type="text"
            id="city-input"
            className="form"
            placeholder="Search for a city"
            autoComplete="off"
            onChange={handleCityChange}
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
        <h3>
          <FormattedDate date={weatherData.date} />
        </h3>
        <WeatherInfo data={weatherData} />
        </div>
  );
  } else {
    search();
    return "Loading..."
  }
  
}