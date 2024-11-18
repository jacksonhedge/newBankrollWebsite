import React from 'react';
import { X } from 'lucide-react';
import { analyticsService } from '../../services/firebase/AnalyticsService';

const PlatformModal = ({ platform, onClose }) => {
  const handleVisit = () => {
    analyticsService.logPlatformVisit(platform.id, platform.name);
    // Add actual visit logic here
  };

  const handleConnect = () => {
    analyticsService.logPlatformConnect(platform.id, platform.name);
    // Add actual connect logic here
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full"
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
                transition-colors duration-200"
            >
              Visit {platform.name}
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
    </div>
  );
};

export default PlatformModal;
