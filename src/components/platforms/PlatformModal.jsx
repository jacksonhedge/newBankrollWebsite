import React, { useState } from 'react';
import { X, ExternalLink, Wallet } from 'lucide-react';
import { analyticsService } from '../../services/firebase/AnalyticsService';

const PlatformModal = ({ platform, onClose }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleVisit = () => {
    analyticsService.logPlatformVisit(platform.id, platform.name);
    if (platform.url) {
      // Open URL in new tab with security best practices
      const newWindow = window.open();
      if (newWindow) {
        newWindow.opener = null;
        newWindow.location = platform.url;
      }
    }
  };

  const handleConnect = () => {
    analyticsService.logPlatformConnect(platform.id, platform.name);
    setShowComingSoon(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        {/* Content Container */}
        <div className="p-6 space-y-6">
          {/* Platform Logo and Name */}
          <div className="flex flex-col items-center justify-center pt-8">
            <div className="w-24 h-24 mb-4">
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{platform.name}</h2>
          </div>

          {/* Legal States */}
          <div className="text-center">
            <p className="text-gray-600">Legal States: {platform.legalStates || 'Information not available'}</p>
          </div>

          {/* Promotion Details */}
          <div className="bg-white/80 rounded-xl p-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Promotion Details</h3>
            <p className="text-gray-700">{platform.promoDetails || 'No current promotions'}</p>
            {platform.restrictions && (
              <div className="mt-2">
                <h4 className="font-medium text-gray-900">Restrictions</h4>
                <p className="text-gray-600 text-sm">{platform.restrictions}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleVisit}
              className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 
                transition-colors duration-200 flex items-center justify-center space-x-2 group"
            >
              <span>Visit {platform.name}</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleConnect}
              className="w-full py-3 bg-yellow-400 text-gray-900 rounded-xl font-medium 
                hover:bg-yellow-500 transition-colors duration-200"
            >
              Connect {platform.name}
            </button>
          </div>

          {/* Responsible Gaming */}
          <div className="text-center text-sm text-gray-600 pt-4">
            <p>Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[60]">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-lg mx-4 relative border border-gray-700 shadow-2xl">
            <button
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <Wallet className="h-10 w-10 text-yellow-400" />
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Coming Soon!</h3>
                <p className="text-gray-400 text-lg">
                  Get ready for seamless transactions with {platform.name}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 py-4">
                <p className="text-gray-300 text-lg">
                  We're building something special just for you:
                </p>
                <ul className="text-gray-300 text-left space-y-3 max-w-md mx-auto">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Connect your {platform.name} account directly</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Instant deposits with no hassle</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Lightning-fast withdrawals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Track all your gaming activity in one place</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowComingSoon(false)}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl 
                  font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 
                  transform hover:scale-105"
              >
                Can't Wait!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformModal;
