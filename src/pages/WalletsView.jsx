import React, { useState } from 'react';
import { CheckCircle, Plus, LayoutGrid, List, Gift, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../components/wallets/ConnectWalletModal';
import WalletDetailsModal from '../components/wallets/WalletDetailsModal';
import { useWallet } from '../contexts/WalletContext';
import { useAuth } from '../contexts/AuthContext';

// Card component inline definition
const Card = ({ className = '', children, onClick, ...props }) => (
  <div
    className={`rounded-lg shadow-sm overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);

const WalletsView = () => {
  console.log('WalletsView rendering'); // Debug log

  const [viewMode, setViewMode] = useState('list');
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const { wallets } = useWallet();
  const { currentUser } = useAuth();

  console.log('WalletsView - currentUser:', currentUser); // Debug log
  console.log('WalletsView - wallets:', wallets); // Debug log

  const formatBalance = (balance) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(balance || 0); // Use 0 if balance is undefined or NaN
  };

  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet);
    setShowDetailsModal(wallet.connected);
  };

  // Early return if no user or wallets
  if (!currentUser || !wallets) {
    console.log('WalletsView - No user or wallets, returning loading state'); // Debug log
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const TreeView = () => {
    console.log('TreeView rendering'); // Debug log
    return (
      <div className="relative min-h-[800px] flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg">
        {/* Tree view implementation remains the same */}
      </div>
    );
  };

  const ListView = () => {
    console.log('ListView rendering'); // Debug log
    // Convert subWallets record to array and ensure balance is initialized to 0
    const subWalletsArray = Object.entries(wallets.subWallets).map(([platformId, wallet]) => ({
      platformId,
      name: wallet.name,
      logo: wallet.logo,
      balance: wallet.cashBalance || 0, // Initialize to 0 if undefined
      connected: wallet.connected || false,
      created: wallet.created || false,
      loading: wallet.loading
    }));

    return (
      <div className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg">
        {/* Main Bankroll Card */}
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <img
                src={wallets.bankroll.logo}
                alt="Bankroll"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bankroll Balance (withdrawable)</h2>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatBalance(wallets.bankroll.balance || 0)}
                </p>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center">
              <Gift className="w-5 h-5 mr-2" />
              Bonus
            </button>
          </div>
        </Card>

        {/* Sub-wallets List */}
        <div className="space-y-4">
          {subWalletsArray.map((wallet) => (
            <Card 
              key={wallet.platformId}
              onClick={() => !wallet.loading && handleWalletClick(wallet)}
              className={`bg-white dark:bg-gray-800 border ${
                wallet.connected ? 'border-green-500' : 'border-gray-200 dark:border-gray-700'
              } p-4 transform hover:scale-[1.02] transition-all duration-200 cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={wallet.logo}
                    alt={wallet.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{wallet.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatBalance(wallet.balance)}
                    </p>
                  </div>
                </div>
                {wallet.loading ? (
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Connecting...
                  </div>
                ) : wallet.connected ? (
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Connected
                  </div>
                ) : (
                  <div className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center">
                    <Gift className="w-5 h-5 mr-2" />
                    Configure Wallet
                  </div>
                )}
              </div>
            </Card>
          ))}

          {/* Add Platform Button */}
          <Link to="/spend">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-lg font-medium text-gray-400 group-hover:text-blue-500 transition-colors">
                  Add Platform
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    );
  };

  console.log('WalletsView - Rendering view mode:', viewMode); // Debug log

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setViewMode('tree')}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === 'tree'
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === 'list'
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {/* View Content */}
      {viewMode === 'tree' ? <TreeView /> : <ListView />}

      {/* Connect/Details Modal */}
      {selectedWallet && (
        showDetailsModal ? (
          <WalletDetailsModal
            wallet={selectedWallet}
            onClose={() => {
              setSelectedWallet(null);
              setShowDetailsModal(false);
            }}
          />
        ) : (
          <ConnectWalletModal
            wallet={selectedWallet}
            onClose={() => setSelectedWallet(null)}
          />
        )
      )}
    </div>
  );
};

export default WalletsView;
