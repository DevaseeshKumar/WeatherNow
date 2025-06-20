// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { WiDaySunny, WiCloudyGusts, WiStars } from 'react-icons/wi';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">🌤️ WeatherNow</h1>
        <p className="text-xl text-gray-700">
          Get accurate weather updates for any city around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        <Link
          to="/weather"
          className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition text-center"
        >
          <WiDaySunny className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Check Weather</h2>
          <p className="text-gray-600 text-sm">Search and view real-time weather conditions.</p>
        </Link>

        <Link
          to="/forecast"
          className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition text-center"
        >
          <WiCloudyGusts className="text-6xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Forecast</h2>
          <p className="text-gray-600 text-sm">View extended forecasts for your city.</p>
        </Link>

        <Link
          to="/about"
          className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition text-center"
        >
          <WiStars className="text-6xl text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About</h2>
          <p className="text-gray-600 text-sm">Learn more about the WeatherNow app.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
