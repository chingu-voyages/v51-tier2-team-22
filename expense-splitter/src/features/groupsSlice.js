import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      id: 1,
      name: "Picnic Holiday",
      totalBudget: 500,
      totalExpense: 300,
      members: [1, 2],
    },
    {
      id: 2,
      name: "Hiking",
      totalBudget: 1000,
      totalExpense: 700,
      members: [3, 4],
    },
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
      // Remove associated friends when group is deleted. uncomenting this piece will make the remove group button NOT WORK 
      // state.groups.members = state.groups.members.filter(
      //   (friend) => friend.group !== action.payload
      // );
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
