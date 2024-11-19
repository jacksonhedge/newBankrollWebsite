import React, { useState } from 'react';
import { useSleeperContext } from '../../contexts/SleeperContext';
import SleeperLeagueDetails from './SleeperLeagueDetails';

const SleeperLeaguesList = () => {
  const { leagues } = useSleeperContext();
  const [selectedLeague, setSelectedLeague] = useState(null);

  if (!leagues || leagues.length === 0) {
    return (
      <div className="text-center text-gray-400 py-4">
        No leagues found
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {leagues.map((league) => (
          <div 
            key={league.league_id}
            className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 
              transition-all cursor-pointer hover:bg-purple-900/40"
            onClick={() => setSelectedLeague(league)}
          >
            <div className="flex items-center space-x-4">
              {league.avatar && (
                <img
                  src={`https://sleepercdn.com/avatars/${league.avatar}`}
                  alt={league.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{league.name}</h3>
                <p className="text-sm text-gray-400">
                  {league.total_rosters} participants • Season {league.season}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLeague && (
        <SleeperLeagueDetails 
          league={selectedLeague} 
          onClose={() => setSelectedLeague(null)} 
        />
      )}
    </>
  );
};

export default SleeperLeaguesList;
