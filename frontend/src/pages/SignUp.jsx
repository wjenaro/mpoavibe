// src/components/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Custom CSS for font

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    interests: "",
    profilePicture: null,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any form validation or API call here

    // Navigate to Face Verification screen
    navigate("/face-verification");
  };

  return (
    <div className="signup-screen bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/images/romance-background.jpg")' }}></div>

      {/* Content */}
      <div className="z-10 text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* App Logo */}
        <h1 className="text-3xl text-green-300 font-love mb-6">
          Sign Up
        </h1>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
            required
          />

          {/* Email/Phone */}
          <input
            type="text"
            name="email"
            placeholder="Email or Phone"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
            required
          />

          {/* Interests */}
          <input
            type="text"
            name="interests"
            placeholder="Interests (comma-separated)"
            value={formData.interests}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
          />

          {/* Profile Picture Upload */}
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
          />

          {/* Optional Additional Information */}
          <textarea
            name="additionalInfo"
            placeholder="Additional Information (Hobbies, Preferences)"
            className="border border-gray-300 rounded-lg py-2 px-4"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Submit
          </button>
        </form>

        {/* Link to Sign In */}
        <p className="mt-4 text-gray-700">
          Already have an account?{" "}
          <a href="/signin" className="text-green-500 font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
