import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemparature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
           <div className="wrapper">
          <div className="neon-wrapper">
            <div className="neon-text">
              <span className="city-name">{props.data.city}</span>
              <br />
              <WeatherTemparature celcius={props.data.temperature}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
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
            </div>
            <div className="col-4">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          </div>
    );
    }