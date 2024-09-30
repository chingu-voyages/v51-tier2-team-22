import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      id: 1,
      name: "Picnic Holiday",
      totalBudget: 500,
      totalExpense: 300,
      members: ["Mark", "Jason", "Conan"],
    },
    {
      id: 2,
      name: "Hiking",
      totalBudget: 1000,
      totalExpense: 700,
      members: ["Jane", "Mary"],
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
    },
    removeMember: (state, action) => {
      const { groupId, memberName } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.members = group.members.filter((member) => member !== memberName);
      }
    },
  },
});

export const { addGroup, removeGroup, removeMember } = groupsSlice.actions;
export default groupsSlice.reducer;
