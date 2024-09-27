import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Mark",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 2,
    name: "Tom",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    id: 3,
    name: "Jane",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 4,
    name: "Mary",
    img: "https://randomuser.me/api/portraits/women/36.jpg",
  }
];

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
});

//export const { addGroup, removeGroup, addFriendToGroup } = friendsSlice.actions;
export default friendsSlice.reducer;
