// src/components/MainFeed.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainFeed.css"; // Custom CSS for font

const MainFeed = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([
    // Example profiles
    { id: 1, name: "Jane Doe", interests: "Travel, Music", photo: "/images/profile1.jpg" },
    { id: 2, name: "John Smith", interests: "Cooking, Hiking", photo: "/images/profile2.jpg" },
  ]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  // Handle swipe right (like) or left (skip)
  const handleSwipe = (direction) => {
    if (direction === "right") {
      // Match with user
      navigate("/match-confirmation");
    } else {
      // Skip to next profile
      setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }
  };

  return (
    <div className="main-feed-screen bg-purple-900 h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="top-nav bg-green-600 flex items-center justify-between p-4 shadow-md">
        {/* Menu Icon */}
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* App Logo */}
        <div className="text-white text-2xl font-love">AppName</div>
        {/* Search/Filter Icon */}
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0l4 4m-4-4v12m0 0h-6m6 0h6m0 0l-4-4m4 4H5" />
          </svg>
        </button>
      </div>

      {/* Main Section */}
      <div className="flex-grow flex items-center justify-center p-4">
        {profiles.length > 0 && (
          <div className="relative w-full max-w-md">
            {/* Profile Card */}
            <div className="profile-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={profiles[currentProfileIndex].photo} alt={profiles[currentProfileIndex].name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{profiles[currentProfileIndex].name}</h2>
                <p className="text-gray-600">{profiles[currentProfileIndex].interests}</p>
              </div>
            </div>

            {/* Swipe Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <button
                onClick={() => handleSwipe("left")}
                className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Skip
              </button>
              <button
                onClick={() => handleSwipe("right")}
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition-all"
              >
                Like
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav bg-green-600 flex items-center justify-between p-4 shadow-md">
        {/* Profile Icon */}
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 6.5a3 3 0 11-3-3 3 3 0 013 3zM20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          </svg>
        </button>
        {/* Home Icon (active) */}
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h2v10H3V12zm4-4h2v14H7V8zm4 0h2v14h-2V8zm4 0h2v14h-2V8zm4 0h2v14h-2V8z" />
          </svg>
        </button>
        {/* Chat Icon */}
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 12h16M4 16h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainFeed;
