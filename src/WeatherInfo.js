import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
           <div className="wrapper">
          <div className="neon-wrapper">
            <div className="neon-text">
              <span className="city-name">{props.data.city}</span>
              <br />
              <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>
            </div>
          </div>
        </div>
    
        <div className="row">
            <div className="col text-end">
              <WeatherIcon code={props.data.icon} />
              </div>
              <div className="col text-start">
                <ul>
              <li>
                <span className="description">{props.data.description}</span>
              </li>
              <li >
                humidity: <span className="bigger">{props.data.humidity}</span>%
              </li>
              <li>
                wind: <span className="bigger">{Math.round(props.data.wind)}{" "} </span>km/h
              </li>
            </ul>
            </div>
            </div>
            </div>
            
    );
    }