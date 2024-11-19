// src/services/SleeperService.js

const BASE_URL = 'https://api.sleeper.app/v1';

export class SleeperService {
  static async getUser(username) {
    try {
      const response = await fetch(`${BASE_URL}/user/${username}`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async getUserLeagues(userId, season = '2024', sport = 'nfl') {
    try {
      const response = await fetch(`${BASE_URL}/user/${userId}/leagues/${sport}/${season}`);
      if (!response.ok) throw new Error('Failed to fetch leagues');
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async getLeagueUsers(leagueId) {
    try {
      const response = await fetch(`${BASE_URL}/league/${leagueId}/users`);
      if (!response.ok) throw new Error('Failed to fetch league users');
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static getAvatarUrl(avatarId) {
    return avatarId ? `https://sleepercdn.com/avatars/${avatarId}` : null;
  }

  static getLeagueAvatarUrl(avatarId) {
    return avatarId ? `https://sleepercdn.com/avatars/${avatarId}` : null;
  }
}
