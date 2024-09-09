// src/components/Settings.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css"; // Custom CSS for font

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(true);
  const [privacy, setPrivacy] = useState(true);

  const handleToggleNotifications = () => setNotifications(!notifications);
  const handleToggleLocation = () => setLocation(!location);
  const handleTogglePrivacy = () => setPrivacy(!privacy);

  const handleResetPassword = () => {
    // Implement password reset functionality
    alert("Password reset feature is not implemented yet.");
  };

  const handleClearData = () => {
    // Implement data clearing functionality
    alert("Clear data feature is not implemented yet.");
  };

  return (
    <div className="settings bg-purple-900 h-screen p-4">
      {/* Top Bar */}
      <div className="top-bar bg-green-600 flex items-center p-4 shadow-md">
        <button
          onClick={() => navigate("/main-feed")}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white font-love text-2xl ml-4">Settings</h1>
      </div>

      {/* Settings Options */}
      <div className="mt-6">
        <div className="settings-option bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-white font-love text-lg mb-2">Notifications</h2>
          <div className="flex items-center">
            <label className="text-white mr-4">Enable Notifications</label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleToggleNotifications}
              className="toggle-switch"
            />
          </div>
        </div>

        <div className="settings-option bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-white font-love text-lg mb-2">Location Sharing</h2>
          <div className="flex items-center">
            <label className="text-white mr-4">Share Location</label>
            <input
              type="checkbox"
              checked={location}
              onChange={handleToggleLocation}
              className="toggle-switch"
            />
          </div>
        </div>

        <div className="settings-option bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-white font-love text-lg mb-2">Privacy Settings</h2>
          <div className="flex items-center">
            <label className="text-white mr-4">Enable Privacy Mode</label>
            <input
              type="checkbox"
              checked={privacy}
              onChange={handleTogglePrivacy}
              className="toggle-switch"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleResetPassword}
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all mb-4"
          >
            Reset Password
          </button>
          <button
            onClick={handleClearData}
            className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
          >
            Clear Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
