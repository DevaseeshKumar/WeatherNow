import React, { useState } from 'react';
import { fetchForecastByCity } from '../api/WeatherApi';
import {
  WiHumidity,
  WiStrongWind,
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiCloudy,
} from 'react-icons/wi';

const weatherIcons = {
  Clear: <WiDaySunny className="text-6xl text-yellow-400 mx-auto" />,
  Clouds: <WiCloudy className="text-6xl text-gray-500 mx-auto" />,
  Rain: <WiRain className="text-6xl text-blue-500 mx-auto" />,
  Thunderstorm: <WiThunderstorm className="text-6xl text-purple-600 mx-auto" />,
  Snow: <WiSnow className="text-6xl text-blue-200 mx-auto" />,
  default: <WiDayCloudy className="text-6xl text-blue-500 mx-auto" />,
};

const ForecastPage = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const data = await fetchForecastByCity(city);
      const grouped = groupForecastByDay(data.list);
      setForecast(grouped);
    } catch (err) {
      console.error('Error fetching forecast data:', err);
      setForecast([]);
      setError('City not found. Please try again.');
    }
  };

  const groupForecastByDay = (list) => {
    const days = {};
    list.forEach((entry) => {
      const date = entry.dt_txt.split(' ')[0];
      if (!days[date]) days[date] = [];
      days[date].push(entry);
    });

    return Object.entries(days).map(([date, entries]) => {
      const temps = entries.map((e) => e.main.temp);
      const avgTemp = temps.reduce((sum, t) => sum + t, 0) / temps.length;
      const mainEntry = entries[4] || entries[0];
      const mainWeather = mainEntry.weather[0];

      return {
        date,
        temp: Math.round(avgTemp),
        weather: mainWeather.main,
        description: mainWeather.description,
        icon: mainWeather.icon,
        humidity: mainEntry.main.humidity,
        wind: mainEntry.wind.speed,
      };
    });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-sky-200 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          📅 Weather Forecast
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 w-full sm:w-64 shadow-md"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {forecast.map((day) => (
            <div
              key={day.date}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-gray-800 animate-fade-in hover:scale-[1.02] transition transform duration-300"
            >
              <h3 className="text-xl font-bold text-center mb-2 text-gray-700">
                {formatDate(day.date)}
              </h3>
              {weatherIcons[day.weather] || weatherIcons.default}
              <p className="text-center text-3xl font-extrabold text-blue-800 mt-2">
                {day.temp}°C
              </p>
              <p className="text-center capitalize text-gray-600 mb-4">
                {day.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-center text-gray-700">
                <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-lg">
                  <WiHumidity className="text-3xl text-blue-500 mx-auto" />
                  <p className="text-sm font-semibold">Humidity</p>
                  <p>{day.humidity}%</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-lg">
                  <WiStrongWind className="text-3xl text-blue-500 mx-auto" />
                  <p className="text-sm font-semibold">Wind</p>
                  <p>{day.wind} m/s</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastPage;
