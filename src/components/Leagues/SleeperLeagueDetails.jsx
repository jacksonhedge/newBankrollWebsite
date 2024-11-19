import React, { useState, useEffect } from 'react';
import { X, Crown } from 'lucide-react';
import { SleeperService } from '../../services/sleeper/SleeperService';

const SleeperLeagueDetails = ({ league, onClose }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeagueUsers = async () => {
      try {
        const leagueUsers = await SleeperService.getLeagueUsers(league.league_id);
        setUsers(leagueUsers);
      } catch (error) {
        console.error('Error fetching league users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagueUsers();
  }, [league.league_id]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-purple-900/90 p-8 rounded-2xl max-w-2xl w-full mx-4 relative border border-purple-700 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        {/* League Header */}
        <div className="flex items-center space-x-4 mb-6">
          {league.avatar && (
            <img
              src={`https://sleepercdn.com/avatars/${league.avatar}`}
              alt={league.name}
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-white">{league.name}</h2>
            <p className="text-purple-300">Season {league.season}</p>
          </div>
        </div>

        {/* League Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-800/30 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-300">Total Teams</h3>
            <p className="text-2xl font-bold text-white">{league.total_rosters}</p>
          </div>
          <div className="bg-purple-800/30 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-300">League Type</h3>
            <p className="text-2xl font-bold text-white capitalize">{league.status || 'Active'}</p>
          </div>
        </div>

        {/* League Members */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">League Members</h3>
          {loading ? (
            <div className="text-center py-4 text-purple-300">Loading members...</div>
          ) : (
            <div className="space-y-3">
              {users.map((user) => (
                <div 
                  key={user.user_id} 
                  className="flex items-center space-x-3 bg-purple-800/20 p-3 rounded-lg"
                >
                  {user.avatar && (
                    <img
                      src={`https://sleepercdn.com/avatars/${user.avatar}`}
                      alt={user.display_name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-white">{user.display_name}</span>
                      {user.is_owner && (
                        <Crown className="h-4 w-4 text-yellow-400" title="Commissioner" />
                      )}
                    </div>
                    <p className="text-sm text-purple-300">@{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SleeperLeagueDetails;
