// src/components/SubscriptionUpgrade.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SubscriptionUpgrade.css"; // Custom CSS for font

const SubscriptionUpgrade = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("weekly");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    // Redirect to payment processing (integrate with Stripe/PayPal/Mpesa/Skrill)
    navigate("/payment-success");
  };

  return (
    <div className="subscription-upgrade bg-purple-900 h-screen p-4">
      {/* Top Bar */}
      <div className="top-bar bg-green-600 flex items-center p-4 shadow-md">
        <button
          onClick={() => navigate("/user-profile")}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white font-love text-2xl ml-4">Upgrade Subscription</h1>
      </div>

      {/* Subscription Plans */}
      <div className="mt-4">
        <h2 className="text-white font-love text-xl mb-4">Choose Your Plan</h2>
        <div className="flex flex-col gap-4">
          <div
            onClick={() => handlePlanChange("weekly")}
            className={`plan-option p-4 rounded-lg cursor-pointer border-2 ${selectedPlan === "weekly" ? "border-green-600" : "border-gray-300"} bg-gray-800 hover:bg-gray-700 transition-all`}
          >
            <h3 className="text-white text-lg font-love">Weekly Plan</h3>
            <p className="text-gray-300">Access to all features for a week.</p>
            <p className="text-green-400 font-bold">$10</p>
          </div>
          <div
            onClick={() => handlePlanChange("monthly")}
            className={`plan-option p-4 rounded-lg cursor-pointer border-2 ${selectedPlan === "monthly" ? "border-green-600" : "border-gray-300"} bg-gray-800 hover:bg-gray-700 transition-all`}
          >
            <h3 className="text-white text-lg font-love">Monthly Plan</h3>
            <p className="text-gray-300">Access to all features for a month.</p>
            <p className="text-green-400 font-bold">$35</p>
          </div>
        </div>
      </div>

      {/* Subscription Benefits */}
      <div className="mt-6 text-white">
        <h2 className="font-love text-xl mb-2">Benefits</h2>
        <ul className="list-disc pl-5">
          <li>Unlimited swipes</li>
          <li>Ability to chat with matches</li>
          <li>Access to premium profiles</li>
        </ul>
      </div>

      {/* Payment Options */}
      <div className="mt-6">
        <button
          onClick={handlePayment}
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default SubscriptionUpgrade;
