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
        { id: 1, name: "Mark 2nd", contribution: 0 },
        { id: 2, name: "Markus", contribution: 0 },
        { id: 3134532523, name: "jasson", contribution: 0 },
        // { id: 23423513, name: "Anthony", contribution: 0 },
        // { id: 4575897, name: "Marko", contribution: 0 },
        // { id: 3464867, name: "Duda", contribution: 0 },
        // { id: 34534712, name: "Kirk", contribution: 0 },
        // { id: 23213423513, name: "Elijah", contribution: 0 },
        // { id: 45780897, name: "Oliver", contribution: 0 },
        // { id: 3469067, name: "Theodore", contribution: 0 },
        // { id: 3453654712, name: "Liam", contribution: 0 },
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
      calculateContributions(group);
    },
    updateGroupBudget: (state, action) => {
      const { groupId, totalBudget } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.totalBudget = totalBudget;
      }
    },
    updateGroupExpense: (state, action) => {
      const { groupId, totalExpense } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.totalExpense = totalExpense;
      }
    },
    updateMemberContribution: (state, action) => {
      const { groupId, contributions } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.members.forEach((member) => {
          if (contributions[member.id] !== undefined) {
            member.contribution = contributions[member.id];
          }
        });
      }
    },
  },
});

export const {
  addGroup,
  removeGroup,
  addMember,
  removeMember,
  updateGroupBudget,
  updateGroupExpense,
  updateMemberContribution,
} = groupsSlice.actions;
export default groupsSlice.reducer;

