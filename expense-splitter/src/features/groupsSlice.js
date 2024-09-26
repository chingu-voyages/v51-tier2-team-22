import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      id: 1,
      name: "Picnic Holiday",
      members: ["Mark", "Tom"],
    },
    {
      id: 2,
      name: "Hiking",
      members: ["Mark", "Tom"],
    },
  ],
  friends: [
    { id: 1, name: "Mark", group: "Las Vegas Holiday" },
    { id: 2, name: "Tom", group: "Las Vegas Holiday" },
  ],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.groups.push(action.payload);
    },
    removeGroup: (state, action) => {
      state.groups = state.groups.filter(
        (group) => group.id !== action.payload
      );
      // Remove associated friends when group is deleted
      state.friends = state.friends.filter(
        (friend) => friend.group !== action.payload
      );
    },
    addFriendToGroup: (state, action) => {
      const { groupId, friendName } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.members.push(friendName);
        state.friends.push({
          id: Date.now(),
          name: friendName,
          group: group.name,
        });
      }
    },
  },
});

export const { addGroup, removeGroup, addFriendToGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
