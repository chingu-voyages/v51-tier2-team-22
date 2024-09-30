import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      id: 1,
      name: "Picnic Holiday",
      totalBudget: 500,
      totalExpense: 300,
      members: [
        { id: 1, name: "Mark", number: "12345" },
        { id: 2, name: "Jason", number: "67890" },
        { id: 3, name: "Conan", number: "11223" },
      ],
    },
    // {
    //   id: 2,
    //   name: "Hiking",
    //   totalBudget: 1000,
    //   totalExpense: 700,
    //   members: ["Jane", "Mary"],
    // },
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
      }
    },
    removeMember: (state, action) => {
      const { groupId, memberId  } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.members = group.members.filter((member) => member.id !== memberId);
      }
    },
  },
});

export const { addGroup, removeGroup, addMember, removeMember } =
  groupsSlice.actions;
export default groupsSlice.reducer;
