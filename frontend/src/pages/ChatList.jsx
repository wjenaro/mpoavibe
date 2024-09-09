// src/components/ChatList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatList.css"; // Custom CSS for font

const chatData = [
  { id: 1, name: "Alice", latestMessage: "Hey! How's it going?", profilePic: "/images/profile1.jpg" },
  { id: 2, name: "Bob", latestMessage: "Are you free this weekend?", profilePic: "/images/profile2.jpg" },
  // Add more chat data as needed
];

const ChatList = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-list bg-purple-900 h-screen p-4">
      <h1 className="text-3xl font-bold text-white mb-4">Chats</h1>
      <div className="flex flex-col gap-4">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="chat-item bg-gray-800 flex items-center p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
            onClick={() => navigate(`/chat/${chat.name}`)}
          >
            <img
              src={chat.profilePic}
              alt={`${chat.name}'s profile`}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4 flex-grow">
              <div className="text-white font-love text-lg">{chat.name}</div>
              <div className="text-gray-300 text-sm">{chat.latestMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
