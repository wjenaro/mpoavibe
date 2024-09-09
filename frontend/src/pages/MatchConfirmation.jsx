// src/components/MatchConfirmation.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MatchConfirmation.css"; // Custom CSS for font

const MatchConfirmation = () => {
  const navigate = useNavigate();
  const { userName } = useParams(); // Example: retrieve user name from URL params

  return (
    <div className="match-confirmation-screen bg-purple-900 h-screen flex flex-col items-center justify-center p-4">
      {/* Message */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">You've Matched with {userName}!</h1>
        <p className="text-lg text-gray-300">Start chatting or keep discovering more profiles.</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4">
        {/* Start Chat Button */}
        <button
          onClick={() => navigate("/chat")}
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          Start Chat
        </button>

        {/* Continue Matching Button */}
        <button
          onClick={() => navigate("/main-feed")}
          className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-800 transition-all"
        >
          Continue Matching
        </button>
      </div>
    </div>
  );
};

export default MatchConfirmation;
