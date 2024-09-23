import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpOptions = () => {
  const navigate = useNavigate();

  // Handle navigation to phone verification
  const handlePhoneSignUp = () => {
    navigate("/phone-verification");
  };

  // Handle Google Authentication
  const handleGoogleAuth = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="signup-options bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      <h1 className="text-3xl text-green-300 font-love mb-8">Sign Up</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={handlePhoneSignUp}
          className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-all"
        >
          Sign Up with Phone
        </button>
        <button
          onClick={handleGoogleAuth}
          className="flex items-center justify-center bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-all"
        >
          <img
            src="/images/google-icon.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpOptions;
