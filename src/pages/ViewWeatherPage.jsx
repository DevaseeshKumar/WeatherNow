import React, { useState } from 'react';
import { WiHumidity, WiStrongWind, WiDaySunny, WiCloud, WiRain } from 'react-icons/wi';
import { fetchWeatherByCity } from '../api/WeatherApi';

const ViewWeatherPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      console.error(err);
      setWeather(null);
      setError('City not found. Please try again.');
    }
  };

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('cloud')) return <WiCloud className="text-6xl text-blue-600 mx-auto my-4" />;
    if (desc.includes('rain')) return <WiRain className="text-6xl text-blue-600 mx-auto my-4" />;
    return <WiDaySunny className="text-6xl text-yellow-500 mx-auto my-4" />;
  };

  const ViewWeatherCard = ({ data }) => {
    if (!data) return null;

    return (
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mt-10 mx-auto max-w-lg animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-lg text-gray-600 capitalize mt-1">{data.weather[0].description}</p>
          {getWeatherIcon(data.weather[0].description)}
          <p className="text-5xl font-bold text-blue-800">
            {Math.round(data.main.temp)}°C
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-center text-gray-700">
          <div className="bg-blue-100 p-5 rounded-xl shadow hover:shadow-lg transition">
            <WiHumidity className="text-3xl text-blue-500 mx-auto" />
            <p className="font-semibold mt-2">Humidity</p>
            <p className="text-lg">{data.main.humidity}%</p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl shadow hover:shadow-lg transition">
            <WiStrongWind className="text-3xl text-blue-500 mx-auto" />
            <p className="font-semibold mt-2">Wind</p>
            <p className="text-lg">{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-blue-300 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          🌍 Search City Weather
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 w-full sm:w-64 focus:outline-none shadow-md"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        {weather && <ViewWeatherCard data={weather} />}
      </div>
    </div>
  );
};

export default ViewWeatherPage;
