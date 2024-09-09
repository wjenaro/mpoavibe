// src/components/Chat.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Chat.css"; // Custom CSS for font

const Chat = () => {
  const navigate = useNavigate();
  const { matchName } = useParams(); // Example: retrieve match name from URL params

  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!", sender: "received" },
    { id: 2, text: "Hello! How's it going?", sender: "sent" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "sent" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-screen bg-purple-900 h-screen flex flex-col">
      {/* Top Bar */}
      <div className="top-bar bg-green-600 flex items-center p-4 shadow-md">
        {/* Back Button */}
        <button
          onClick={() => navigate("/main-feed")}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Profile Picture and Name */}
        <div className="flex items-center ml-4">
          <img
            src="/images/profile1.jpg" // Placeholder, replace with dynamic data
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2 text-white font-love text-lg">{matchName}</div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-bubble ${msg.sender === "sent" ? "bg-green-600 text-white self-end" : "bg-gray-800 text-white self-start"} p-3 mb-2 rounded-lg`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="message-input bg-white p-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
