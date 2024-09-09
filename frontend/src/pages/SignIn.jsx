// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Custom CSS for font

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in validation or API call here

    // Mock sign-in success
    const isSuccess = true; // Replace with actual authentication logic

    if (isSuccess) {
      navigate("/main-feed"); // Redirect to Main Match Feed
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="signin-screen bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/images/romance-background.jpg")' }}></div>

      {/* Content */}
      <div className="z-10 text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* App Logo */}
        <h1 className="text-3xl text-green-300 font-love mb-6">
          Sign In
        </h1>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Sign In
          </button>

          {/* Error Message */}
          {error && <p className="mt-4 text-red-600">{error}</p>}

          {/* Forgot Password Link */}
          <a
            href="/forgot-password"
            className="text-green-500 font-semibold hover:underline mt-4 block"
          >
            Forgot Password?
          </a>

          {/* Sign Up Link */}
          <p className="mt-4 text-gray-700">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
