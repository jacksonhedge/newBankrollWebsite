import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { groupService } from '../services/firebase/GroupService';
import { Card, CardContent } from '../components/ui/card';
import DepositScreen from '../components/dwolla/DepositScreen';
import { 
  Bell,
  Settings,
  ChevronRight,
  Shield,
  CreditCard,
  Users,
  DollarSign,
  HelpCircle,
  FileText,
  Lock,
  LogOut,
  Smartphone,
  MessageCircle,
  X,
  UserPlus,
  Camera,
  Loader2
} from 'lucide-react';

const Profile = () => {
  const { currentUser, logout, updateProfileImage } = useAuth();
  const [showSettings, setShowSettings] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [imageKey, setImageKey] = useState(Date.now()); // For forcing image refresh
  const fileInputRef = useRef(null);
  const settingsRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (currentUser && !currentUser.profileImage) {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * 30) + 1;
      } while (randomNum === 26);

      let fileExtension;
      if (randomNum === 1 || randomNum === 30) {
        fileExtension = '.jpeg';
      } else if (randomNum === 4 || randomNum === 16) {
        fileExtension = '.jpg';
      } else {
        fileExtension = '.png';
      }

      const profileImage = `/newBankrollWebsite/public/images/profile_${randomNum}${fileExtension}`;
      updateProfileImage(currentUser.uid, profileImage);
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchGroups = async () => {
      if (currentUser?.uid) {
        try {
          console.log('Fetching groups for user:', currentUser.uid);
          const userGroups = await groupService.getUserGroups(currentUser.uid);
          console.log('Fetched groups:', userGroups);
          setGroups(userGroups);
        } catch (error) {
          console.error('Error fetching groups:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGroups();
  }, [currentUser?.uid]);

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleCreateGroup = () => {
    navigate('/create-group');
  };

  const handleNavigateToNotifications = () => {
    setShowSettings(false);
    navigate('/notifications');
  };

  const handleGroupClick = (groupId) => {
    console.log('Navigating to group:', groupId);
    navigate(`/group/${groupId}`);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Reset states
    setUploadError(null);
    setUploading(true);

    try {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file');
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Please upload an image smaller than 5MB');
      }

      if (!currentUser?.uid) {
        throw new Error('User ID is not available');
      }

      // Upload the image
      await updateProfileImage(currentUser.uid, file);
      console.log('Profile image updated successfully');
      
      // Force image refresh
      setImageKey(Date.now());
      
      // Clear any existing error
      setUploadError(null);

    } catch (error) {
      console.error('Error uploading profile image:', error);
      setUploadError(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const TransferComingSoonModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md mx-4 relative border border-gray-700">
        <button 
          onClick={() => setShowTransferModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Coming Soon!</h3>
          <p className="text-gray-300">
            Direct transfers between users will be available soon! Stay tuned for this exciting feature.
          </p>
          <button
            onClick={() => setShowTransferModal(false)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-4"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 relative">
      {/* Profile Image and Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
              {currentUser?.profileImage ? (
                <img 
                  key={imageKey}
                  src={`${currentUser.profileImage}?t=${imageKey}`}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Error loading profile image:', e);
                    e.target.src = ''; // Clear the src to show fallback
                    e.target.className = 'hidden';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={uploading}
            >
              {uploading ? (
                <Loader2 className="w-4 h-4 text-white animate-spin" />
              ) : (
                <Camera className="w-4 h-4 text-white" />
              )}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
              disabled={uploading}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Profile</h1>
            {uploadError && (
              <p className="text-red-500 text-sm mt-1">{uploadError}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Rewards and Challenges</span>
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-400" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="relative" ref={settingsRef}>
            <button 
              onClick={() => setShowSettings(!showSettings)} 
              className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Settings className="h-6 w-6 text-gray-400" />
            </button>
            
            {/* Settings Menu */}
            {showSettings && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg border border-gray-800 z-50">
                <div className="py-2">
                  <button
                    onClick={handleNavigateToNotifications}
                    className="w-full px-4 py-2 text-left hover:bg-gray-800 flex items-center space-x-3"
                  >
                    <Bell className="h-5 w-5 text-gray-400" />
                    <span>Notifications</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      navigate('/security');
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-800 flex items-center space-x-3"
                  >
                    <Shield className="h-5 w-5 text-gray-400" />
                    <span>Security</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      navigate('/payment-methods');
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-800 flex items-center space-x-3"
                  >
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span>Payment Methods</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      navigate('/help');
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-800 flex items-center space-x-3"
                  >
                    <HelpCircle className="h-5 w-5 text-gray-400" />
                    <span>Help & Support</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2 text-left hover:bg-gray-800 flex items-center space-x-3 text-red-500"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Groups and Friends Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Groups Box */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Groups</h3>
            <div className="space-y-3">
              {loading ? (
                <p className="text-gray-400">Loading groups...</p>
              ) : groups.length > 0 ? (
                <div className="space-y-2">
                  {groups.map(group => (
                    <div 
                      key={group.id}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => handleGroupClick(group.id)}
                    >
                      <span className="text-2xl">{group.emoji}</span>
                      <span className="text-white">{group.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No groups yet</p>
              )}
              <button 
                onClick={handleCreateGroup}
                className="w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Create Group</span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Friends Box */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Friends</h3>
            <div className="space-y-3">
              <p className="text-gray-400">No friends yet</p>
              <button className="w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Add Friends
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modals */}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="max-w-md w-full mx-4">
            <DepositScreen onClose={() => setShowDepositModal(false)} />
          </div>
        </div>
      )}

      {showTransferModal && <TransferComingSoonModal />}
    </div>
  );
};

export default Profile;
