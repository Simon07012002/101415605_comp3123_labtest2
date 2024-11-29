import React from 'react';

const WeatherDisplay = ({ weather }) => {
    if (!weather) return null;

    return (
        <div>
            <h2>{weather.name}</h2>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
            <p>{weather.weather[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
            />
        </div>
    );
};

export default WeatherDisplay;
