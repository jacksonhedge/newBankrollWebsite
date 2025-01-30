import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import PlatformModal from '../components/platforms/PlatformModal';
import { analyticsService } from '../services/firebase/AnalyticsService';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { usePlatforms } from '../contexts/PlatformsContext';

const LandingPage = () => {
  const { currentUser, loading } = useAuth();
  const { platforms, platformImages, imagesLoading, imagesLoaded, imageErrors, totalPlatforms, categories } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [activeCategory, setActiveCategory] = useState('SWEEPS_CASINO');

  const handlePlatformClick = (platform) => {
    if (currentUser) {
      analyticsService.logPlatformView(platform.id, platform.name, platform.category);
    }
    setSelectedPlatform(platform);
  };

  // Early return with minimal content while auth is initializing
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Bankroll</h1>
            <p className="text-lg sm:text-xl text-gray-400">Your all-in-one platform for managing sports betting and fantasy sports</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-800 backdrop-blur-sm sticky top-0 z-50 bg-gray-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Left section - Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/images/BankrollLogoTransparent.png"
                  alt="Bankroll Logo"
                  className="h-6 sm:h-8 w-auto"
                />
              </Link>
            </div>

            {/* Right section - Auth Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {!currentUser && (
                <>
                  <Link 
                    to="/login"
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    Log in
                  </Link>
                  <Link 
                    to="/signup"
                    className="px-4 sm:px-6 py-2 bg-blue-600 text-sm sm:text-base text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Bankroll</h1>
          <p className="text-lg sm:text-xl text-gray-400">Your all-in-one platform for managing sports betting and fantasy sports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Track Your Bets</h2>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm sm:text-base text-gray-400 mb-6">Keep track of all your sports bets across different platforms in one place</p>
              {currentUser ? (
                <Link to="/wallets" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  View Wallets
                </Link>
              ) : (
                <Link to="/login" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Get Started
                </Link>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Fantasy Sports</h2>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm sm:text-base text-gray-400 mb-6">Connect your fantasy sports accounts and manage them all in one dashboard</p>
              {currentUser ? (
                <Link to="/leagues" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  View Leagues
                </Link>
              ) : (
                <Link to="/login" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Get Started
                </Link>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Social Features</h2>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm sm:text-base text-gray-400 mb-6">Connect with friends, share picks, and compete in friendly competitions</p>
              {currentUser ? (
                <Link to="/friends" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Find Friends
                </Link>
              ) : (
                <Link to="/login" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Get Started
                </Link>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Partners</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === category.id 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'bg-purple-900/30 text-white hover:bg-purple-900/50'}
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {imagesLoading && (
          <LoadingSpinner 
            fullScreen={false}
            color="blue" 
            text={`Loading partners... ${Math.round((imagesLoaded / totalPlatforms) * 100)}%`}
          />
        )}

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {(activeCategory === 'ALL' 
            ? [...platforms]
                .sort((a, b) => {
                  // Always put PlayStar Casino NJ first and Pulsz second
                  if (a.name === 'PlayStar Casino NJ') return -1;
                  if (b.name === 'PlayStar Casino NJ') return 1;
                  if (a.name === 'Pulsz') return -1;
                  if (b.name === 'Pulsz') return 1;

                  // Then sort by category
                  const categoryOrder = {
                    FANTASY: 1,
                    CASINO: 2,
                    SPORTS: 3,
                    SWEEPS_CASINO: 4
                  };
                  return categoryOrder[a.category] - categoryOrder[b.category];
                })
            : platforms.filter(platform => {
                if (platform.category === activeCategory) {
                  // For sweepstakes category, only show enabled platforms
                  if (activeCategory === 'SWEEPS_CASINO') {
                    return !platform.disabled;
                  }
                  return true;
                }
                return false;
              })
          ).map((platform) => (
            <Card 
              key={platform.id}
              className={`${
                platform.name === 'PlayStar Casino NJ' 
                  ? 'bg-blue-500/20' 
                  : platform.disabled
                    ? 'bg-gray-700/40 opacity-50'
                    : 'bg-gray-900/40'
              } border-gray-700 ${!platform.disabled && 'hover:border-blue-500/20'} transition-all duration-200 ${!platform.disabled && 'cursor-pointer'}`}
              onClick={() => !platform.disabled && handlePlatformClick(platform)}
            >
              <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <div className="w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-4 relative">
                  {imagesLoading ? (
                    <div className="w-full h-full bg-gray-700 rounded-lg animate-pulse" />
                  ) : platformImages[platform.id] ? (
                    <img
                      src={platformImages[platform.id]}
                      alt={platform.name}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        // Use the same image element but change its source to the fallback
                        import('../services/firebase/PlatformImageService').then(module => {
                          const PlatformImageService = module.default;
                          const fallbackUrl = PlatformImageService._getDefaultPlaceholder(platform.name);
                          e.target.src = fallbackUrl;
                        });
                      }}
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg" style={{ backgroundColor: 'transparent' }}>
                      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill={
                          {
                            a: '#ef4444', b: '#3b82f6', c: '#8b5cf6', d: '#22c55e', e: '#f97316',
                            f: '#ef4444', g: '#3b82f6', h: '#8b5cf6', i: '#22c55e', j: '#f97316',
                            k: '#ef4444', l: '#3b82f6', m: '#8b5cf6', n: '#22c55e', o: '#f97316',
                            p: '#ef4444', q: '#3b82f6', r: '#8b5cf6', s: '#22c55e', t: '#f97316',
                            u: '#ef4444', v: '#3b82f6', w: '#8b5cf6', x: '#22c55e', y: '#f97316',
                            z: '#ef4444'
                          }[platform.name.charAt(0).toLowerCase()] || '#3b82f6'
                        } />
                        <text x="50" y="50" textAnchor="middle" dy="0.35em" fill="white" fontSize="48" fontWeight="bold" fontFamily="Arial">
                          {platform.name.charAt(0).toUpperCase()}
                        </text>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-white text-sm sm:text-base">
                    {platform.name}
                  </h3>
                  {platform.disabled && (
                    <p className="text-gray-400 text-xs mt-1">{platform.disabledText}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Modal */}
        {selectedPlatform && (
          <PlatformModal
            platform={{
              ...selectedPlatform,
              logo: platformImages[selectedPlatform.id]
            }}
            onClose={() => setSelectedPlatform(null)}
          />
        )}

        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Ready to get started?</h2>
          {currentUser ? (
            <Link to="/partners" className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition-colors">
              View All Partners
            </Link>
          ) : (
            <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition-colors">
              Create Account
            </Link>
          )}
        </div>

        {/* Responsible Gaming Footer */}
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-300 px-4">
          Responsible Gaming: Please gamble responsibly. Available in New Jersey. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
