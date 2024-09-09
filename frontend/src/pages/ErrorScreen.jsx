// src/components/ErrorScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorScreen.css"; // Custom CSS for font

const ErrorScreen = ({ message, retryPath, previousPath }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(retryPath); // Navigate to the screen where the error occurred
  };

  const handleBack = () => {
    navigate(previousPath); // Navigate to the previous screen
  };

  return (
    <div className="error-screen bg-purple-900 h-screen flex flex-col items-center justify-center p-4">
      {/* Error Message */}
      <div className="text-center">
        <h2 className="text-red-600 font-love text-xl mb-4">Oops! Something went wrong.</h2>
        <p className="text-white text-lg mb-6">{message}</p>
        <img
          src="/images/error.png"
          alt="Error"
          className="w-32 h-32 mb-6"
        />
        <button
          onClick={handleRetry}
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all mb-4"
        >
          Retry
        </button>
        <button
          onClick={handleBack}
          className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
