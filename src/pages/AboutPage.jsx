import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-2xl text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">About WeatherNow</h2>
        <p className="text-lg text-gray-700 mb-4">
          WeatherNow is your go-to application for real-time weather updates around the globe.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to provide accurate and up-to-date weather information so you can confidently plan your day,
          your travel, and your life.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
