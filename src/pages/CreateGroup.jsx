import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { groupService } from '../services/firebase/GroupService';
import { Input } from '../components/ui/input';

const CreateGroup = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [groupName, setGroupName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm.length >= 2) {
        try {
          const results = await groupService.searchUsers(searchTerm);
          // Filter out the current user and already selected users
          const filteredResults = results.filter(user => 
            user.uid !== currentUser.uid && 
            !selectedUsers.some(selected => selected.uid === user.uid)
          );
          setSearchResults(filteredResults);
        } catch (err) {
          console.error('Error searching users:', err);
          setError('Failed to search users');
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, currentUser.uid, selectedUsers]);

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const groupData = {
        name: groupName,
        pendingMembers: selectedUsers.map(user => ({
          uid: user.uid,
          displayName: user.displayName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          photoURL: user.photoURL
        }))
      };

      const newGroup = await groupService.createGroup(groupData, currentUser);
      navigate(`/group/${newGroup.id}`);
    } catch (err) {
      console.error('Error creating group:', err);
      setError('Failed to create group');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUsers(prev => [...prev, user]);
    setSearchResults(prev => prev.filter(u => u.uid !== user.uid));
    setSearchTerm('');
  };

  const handleRemoveUser = (user) => {
    setSelectedUsers(prev => prev.filter(u => u.uid !== user.uid));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Group</h1>
      
      <form onSubmit={handleCreateGroup} className="space-y-6">
        <div>
          <label htmlFor="groupName" className="block text-sm font-medium mb-2">
            Group Name
          </label>
          <Input
            id="groupName"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            required
          />
        </div>

        <div>
          <label htmlFor="userSearch" className="block text-sm font-medium mb-2">
            Add Members
          </label>
          <Input
            id="userSearch"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by username, email, or phone"
          />
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 border border-purple-500/20 rounded-md overflow-hidden">
              {searchResults.map((user, index) => (
                <div
                  key={`search-${user.uid}-${index}`}
                  className="p-3 hover:bg-gray-900/40 cursor-pointer flex items-center justify-between"
                  onClick={() => handleSelectUser(user)}
                >
                  <div className="flex items-center space-x-3">
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <div className="font-medium">{user.displayName}</div>
                      <div className="text-sm text-gray-400">
                        {user.username || user.email || user.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-purple-500 hover:text-purple-400"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Selected Users */}
          {selectedUsers.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Selected Members</h3>
              <div className="space-y-2">
                {selectedUsers.map((user, index) => (
                  <div
                    key={`selected-${user.uid}-${index}`}
                    className="flex items-center justify-between p-2 bg-gray-900/40 rounded-md"
                  >
                    <div className="flex items-center space-x-3">
                      {user.photoURL && (
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div>
                        <div className="font-medium">{user.displayName}</div>
                        <div className="text-sm text-gray-400">
                          {user.username || user.email || user.phone}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveUser(user)}
                      className="text-red-500 hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={isLoading || !groupName.trim()}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Creating...' : 'Create Group'}
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
