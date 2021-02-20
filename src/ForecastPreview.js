import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastPreview.css";

export default function ForecastPreview(props) {
    function getDay() {
    let unixTimestamp = props.data.dt;
    let timezoneOffset = props.timezone;
    let localUnixTimestamp = unixTimestamp + timezoneOffset;
    let date = new Date(localUnixTimestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

      function celsiusTemperature() {
    let celsiusTemperature = Math.round(props.data.temp.day);
    return `${celsiusTemperature}°`;
  }
  function fahrenheitTemperature() {
    let fahrenheitTemperature = Math.round((props.data.temp.day * 9) / 5 + 32);
    return `${fahrenheitTemperature}°`;
  }

    if (props.unit === "celsius") {
    return (
        <div className="ForecastPreview col">
        <span className="days">{getDay()}</span>
        <WeatherIcon code={props.data.weather[0].icon} className="small-icons"/>
        <span className="forecast-temp">{celsiusTemperature()}</span>
        </div>
    );
} else {
    return (
        <div className="ForecastPreview col">
        <span className="days">{getDay()}</span>
        <WeatherIcon code={props.data.weather[0].icon} className="small-icons"/>
        <span className="forecast-temp">{fahrenheitTemperature()}</span>
        </div>
    );
    }
}