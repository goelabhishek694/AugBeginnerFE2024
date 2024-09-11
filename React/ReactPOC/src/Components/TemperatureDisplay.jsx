import React from 'react'

function TemperatureDisplay({temperature}) {
    const fahrenheit = (temperature * 9 / 5) + 32;
    console.log("temperature display rendered");
  return (
    <div>
        <h1>TemperatureDisplay</h1>
        <p>Temperature in Celsius: {temperature} °C</p>
        <p>Temperature in Farenheit: {fahrenheit} °F</p>
    </div>
  )
}

export default TemperatureDisplay