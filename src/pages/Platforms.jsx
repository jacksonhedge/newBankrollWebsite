import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import PlatformModal from '../components/platforms/PlatformModal';

const Platforms = () => {
  const [activeCategory, setActiveCategory] = useState('FANTASY');
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'FANTASY', label: 'FANTASY' },
    { id: 'CASINO', label: 'CASINO' },
    { id: 'SPORTS BETTING', label: 'SPORTS BETTING' },
    { id: 'POKER', label: 'POKER' }
  ];

  const platforms = [
    { 
      id: 'prizepicks', 
      name: 'PrizePicks (18+)', 
      category: 'FANTASY', 
      logo: '/images/prizepicks.png',
      legalStates: 'AK, CA, FL, GA, IL, KS, KY, MN, NE, NM, NC, OK, OR, RI, SC, SD, TX, UT, VT, WI, WY',
      promoDetails: 'Get 100% deposit match up to $100',
      restrictions: 'First-time users only. Must be 18+'
    },
    { 
      id: 'sleeper-hedge', 
      name: 'Sleeper Picks - Hedge (18+)', 
      category: 'FANTASY', 
      logo: '/images/sleeperFantasy.png',
      legalStates: 'All states except CT, DE, IL, LA, MT, NV',
      promoDetails: '$25 sign-up bonus',
      restrictions: 'New users only. Must be 18+'
    },
    { 
      id: 'fanduel', 
      name: 'FanDuel Casino (21+)', 
      category: 'CASINO', 
      logo: '/images/fanduel.png',
      legalStates: 'MI, NJ, PA, WV',
      promoDetails: '100% match up to $2000 + $100 in site credit',
      restrictions: 'First-time casino players only. Must be 21+'
    },
    { 
      id: 'betmgm', 
      name: 'BetMGM Casino (21+)', 
      category: 'CASINO', 
      logo: '/images/betmgm.png',
      legalStates: 'MI, NJ, PA, WV',
      promoDetails: '100% deposit match up to $1000 + $25 free play',
      restrictions: 'New customers only. Must be 21+'
    },
    { 
      id: 'pokerstars', 
      name: 'PokerStars Casino (21+)', 
      category: 'CASINO', 
      logo: '/images/pokerstars.png',
      legalStates: 'MI, NJ, PA',
      promoDetails: '$50 free play with first deposit',
      restrictions: 'New players only. Must be 21+'
    },
    { 
      id: 'bet365', 
      name: 'Bet365 Casino (21+)', 
      category: 'CASINO', 
      logo: '/images/bet365logo.png',
      legalStates: 'NJ, CO, OH, VA, IA, KY',
      promoDetails: 'Bet $1, Get $365 in Bonus Bets',
      restrictions: 'New players only. Must be 21+'
    },
    { 
      id: 'caesarspalace', 
      name: 'Caesars Casino (21+)', 
      category: 'CASINO', 
      logo: '/images/caesarsCasino.png',
      legalStates: 'MI, NJ, PA, WV',
      promoDetails: '100% deposit match up to $1000 + $10 free',
      restrictions: 'New users only. Must be 21+'
    },
    { 
      id: 'rivers', 
      name: 'Rivers Casino (21+)', 
      category: 'CASINO', 
      logo: '/images/betRivers.png',
      legalStates: 'MI, PA',
      promoDetails: '100% deposit match up to $250',
      restrictions: 'First deposit only. Must be 21+'
    },
    { 
      id: 'myprize', 
      name: 'MyPrize Casino (18+)', 
      category: 'CASINO', 
      logo: '/images/myPrizeLogo.jpeg',
      legalStates: 'Available in most US states',
      promoDetails: 'Get 5000 free coins on signup',
      restrictions: 'Must be 18+'
    }
  ];

  const filteredPlatforms = activeCategory === 'ALL' 
    ? platforms 
    : platforms.filter(platform => platform.category === activeCategory);

  return (
    <div className="min-h-screen p-6 bg-gray-900">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Platforms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPlatforms.map((platform) => (
          <Card 
            key={platform.id}
            className="bg-gray-800 hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-700"
            onClick={() => setSelectedPlatform(platform)}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-24 h-24 mb-4 relative">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    const parent = e.currentTarget.parentNode;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center';
                      fallback.innerHTML = `<span class="text-xl font-bold text-gray-400">${platform.name.charAt(0)}</span>`;
                      parent.replaceChild(fallback, e.currentTarget);
                    }
                  }}
                />
              </div>
              <h3 className="text-center text-white font-medium">
                {platform.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Platform Modal */}
      {selectedPlatform && (
        <PlatformModal
          platform={selectedPlatform}
          onClose={() => setSelectedPlatform(null)}
        />
      )}

      {/* Responsible Gaming Footer */}
      <div className="mt-8 text-center text-sm text-gray-300">
        Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700
      </div>
    </div>
  );
};

export default Platforms;
