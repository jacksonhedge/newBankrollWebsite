import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, Outlet, useLocation, Link } from 'react-router-dom';
import { 
  Wallet, 
  Trophy, 
  SendHorizontal, 
  CreditCard, 
  UserCircle,
  Search,
  Bell
} from 'lucide-react';

const navigation = [
  { name: 'Banking', path: '/banking', icon: Wallet },
  { name: 'My Leagues', path: '/leagues', icon: Trophy },
  { name: 'Send Money', path: '/send', icon: SendHorizontal },
  { name: 'Platforms', path: '/spend', icon: CreditCard },
  { name: 'Profile', path: '/profile', icon: UserCircle },
];

const ProtectedLayout = () => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <div className="border-b border-purple-900">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Left section - Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/BankrollLogoTransparent.png"
                alt="Bankroll"
                className="h-24 w-auto" // Increased size
              />
            </div>

            {/* Center section - Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-800 border border-purple-900/50 rounded-lg py-2 pl-10 pr-4 
                    text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 
                    focus:border-transparent"
                />
              </div>
            </div>

            {/* Right section - Navigation */}
            <div className="flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      px-3 py-2 rounded-lg flex items-center space-x-2
                      transition-colors duration-200 text-sm
                      ${isActive 
                        ? 'bg-purple-900/50 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-purple-900/30'}
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Notification Bell */}
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-900/30">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
