// src/components/HomeScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeScreen.css"; // Custom CSS for font

const HomeScreen = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="splash-screen bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/images/romance-background.jpg")' }}></div>
      
      {/* Content */}
      <div className="z-10 text-center">
        {/* App Logo */}
        <h1 className="text-4xl text-green-300 font-love mb-8">
          LoveConnect
        </h1>

        {/* Sign In and Sign Up Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleSignIn}
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
