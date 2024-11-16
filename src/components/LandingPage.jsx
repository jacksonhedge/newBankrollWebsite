// src/components/LandingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import AnimatedGradientBackground from './AnimatedGradientBackground';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen text-white">
      <AnimatedGradientBackground />
      
      {/* Navigation Bar */}
      <nav className="border-b border-purple-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left section */}
            <div className="flex items-center space-x-8">
              {/* Logo placeholder */}
              <div className="flex-shrink-0">
                <img
                  src="/api/placeholder/120/40"
                  alt="Bankroll Logo"
                  className="h-8"
                />
              </div>
              
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {/* What We Offer Dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>What We Offer</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-purple-900 rounded-md shadow-lg py-1">
                      <a href="#" className="block px-4 py-2 hover:bg-purple-800">
                        Feature 1
                      </a>
                      <a href="#" className="block px-4 py-2 hover:bg-purple-800">
                        Feature 2
                      </a>
                      <a href="#" className="block px-4 py-2 hover:bg-purple-800">
                        Feature 3
                      </a>
                    </div>
                  )}
                </div>
                
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Spend Card
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Invest
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Bankroll Manager
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Learn
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Support
                </a>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white hover:text-purple-400 transition-colors">
                Log in
              </button>
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your new betting wallet
          </h1>
          <p className="text-xl text-purple-300 mb-8">
            Coming August 2024
          </p>
          <button 
            className="px-8 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition-colors"
            onClick={handleSignUp}
          >
            Join the waitlist
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-purple-900 p-6 rounded-lg hover:bg-purple-800 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Smart Spending</h3>
            <p className="text-purple-200">
              Track your spending and earn rewards on every transaction
            </p>
          </div>
          <div className="bg-purple-900 p-6 rounded-lg hover:bg-purple-800 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Intelligent Investing</h3>
            <p className="text-purple-200">
              Make informed decisions with our advanced analytics
            </p>
          </div>
          <div className="bg-purple-900 p-6 rounded-lg hover:bg-purple-800 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Bankroll Management</h3>
            <p className="text-purple-200">
              Keep your finances in check with our powerful tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;