import { createSlice } from "@reduxjs/toolkit";

const calculateContributions = (group) => {
  const memberCount = group.members.length;
  if (memberCount > 0) {
    const contribution = group.totalExpense / memberCount;
    group.members.forEach((member) => {
      member.contribution = contribution;
    });
  }
};

const initialState = {
  groups: [
    {
      id: 1,
      name: "Picnic Holiday",
      totalBudget: 500,
      totalExpense: 300,
      members: [
        { id: 1, name: "Mark", contribution: 0 },
        { id: 2, name: "Jason", contribution: 0 },
        { id: 3, name: "Conan", contribution: 0 },
        { id: 1, name: "Mark", contribution: 0 },
        { id: 2, name: "Jason", contribution: 0 },
        { id: 3, name: "Conan", contribution: 0 },
        { id: 1, name: "Mark", contribution: 0 },
        { id: 2, name: "Jason", contribution: 0 },
        { id: 3, name: "Conan", contribution: 0 },
        { id: 1, name: "Mark", contribution: 0 },
        { id: 2, name: "Jason", contribution: 0 },
        { id: 3, name: "Conan", contribution: 0 },
        { id: 1, name: "Mark", contribution: 0 },
        { id: 2, name: "Jason", contribution: 0 },
        { id: 3, name: "Conan", contribution: 0 },
      ],
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
    addMember: (state, action) => {
      const { groupId, member } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.members.push({
          id: Date.now(),
          ...member,
        });
        calculateContributions(group);
      }
    },
    removeMember: (state, action) => {
      const { groupId, memberId } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.members = group.members.filter(
          (member) => member.id !== memberId
        );
      }
    },
    updateTotalExpense: (state, action) => {
      const { groupId, totalExpense } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.totalExpense = totalExpense;
        calculateContributions(group);
      }
    },
  },
});

export const { addGroup, removeGroup, addMember, removeMember } =
  groupsSlice.actions;
export default groupsSlice.reducer;
