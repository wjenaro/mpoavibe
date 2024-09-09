// src/components/FullProfileView.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FullProfileView.css"; // Custom CSS for font

const FullProfileView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Sample profile data (replace with API call or state management)
  const profile = {
    id: 1,
    name: "Jane Doe",
    age: 28,
    bio: "Travel enthusiast and foodie. Love exploring new places and trying new cuisines.",
    interests: "Travel, Music, Photography",
    location: "New York, USA",
    photo: "/images/profile1.jpg",
  };

  // Handle like button click
  const handleLike = () => {
    // Trigger match logic
    navigate("/match-confirmation");
  };

  // Handle report/block button click
  const handleReportBlock = () => {
    // Implement report/block logic
    alert("Profile reported or blocked.");
  };

  return (
    <div className="full-profile-view bg-purple-900 h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="top-nav bg-green-600 flex items-center justify-between p-4 shadow-md">
        {/* Back Button */}
        <button
          onClick={() => navigate("/main-feed")}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* App Logo */}
        <div className="text-white text-2xl font-love">AppName</div>
        {/* Placeholder (could be a settings icon) */}
        <div className="text-white"> </div>
      </div>

      {/* Profile Details */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-center">
          {/* Profile Picture */}
          <img src={profile.photo} alt={profile.name} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
            <p className="text-gray-600 mt-2">{profile.bio}</p>
            <p className="text-gray-600 mt-2">Interests: {profile.interests}</p>
            <p className="text-gray-600 mt-2">Location: {profile.location}</p>
          </div>
          <div className="flex justify-between p-4">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
            >
              Like
            </button>
            {/* Report/Block Button */}
            <button
              onClick={handleReportBlock}
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all"
            >
              Report/Block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProfileView;
