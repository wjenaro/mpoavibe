// src/components/PaymentSuccess.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentSuccess.css"; // Custom CSS for font

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the main match feed or user profile
    navigate("/main-feed");
  };

  return (
    <div className="payment-success bg-purple-900 h-screen flex flex-col items-center justify-center p-4">
      {/* Top Bar */}
      <div className="top-bar bg-green-600 w-full flex items-center p-4 shadow-md">
        <button
          onClick={() => navigate("/user-profile")}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white font-love text-2xl ml-4">Payment Success</h1>
      </div>

      {/* Success Message */}
      <div className="mt-10 text-center">
        <h2 className="text-white font-love text-xl mb-4">Congratulations!</h2>
        <p className="text-white text-lg mb-6">Your payment was successful and your subscription has been activated.</p>
        <img
          src="/images/success.png"
          alt="Success"
          className="w-32 h-32 mb-6"
        />
        <button
          onClick={handleContinue}
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
