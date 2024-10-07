// { id: 23423513, name: "Anthony", contribution: 0 },
// { id: 4575897, name: "Marko", contribution: 0 },
// { id: 3464867, name: "Duda", contribution: 0 },
// { id: 34534712, name: "Kirk", contribution: 0 },
// { id: 23213423513, name: "Elijah", contribution: 0 },
// { id: 45780897, name: "Oliver", contribution: 0 },
// { id: 3469067, name: "Theodore", contribution: 0 },
// { id: 3453654712, name: "Liam", contribution: 0 },

import { createSlice } from "@reduxjs/toolkit";
import groupDefault from "../assets/groupDefault.png";
import unknownPerson from "../assets/unknownPerson.jpg";

// default images for the users of default group. pictures need change to those of humans
import person10 from "../assets/person10.jpg";
import person2 from "../assets/person2.jpg";
// import person9 from "../assets/person9.jpg";

// PREVIEW ONLY, DELETE AFTER SPRING PLANNING
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";
import group4 from "../assets/group4.jpg"
import person14 from "../assets/person14.jpg";
import person13 from "../assets/person13.jpg";
import group1 from "../assets/group1.jpg"




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
      id: 45674,
      name: "Picnic Holiday",
      image: groupDefault,
      description: "This is our group description 🙌",
      totalBudget: 500,
      totalExpense: 300,
      members: [
        { id: 255436, name: "Markus", contribution: 0, image: person2 },
        { id: 346235, name: "Maria", contribution: 0, image: person10 },
      ],
    },
    {
      id: 3453,
      name: "Beach party",
      image: group4,
      description: "This is our group description 🙌",
      totalBudget: 950,
      totalExpense: 780,
      members: [
        { id: 25455436, name: "John", contribution: 0, image: person3 },
        { id: 34626335, name: "Ali", contribution: 0, image: person4 },
        { id: 97867035, name: "Buba", contribution: 0, image: person5 },
        { id: 978675678035, name: "Nick", contribution: 0, image: person6 },

      ],
    },
    {
      id: 456,
      name: "Nightout party",
      image: group1,
      description: "This is our group description 🙌",
      totalBudget: 300,
      totalExpense: 170,
      members: [
        { id: 2540890436, name: "Mia", contribution: 0, image: person13 },
        { id: 3456786335, name: "Eli", contribution: 0, image: person14 },
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
          image: member.image || unknownPerson,
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
    updateGroupName: (state, action) => {
      const { groupId, newName } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.name = newName;
      }
    },
    updateGroupImage: (state, action) => {
      const { groupId, newImage } = action.payload;
      const group = state.groups.find((group) => group.id === groupId);
      if (group) {
        group.image = newImage;
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
  updateGroupName,
  updateGroupImage,
} = groupsSlice.actions;
export default groupsSlice.reducer;
