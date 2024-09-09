// src/components/FaceVerification.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FaceVerification.css"; // Custom CSS for font

const FaceVerification = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle the capture or upload photo
  const handleCapture = async () => {
    if (!image) {
      setError("Please upload or capture a photo.");
      return;
    }

    setIsLoading(true);

    // Simulate face verification API call
    setTimeout(() => {
      // Mock verification result
      const isVerified = Math.random() > 0.2; // 80% chance of success

      if (isVerified) {
        navigate("/profile-setup-success");
      } else {
        setIsLoading(false);
        setError("Face verification failed. Please try again.");
      }
    }, 2000); // Simulate API call delay
  };

  return (
    <div className="face-verification-screen bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/images/romance-background.jpg")' }}></div>

      {/* Content */}
      <div className="z-10 text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Instructions */}
        <h1 className="text-3xl text-green-300 font-love mb-6">
          Face Verification
        </h1>
        <p className="text-gray-700 mb-4">
          To complete your profile setup, please upload a clear photo or capture a live photo.
        </p>

        {/* File Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg py-2 px-4 mb-4"
        />

        {/* Camera Button */}
        <button
          onClick={handleCapture}
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
        >
          {isLoading ? "Verifying..." : "Verify Photo"}
        </button>

        {/* Error Message */}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default FaceVerification;
