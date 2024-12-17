import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import PlatformImageService from '../services/firebase/PlatformImageService';

const PlatformsContext = createContext();

export const categories = [
  { id: 'ALL', label: 'ALL' },
  { id: 'FANTASY', label: 'FANTASY' },
  { id: 'CASINO', label: 'CASINO' },
  { id: 'SPORTS', label: 'SPORTS' },
  { id: 'SWEEPS_CASINO', label: 'SWEEPS CASINO' }
];

export const platforms = [
  { 
    id: 'prizepicks', 
    name: 'PrizePicks (18+)', 
    category: 'FANTASY', 
    imageFile: 'prizepicks.png',
    legalStates: 'AK, CA, FL, GA, IL, KS, KY, MN, NE, NM, NC, OK, OR, RI, SC, SD, TX, UT, VT, WI, WY',
    promoDetails: 'Get 100% deposit match up to $100',
    restrictions: 'First-time users only. Must be 18+',
    url: 'https://app.prizepicks.com/sign-up?invite_code=WINDAILY'
  },
  { 
    id: 'draftkings', 
    name: 'DraftKings Fantasy (18+)', 
    category: 'FANTASY', 
    imageFile: 'draftkingsFantasy.png',
    legalStates: 'Most US states',
    promoDetails: 'New user bonus available',
    restrictions: 'New users only. Must be 18+',
    url: 'https://dkdfs.sng.link/Avkw3/ejal?_dl=draftkings%3A%2F%2Fgateway%3Fs%3D199744492&pcid=357597&psn=2003&pcn=xx&pscn=xx&pcrn=WDS&pscid=DFS&pcrid=xx&wpcid=357597&wpsrc=2003&wpcn=xx&wpscn=xx&wpcrn=WDS&wpscid=DFS&wpcrid=xx&_forward_params=1'
  },
  { 
    id: 'fanduel-fantasy', 
    name: 'FanDuel Fantasy (18+)', 
    category: 'FANTASY', 
    imageFile: 'fanduel.png',
    legalStates: 'Most US states',
    promoDetails: 'Special signup bonus',
    restrictions: 'New users only. Must be 18+',
    url: 'https://wlfanduelus.adsrv.eacdn.com/C.ashx?btag=a_15755b_56c_&affid=11359&siteid=15755&adid=56&c='
  },
  { 
    id: 'underdog', 
    name: 'Underdog Fantasy (18+)', 
    category: 'FANTASY', 
    imageFile: 'underdog.jpeg',
    legalStates: 'Most US states',
    promoDetails: 'Special welcome bonus',
    restrictions: 'New users only. Must be 18+',
    url: 'https://play.underdogfantasy.com/p-win-daily-sports'
  },
  {
    id: 'espn-fantasy',
    name: 'ESPN Fantasy (18+)',
    category: 'FANTASY',
    imageFile: 'espnFantasy.png',
    legalStates: 'Most US states',
    promoDetails: 'Special welcome bonus',
    restrictions: 'New users only. Must be 18+',
    url: '#'
  },
  {
    id: 'sleeper-fantasy',
    name: 'Sleeper Fantasy (18+)',
    category: 'FANTASY',
    imageFile: 'sleeperFantasy.png',
    legalStates: 'Most US states',
    promoDetails: 'Special welcome bonus',
    restrictions: 'New users only. Must be 18+',
    url: '#'
  },
  { 
    id: 'myprize', 
    name: 'MyPrize Casino (18+)', 
    category: 'CASINO', 
    imageFile: 'myPrizeLogo.jpeg',
    legalStates: 'Available in most US states',
    promoDetails: 'Get 5000 free coins on signup',
    restrictions: 'Must be 18+',
    url: 'https://myprize.us/invite/bankroll'
  },
  { 
    id: 'betmgm', 
    name: 'BetMGM Casino (21+)', 
    category: 'CASINO', 
    imageFile: 'betmgm.png',
    legalStates: 'MI, NJ, PA, WV',
    promoDetails: '100% deposit match up to $1000 + $25 free play',
    restrictions: 'New customers only. Must be 21+',
    url: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1728250'
  },
  { 
    id: 'caesarspalace', 
    name: 'Caesars Casino (21+)', 
    category: 'CASINO', 
    imageFile: 'caesarsCasino.png',
    legalStates: 'MI, NJ, PA, WV',
    promoDetails: '100% deposit match up to $1000 + $10 free',
    restrictions: 'New users only. Must be 21+',
    url: 'https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_13325b_2658c_&affid=450&siteid=13325&adid=2658&c='
  },
  { 
    id: 'pokerstars', 
    name: 'PokerStars Casino (21+)', 
    category: 'CASINO', 
    imageFile: 'pokerstars casino.jpeg',
    legalStates: 'MI, NJ, PA',
    promoDetails: '$50 free play with first deposit',
    restrictions: 'New players only. Must be 21+',
    url: 'https://star-casino.pxf.io/c/3732491/1130845/14251'
  },
  { 
    id: 'bet365', 
    name: 'Bet365 Casino (21+)', 
    category: 'CASINO', 
    imageFile: 'bet365logo.png',
    legalStates: 'NJ, CO, OH, VA, IA, KY',
    promoDetails: 'Bet $1, Get $365 in Bonus Bets',
    restrictions: 'New players only. Must be 21+',
    url: 'https://casino.bet365.com/opening-bonus?affiliate=365_01276644'
  },
  { 
    id: 'wsop-casino', 
    name: 'WSOP Casino (21+)', 
    category: 'CASINO', 
    imageFile: 'WSOP.png',
    legalStates: 'MI, NJ, PA',
    promoDetails: 'Special welcome bonus for new players',
    restrictions: 'New players only. Must be 21+',
    url: 'https://www.wsop.com/casino/'
  },
  { 
    id: 'wsop-poker', 
    name: 'WSOP Poker (21+)', 
    category: 'POKER', 
    imageFile: 'WSOP.png',
    legalStates: 'MI, NJ, PA',
    promoDetails: 'Special poker welcome package',
    restrictions: 'New players only. Must be 21+',
    url: 'https://www.wsop.com/poker/'
  },
  { 
    id: 'fanduel-casino',
    name: 'FanDuel Casino (21+)',
    category: 'CASINO',
    imageFile: 'fanduelCasino.jpg',
    legalStates: 'MI, NJ, PA, WV',
    promoDetails: 'Special casino welcome bonus',
    restrictions: 'New players only. Must be 21+',
    url: 'https://wlfanduelus.adsrv.eacdn.com/C.ashx?btag=a_42627b_50c_&affid=5594&siteid=42627&adid=50&c=662608032'
  },
  { 
    id: 'draftkings-casino',
    name: 'DraftKings Casino (21+)',
    category: 'CASINO',
    imageFile: 'draftkingsCasino.jpeg',
    legalStates: 'MI, NJ, PA, WV',
    promoDetails: 'Special casino welcome bonus',
    restrictions: 'New players only. Must be 21+',
    url: 'https://dkcs.sng.link/A9aj1/0rvn?_dl=https%3A%2F%2Fcasino.draftkings.com%2Fgateway%3Fs%3D492839416&pcid=414491&psn=3084&pcn=SCAS05&pscn=xx&pcrn=xx&pscid=xx&pcrid=xx&wpcid=414491&wpsrc=3084&wpcn=SCAS05&wpscn=xx&wpcrn=xx&wpscid=xx&wpcrid=xx&_forward_params=1'
  },
  {
    id: 'espn-bet',
    name: 'ESPN BET (21+)',
    category: 'SPORTS',
    imageFile: 'espnBet.png',
    legalStates: 'AZ, CO, IL, IN, IA, KS, KY, LA, MA, MD, MI, NJ, OH, PA, TN, VA, WV',
    promoDetails: 'Special welcome bonus',
    restrictions: 'New users only. Must be 21+',
    url: '#'
  },
  {
    id: 'fanatics',
    name: 'Fanatics (21+)',
    category: 'SPORTS',
    imageFile: 'fanatics.png',
    legalStates: 'MD, MA, KY, TN, OH',
    promoDetails: 'Special welcome bonus',
    restrictions: 'New users only. Must be 21+',
    url: '#'
  },
  {
    id: 'betr',
    name: 'Betr Fantasy (18+)',
    category: 'FANTASY',
    imageFile: 'betrFantasy.png',
    legalStates: 'Most US states',
    promoDetails: 'Special welcome bonus',
    restrictions: 'New users only. Must be 18+',
    url: '#'
  }
].map(platform => ({
  ...platform,
  imageUrl: `/images/${platform.imageFile}` // Provide immediate fallback URL
}));

export function PlatformsProvider({ children }) {
  const [platformImages, setPlatformImages] = useState({});
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const loadingRef = useRef(false);
  const imageUrlCache = useRef({});
  const updateTimeoutRef = useRef(null);

  // Debounced state update function
  const debouncedSetImagesLoaded = (count) => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    updateTimeoutRef.current = setTimeout(() => {
      setImagesLoaded(count);
    }, 500); // Debounce for 500ms
  };

  useEffect(() => {
    const loadPlatformImages = async () => {
      if (loadingRef.current) return;
      loadingRef.current = true;

      setImagesLoading(true);
      const imageUrls = { ...imageUrlCache.current };
      const errors = {};
      let loadedCount = 0;
      const batchSize = 5; // Load images in batches of 5

      try {
        // Process platforms in batches
        for (let i = 0; i < platforms.length; i += batchSize) {
          const batch = platforms.slice(i, i + batchSize);
          
          // Load batch of images concurrently
          await Promise.all(
            batch.map(async (platform) => {
              if (imageUrlCache.current[platform.id]) {
                loadedCount++;
                return;
              }

              try {
                const url = await PlatformImageService.getImageUrl(platform.imageFile);
                if (url) {
                  imageUrls[platform.id] = url;
                  imageUrlCache.current[platform.id] = url;
                  loadedCount++;
                }
              } catch (error) {
                console.error(`Failed to load image for ${platform.id}:`, error);
                errors[platform.id] = true;
              }
            })
          );

          // Update loaded count less frequently using debounce
          debouncedSetImagesLoaded(loadedCount);

          // Add delay between batches to prevent overwhelming mobile devices
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      } finally {
        setPlatformImages(imageUrls);
        setImageErrors(errors);
        setImagesLoading(false);
        setImagesLoaded(loadedCount);
        loadingRef.current = false;
      }
    };

    loadPlatformImages();

    return () => {
      loadingRef.current = false;
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, []);

  const value = {
    platforms,
    categories,
    platformImages,
    imagesLoading,
    imagesLoaded,
    imageErrors,
    totalPlatforms: platforms.length
  };

  return (
    <PlatformsContext.Provider value={value}>
      {children}
    </PlatformsContext.Provider>
  );
}

export function usePlatforms() {
  const context = useContext(PlatformsContext);
  if (context === undefined) {
    throw new Error('usePlatforms must be used within a PlatformsProvider');
  }
  return context;
}
