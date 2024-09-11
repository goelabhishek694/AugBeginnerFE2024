import React, { useState } from 'react'

function TemperatureInput({temperature, updateTemperature}) {
console.log("temperature input rendered");
  return (
    <div>
        <label>Enter Temperature
        <input type='number' value={temperature} onChange={(e)=>updateTemperature(e.target.value)}/>
        </label>
    </div>
  )
}

export default TemperatureInput