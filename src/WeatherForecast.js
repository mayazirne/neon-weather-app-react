import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded &&  props.latitude === forecast.lat &&
    props.longitude === forecast.lon) {
        return (
            <div className="WeatherForecast row">
                <ForecastPreview data={forecast.daily[1]} unit={props.unit} timezone={forecast.timezone_offset} />
                <ForecastPreview data={forecast.daily[2]} unit={props.unit} timezone={forecast.timezone_offset} />
                <ForecastPreview data={forecast.daily[3]} unit={props.unit} timezone={forecast.timezone_offset} />
                <ForecastPreview data={forecast.daily[4]} unit={props.unit} timezone={forecast.timezone_offset} />
            </div>
    );
    
    } else { 
    let apiKey = "777f2ae51fd48d180efbcfe9388ca9cb";
    let excludeInfo = 'current,minutely,hourly,alerts';
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${excludeInfo}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
    }
}