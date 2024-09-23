// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";
import SignUp from "./pages/SignUp";
import FaceVerification from "./pages/FaceVerification";
import SignIn from "./pages/SignIn";
import MainFeed from "./pages/MainFeed";
import FullProfileView from "./pages/FullProfileView";
import MatchConfirmation from "./pages/MatchConfirmation";
import Chat from "./pages/Chat";
import ChatList from "./pages/ChatList";
import UserProfile from "./pages/UserProfile";
import SubscriptionUpgrade from "./pages/SubscriptionUpgrade";
import PaymentSuccess from "./pages/PaymentSuccess";
import Settings from "./pages/Settings";
import ErrorScreen from "./pages/ErrorScreen";
import SignUpOptions from "./pages/SignUpOptions";
import PhoneVerification from "./pages/PhoneVerification";
import CompleteSignUp from "./pages/CompleteSignUp";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/face-verification" element={<FaceVerification/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/main-feed" element={<MainFeed/>}/>
        <Route path="/profile/:id" element={<FullProfileView/>}/>
        <Route path="/match-confirmation/:userName" element={<MatchConfirmation/>}/>
        <Route path="/chat/:matchName" element={<Chat/>}/>
        <Route path="/chat-list" element={<ChatList/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/signup-options" element={<SignUpOptions/>}/>
        <Route path="/phone-verification" element={<PhoneVerification/>}/>
        <Route path="/complete-signup" element={<CompleteSignUp/>}/>
        <Route path="/subscription-upgrade" element={<SubscriptionUpgrade/>}/>
        <Route path="/payment-success" element={<PaymentSuccess/>}/>
        <Route path="/settings" element={<Settings/>}/>

         {/* Error Route */}
         <Route
            path="/error"
            element={
              <ErrorScreen 
                message="Something went wrong. Please try again."
                retryPath="/main-feed"
                previousPath="/"
              />
            }
          />
          {/* Add other routes here as needed */}
       
      </Routes>
    </Router>
  );
};

export default App;
