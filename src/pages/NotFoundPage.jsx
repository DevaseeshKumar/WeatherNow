import React from 'react';
import { Link } from 'react-router-dom';
import { WiDayFog } from 'react-icons/wi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center px-4">
      <div className="text-center bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl animate-fade-in">
        <WiDayFog className="text-blue-500 text-7xl mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-blue-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
