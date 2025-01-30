// Platform Categories
export const PLATFORM_CATEGORIES = {
  ALL: 'ALL',
  FANTASY: 'FANTASY',
  CASINO: 'CASINO',
  SPORTS: 'SPORTS',
  SWEEPS_CASINO: 'SWEEPS_CASINO'
};

// All available platforms with standardized $0.50 value
export const ALL_PLATFORMS = [
  // Featured Partners
  {
    id: 'playstar',
    name: 'PlayStar Casino NJ',
    category: PLATFORM_CATEGORIES.CASINO,
    value: 0.50,
    imageFile: 'playstar.png',
    gradientStart: '#FBBF24',
    gradientEnd: '#D97706',
    promoOffer: '100% Deposit Match up to $500 + 500 Bonus Spins',
    url: 'https://click.trackplaystar.com/track/314f996a-668d-400d-8c9b-97d28c3fde31?type=seo&s1=662608032'
  },
  {
    id: 'mcluck',
    name: 'McLuck',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'mcluck.png',
    gradientStart: '#FCD34D',
    gradientEnd: '#F59E0B',
    url: 'https://tracking.b2-partners.com/visit/?bta=3035&nci=5356&afp1=662608032&utm_campaign=lhr&utm_creative=662608032&referred_by=PLAYBONUS&corid'
  },
  {
    id: 'pulsz',
    name: 'Pulsz',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'pulsz.png',
    gradientStart: '#FCD34D',
    gradientEnd: '#F59E0B',
    url: 'https://affiliates.pulsz.com/visit/?bta=3035&nci=5348&afp1=142603201&utm_campaign=lhr&utm_creative=142603201&referred_by=BONUSPLAY&corid'
  },
  {
    id: 'hellomillions',
    name: 'HelloMillions',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'hellomillions.png',
    gradientStart: '#FCD34D',
    gradientEnd: '#F59E0B',
    url: 'https://tracking.b2-partners.com/visit/?bta=3035&nci=5357&afp1=662608032&utm_campaign=lhr&utm_creative=662608032&referred_by=BONUSPLAY&corid'
  },
  // Fantasy Partners
  {
    id: 'draftkings',
    name: 'DraftKings',
    category: PLATFORM_CATEGORIES.FANTASY,
    value: 0.50,
    imageFile: 'draftkingsfantasy.png',
    gradientStart: '#FBBF24',
    gradientEnd: '#D97706'
  },
  {
    id: 'fanduel',
    name: 'FanDuel',
    category: PLATFORM_CATEGORIES.FANTASY,
    value: 0.50,
    imageFile: 'fanduel.png',
    gradientStart: '#60A5FA',
    gradientEnd: '#2563EB'
  },
  {
    id: 'sleeper',
    name: 'Sleeper',
    category: PLATFORM_CATEGORIES.FANTASY,
    value: 0.50,
    imageFile: 'sleeper.png',
    gradientStart: '#34D399',
    gradientEnd: '#059669'
  },
  {
    id: 'espnfantasy',
    name: 'ESPN Fantasy',
    category: PLATFORM_CATEGORIES.FANTASY,
    value: 0.50,
    imageFile: 'espnfantasy.png',
    gradientStart: '#F87171',
    gradientEnd: '#DC2626'
  },
  {
    id: 'prizepicks',
    name: 'PrizePicks',
    category: PLATFORM_CATEGORIES.FANTASY,
    value: 0.50,
    imageFile: 'prizepicks.png',
    gradientStart: '#A78BFA',
    gradientEnd: '#7C3AED'
  },
  // Casino Partners
  {
    id: 'pokerstars',
    name: 'PokerStars',
    category: PLATFORM_CATEGORIES.CASINO,
    value: 0.50,
    imageFile: 'pokerstars.png',
    gradientStart: '#F472B6',
    gradientEnd: '#DB2777'
  },
  // Sports Partners
  {
    id: 'betmgm',
    name: 'BetMGM',
    category: PLATFORM_CATEGORIES.SPORTS,
    value: 0.50,
    imageFile: 'betmgm.png',
    gradientStart: '#818CF8',
    gradientEnd: '#4F46E5'
  },
  {
    id: 'caesars',
    name: 'Caesars',
    category: PLATFORM_CATEGORIES.SPORTS,
    value: 0.50,
    imageFile: 'caesars.png',
    gradientStart: '#FCD34D',
    gradientEnd: '#F59E0B'
  },
  {
    id: 'underdog',
    name: 'Underdog',
    category: PLATFORM_CATEGORIES.SPORTS,
    value: 0.50,
    imageFile: 'underdog.jpeg',
    gradientStart: '#FB7185',
    gradientEnd: '#E11D48'
  },
  {
    id: 'betr',
    name: 'Betr',
    category: PLATFORM_CATEGORIES.SPORTS,
    value: 0.50,
    imageFile: 'betr.png',
    gradientStart: '#2DD4BF',
    gradientEnd: '#0D9488'
  },
  {
    id: 'betrivers',
    name: 'BetRivers',
    category: PLATFORM_CATEGORIES.SPORTS,
    value: 0.50,
    imageFile: 'betrivers.png',
    gradientStart: '#94A3B8',
    gradientEnd: '#475569'
  },
  {
    id: 'wynnbet',
    name: 'WynnBet',
    category: PLATFORM_CATEGORIES.SPORTS,
    value: 0.50,
    gradientStart: '#C084FC',
    gradientEnd: '#9333EA'
  },
  // Sweeps Casino Partners
  {
    id: 'wowvegas',
    name: 'WowVegas',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'wowvegas.png',
    gradientStart: '#F472B6',
    gradientEnd: '#DB2777',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'high5',
    name: 'High 5',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'high5.png',
    gradientStart: '#818CF8',
    gradientEnd: '#4F46E5',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'realprize',
    name: 'Realprize',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'realprize.webp',
    gradientStart: '#FBBF24',
    gradientEnd: '#D97706',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'crowncoins',
    name: 'Crown Coins',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'crowncoins.png',
    gradientStart: '#FCD34D',
    gradientEnd: '#F59E0B',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'stake',
    name: 'Stake',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'stake.jpg',
    gradientStart: '#A78BFA',
    gradientEnd: '#7C3AED',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'carnivalciti',
    name: 'Carnival Citi',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'carnivalciti.jpg',
    gradientStart: '#FB7185',
    gradientEnd: '#E11D48',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'jackpota',
    name: 'Jackpota',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'jackpota.png',
    gradientStart: '#C084FC',
    gradientEnd: '#9333EA',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'sportsmillions',
    name: 'SportsMillions',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'sportsmillions.png',
    gradientStart: '#F472B6',
    gradientEnd: '#DB2777',
    url: 'https://tracking.b2-partners.com/visit/?bta=3035&nci=5414&afp={clickid}&afp1=662608032&utm_campaign=lhr&utm_creative=662608032&referred_by=PLAYBONUS&corid',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'nolimit',
    name: 'NoLimit',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'nolimit.png',
    gradientStart: '#F87171',
    gradientEnd: '#DC2626',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'megabonanza',
    name: 'Megabonanza',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'megabonanza.webp',
    gradientStart: '#94A3B8',
    gradientEnd: '#475569',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'moonspin',
    name: 'Moonspin',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'moonspin.jpg',
    gradientStart: '#F472B6',
    gradientEnd: '#DB2777',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'moneyfactory',
    name: 'Money Factory',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'moneyfactory.webp',
    gradientStart: '#818CF8',
    gradientEnd: '#4F46E5',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'luckybird',
    name: 'Luckybird',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'luckybird.png',
    gradientStart: '#2DD4BF',
    gradientEnd: '#0D9488',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'funrize',
    name: 'Funrize',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'funrize.webp',
    gradientStart: '#FBBF24',
    gradientEnd: '#D97706',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'fortunewheelz',
    name: 'Fortune Wheelz',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'fortunewheelz.png',
    gradientStart: '#60A5FA',
    gradientEnd: '#2563EB',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'funzcity',
    name: 'FunzCity',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'funzcity.webp',
    gradientStart: '#FCD34D',
    gradientEnd: '#F59E0B',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'chumba',
    name: 'Chumba',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'chumba.png',
    gradientStart: '#A78BFA',
    gradientEnd: '#7C3AED',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'luckyland',
    name: 'Luckyland',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'luckyland.png',
    gradientStart: '#FB7185',
    gradientEnd: '#E11D48',
    disabled: true,
    disabledText: 'Coming Soon'
  },
  {
    id: 'betriversnet',
    name: 'BetRivers.Net',
    category: PLATFORM_CATEGORIES.SWEEPS_CASINO,
    value: 0.50,
    imageFile: 'betrivers.jpg',
    gradientStart: '#C084FC',
    gradientEnd: '#9333EA',
    disabled: true,
    disabledText: 'Coming Soon'
  }
];
