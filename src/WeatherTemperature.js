import React, { useState } from "react";

export default function(props) {
    const [unit, setUnit] = useState("celcius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahreinheit");
    }

    function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    function fahrenheit() {
        return (props.celcius * 9) / 5 +32;
    }

    if (unit === "celcius") {
        return (
        <span>
        <span>{Math.round(props.celcius)}</span>°
              <span id="units">
                <a href="/">
                 {" "} C {" "}
                </a>
                |
                <a href="/" className="active" onClick={showFahrenheit}>
                 {" "} F
                </a>
              </span>
              </span>
    );
    } else {
         return (
        <span>
        <span>{Math.round(fahrenheit())}</span>°
              <span id="units">
                <a href="/" onClick={showCelcius} className="active">
                 {" "} C {" "}
                </a>
                |
                <a href="/">
                 {" "} F
                </a>
              </span>
              </span>
    );
    }
    
}