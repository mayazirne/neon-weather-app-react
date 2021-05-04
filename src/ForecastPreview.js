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
    return (
        <div className="ForecastPreview col-3">
        <span className="days">{getDay()}</span>
        <WeatherIcon code={props.data.weather[0].icon} className="small-icons"/>
        <span className="forecast-temp">{Math.round(props.data.temp.day)}°</span>
        </div>
    );
}