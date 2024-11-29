import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
    const [city, setCity] = useState('Toronto');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        if (!city) {
            setError('Please enter a city name');
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_WEATHER}`
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    const handleSearch = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={handleSearch}
                placeholder="Enter city name"
            />
            {error && <p className="error">{error}</p>}
            <div className="weather-display">
                {weather && <WeatherDisplay weather={weather} />}
            </div>
        </div>
    );
};

export default App;
