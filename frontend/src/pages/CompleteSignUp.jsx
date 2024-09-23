import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to complete sign-up
    // Navigate to main app feed on success
    navigate("/main-feed");
  };

  return (
    <div className="complete-signup bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      <h1 className="text-3xl text-green-300 font-love mb-6">Complete Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg py-2 px-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg py-2 px-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg py-2 px-4"
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg py-2 px-4"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg py-2 px-4"
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
        >
          Complete Sign Up
        </button>
      </form>
    </div>
  );
};

export default CompleteSignUp;
