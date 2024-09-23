import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneVerification = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // API call to send verification code
    // Assume a code is sent
    setIsCodeSent(true);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    // API call to verify the code
    if (verificationCode === "123456") {
      // After verification, navigate to the full sign-up form
      navigate("/complete-signup");
    } else {
      alert("Invalid code");
    }
  };

  return (
    <div className="phone-verification bg-purple-900 h-screen flex flex-col items-center justify-center relative">
      <h1 className="text-3xl text-green-300 font-love mb-6">Phone Verification</h1>
      {!isCodeSent ? (
        <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Send Verification Code
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerificationSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Verify and Continue
          </button>
        </form>
      )}
    </div>
  );
};

export default PhoneVerification;
