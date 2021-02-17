import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
           <div className="wrapper">
          <div className="neon-wrapper">
            <div className="neon-text">
              <span className="city-name">{props.data.city}</span>
              <br />
              <span>{Math.round(props.data.temperature)}</span>°
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
                <span className="description">{props.data.description}</span>
              </li>
              <li>
                humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                wind: <span id="wind">{Math.round(props.data.wind)}</span>{" "}km/h
              </li>
            </ul>
            <div className="col text-center main-icon">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          </div>
          </div>
    );
}