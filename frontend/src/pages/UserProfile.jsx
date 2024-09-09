// src/components/UserProfile.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css"; // Custom CSS for font

const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Love exploring new places and meeting new people.",
    interests: ["Travel", "Music", "Photography"],
    profilePic: "/images/profile1.jpg",
    subscriptionStatus: "Free"
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Save logic here (e.g., API call to update profile)
    setEditing(false);
  };

  const handleLogout = () => {
    // Logout logic here
    navigate("/signin");
  };

  return (
    <div className="user-profile bg-purple-900 h-screen flex flex-col p-4">
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
        <h1 className="text-white font-love text-2xl ml-4">Profile</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-4">
        <img
          src={profile.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-green-600"
        />
        <button
          className="bg-green-600 text-white font-semibold py-1 px-4 rounded-lg shadow-lg hover:bg-green-700 transition-all"
          onClick={() => alert("Upload functionality to be implemented")}
        >
          Change Picture
        </button>
      </div>

      {/* Editable Fields */}
      <div className="mt-6 px-4">
        <label className="text-white font-love text-lg block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          disabled={!editing}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <label className="text-white font-love text-lg block mb-2">Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          disabled={!editing}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <label className="text-white font-love text-lg block mb-2">Interests</label>
        <input
          type="text"
          name="interests"
          value={profile.interests.join(", ")}
          onChange={(e) => handleChange({ target: { name: 'interests', value: e.target.value.split(", ") } })}
          disabled={!editing}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        {/* Subscription Status */}
        <div className="text-white font-love text-lg mb-4">
          <p>Subscription Status: {profile.subscriptionStatus}</p>
          <a
            href="/upgrade"
            className="text-green-400 underline"
          >
            Upgrade Subscription
          </a>
        </div>

        {/* Action Buttons */}
        {editing ? (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
          >
            Edit
          </button>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
