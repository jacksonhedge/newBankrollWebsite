import { logEvent } from 'firebase/analytics';
import { analytics } from './config';

class AnalyticsService {
  logEvent(eventName, eventParams = {}) {
    try {
      if (analytics) {
        logEvent(analytics, eventName, {
          ...eventParams,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.warn(`Failed to log event ${eventName}:`, error);
    }
  }

  // Platform Events
  logPlatformView(platformId, platformName, category) {
    this.logEvent('platform_view', {
      platform_id: platformId,
      platform_name: platformName,
      category: category
    });
  }

  logPlatformVisit(platformId, platformName) {
    this.logEvent('platform_visit', {
      platform_id: platformId,
      platform_name: platformName
    });
  }

  logPlatformConnect(platformId, platformName) {
    this.logEvent('platform_connect', {
      platform_id: platformId,
      platform_name: platformName
    });
  }

  // Sleeper Events
  logSleeperConnect(username) {
    this.logEvent('sleeper_connect', {
      username: username
    });
  }

  logSleeperDisconnect() {
    this.logEvent('sleeper_disconnect');
  }

  logSleeperLeagueView(leagueId, leagueName) {
    this.logEvent('sleeper_league_view', {
      league_id: leagueId,
      league_name: leagueName
    });
  }

  // Navigation Events
  logPageView(pageName, pageTitle) {
    this.logEvent('page_view', {
      page_name: pageName,
      page_title: pageTitle
    });
  }
}

export const analyticsService = new AnalyticsService();
