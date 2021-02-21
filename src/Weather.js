import React, { useState } from "react";
import axios from"axios";
import Loader from 'react-loader-spinner';
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready:false });

  function handleResponse (response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
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

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  function searchLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "777f2ae51fd48d180efbcfe9388ca9cb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
       <div className="row">
      <div className="col-sm">
        <form className="search-city" onSubmit={handleSubmit}>
          <input
            type="search"
            id="city-input"
            className="form"
            placeholder="Search for a city"
            autoComplete="off"
             autoFocus
            onChange={handleCityChange}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button id="current-location-button">
            <i className="fas fa-map-marker-alt" onClick={getCurrentLocation}></i>
          </button>
        </form>
      </div>
    </div>
        <h3>
          <FormattedDate date={weatherData.date} />
        </h3>
        <WeatherInfo data={weatherData}  />
          <Forecast city={weatherData.city} latitude={weatherData.lat} longitude={weatherData.lon} />
          </div>
  );
  } else {
    search();
    return <center><Loader type="ThreeDots" color="#ffd8d8" height={100} width={100} timeout={3000} /></center>
  }
}