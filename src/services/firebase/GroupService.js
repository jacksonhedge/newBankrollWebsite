import { db } from './config';
import { collection, query, where, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

class GroupService {
  constructor() {
    this.groupsCollection = 'groups';
  }

  async getUserGroups(userId) {
    try {
      const groupsRef = collection(db, this.groupsCollection);
      // Query for groups where user is either a member or co-owner
      const memberQ = query(groupsRef, where('members', 'array-contains', userId));
      const coOwnerQ = query(groupsRef, where('coOwners', 'array-contains', userId));
      
      const [memberSnapshot, coOwnerSnapshot] = await Promise.all([
        getDocs(memberQ),
        getDocs(coOwnerQ)
      ]);
      
      const groups = new Set();
      memberSnapshot.forEach((doc) => {
        groups.add({
          id: doc.id,
          ...doc.data()
        });
      });
      
      coOwnerSnapshot.forEach((doc) => {
        groups.add({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return Array.from(groups);
    } catch (error) {
      console.error('Error fetching user groups:', error);
      throw error;
    }
  }

  async getGroup(groupId) {
    try {
      const groupRef = doc(db, this.groupsCollection, groupId);
      const groupDoc = await getDoc(groupRef);
      
      if (groupDoc.exists()) {
        return {
          id: groupDoc.id,
          ...groupDoc.data()
        };
      } else {
        throw new Error('Group not found');
      }
    } catch (error) {
      console.error('Error fetching group:', error);
      throw error;
    }
  }

  async createGroup(groupData, creatorId) {
    try {
      const groupId = uuidv4();
      const groupRef = collection(db, this.groupsCollection);
      
      // Ensure all member usernames start with #
      const members = groupData.members.map(member => ({
        ...member,
        username: member.username.startsWith('#') ? member.username : `#${member.username}`
      }));

      const newGroup = {
        dateCreated: new Date(),
        emoji: groupData.emoji || '👥',
        id: groupId,
        inviteLink: `https://onbankroll.com/group/${groupId}`,
        isHidden: false,
        members: members,
        memberIds: members.map(m => m.id), // For easier querying
        name: groupData.name,
        creatorId: creatorId,
        coOwners: groupData.coOwners || [creatorId],
        pendingMembers: [],
        status: 'Active',
        visibility: 'private',
        platform: groupData.platform || null,
        platformId: groupData.sleeperLeagueId || null
      };

      await addDoc(groupRef, newGroup);
      return newGroup;
    } catch (error) {
      console.error('Error creating group:', error);
      throw error;
    }
  }

  async isUserInGroup(userId, groupId) {
    try {
      const group = await this.getGroup(groupId);
      return group.memberIds.includes(userId) || group.coOwners.includes(userId);
    } catch (error) {
      console.error('Error checking user group membership:', error);
      throw error;
    }
  }

  async isGroupCoOwner(userId, groupId) {
    try {
      const group = await this.getGroup(groupId);
      return group.coOwners.includes(userId);
    } catch (error) {
      console.error('Error checking co-owner status:', error);
      throw error;
    }
  }
}

export const groupService = new GroupService();
