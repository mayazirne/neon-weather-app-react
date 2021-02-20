import React, { useState } from "react";

export default function(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahreinheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 +32;
    }

    if (unit === "celsius") {
        return (
        <span>
        {Math.round(props.celsius)}°
                <a href="/">
                 {" "} C {" "}
                </a>
                |
                <a href="/" className="active" onClick={showFahrenheit}>
                 {" "} F
                </a>
              </span>
    );
    } else {
         return (
        <span>
        {Math.round(fahrenheit())}°
        <a href="/" onClick={showCelsius} className="active">
        {" "} C {" "}
        </a>
            
        <a href="/">
        {" "} F
        </a>
        </span>
    );
    }
}