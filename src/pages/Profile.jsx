import React, { useState } from 'react';
import { Bell, Settings, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();
  
  // Generate random number between 1 and 30
  const randomNum = Math.floor(Math.random() * 30) + 1;
  // Handle both .jpeg and .png file extensions
  const fileExtension = [1, 30].includes(randomNum) ? '.jpeg' : 
                       randomNum === 16 ? '.jpg' : '.png';
  const profileImage = `/images/profile_${randomNum}${fileExtension}`;

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');  // Navigate to landing page after successful logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6 relative">
      {/* Header with icons */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-400" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button onClick={() => setShowSettings(!showSettings)} className="relative">
            <Settings className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Settings Popup */}
      {showSettings && (
        <div className="absolute right-0 top-16 w-80 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Settings</h2>
            
            {/* Legal Section */}
            <div className="mb-6">
              <h3 className="text-gray-500 text-sm mb-2">LEGAL</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">🔒</span>
                    <span>Privacy Policy</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">📄</span>
                    <span>Terms of Service</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <h3 className="text-gray-500 text-sm mb-2">PREFERENCES</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">🔔</span>
                    <span>Notifications</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">👥</span>
                    <span>Friends & Leagues</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">💰</span>
                    <span>Activity Feed</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">❓</span>
                    <span>Get help</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Sign Out Button */}
            <button 
              onClick={handleSignOut}
              className="w-full text-red-500 text-left py-4 mt-6 border-t"
            >
              Sign Out
            </button>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">Made with love in Pittsburgh, PA</p>
            </div>
          </div>
        </div>
      )}

      {/* User Info */}
      <div className="text-center space-y-3">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold">Jackson Fitzgerald</h2>
        <p className="text-gray-400 text-lg">#jacksonaa</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold">0</div>
            <div className="text-gray-400">Active groups</div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-black">6</div>
            <div className="text-blue-500 text-sm">See Friends on Bankroll</div>
          </CardContent>
        </Card>
      </div>

      {/* Wallet/Transactions Toggle */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-white rounded-lg text-black font-medium">
          Wallet
        </button>
        <button className="p-4 bg-gray-200 rounded-lg text-gray-600 font-medium">
          Transactions
        </button>
      </div>

      {/* Balance Card */}
      <Card className="bg-white">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-gray-500 text-center">Bankroll Balance</h3>
          <div className="text-4xl font-bold text-center text-black">$0.00</div>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-3 bg-blue-50 rounded-lg text-blue-500 font-medium flex items-center justify-center space-x-2">
              <span>↔</span>
              <span>Transfer</span>
            </button>
            <button className="p-3 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2">
              <span>+</span>
              <span>Add Money</span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center space-y-2 mt-8">
        <p className="text-gray-400">Last updated 1 sec</p>
        <p className="text-gray-400">Made with care in Pittsburgh, PA</p>
      </div>
    </div>
  );
};

export default Profile;
