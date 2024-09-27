import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./features/groupsSlice";
import friendsReducer from "./features/friendsSlice";

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
        friends: friendsReducer
    }
})

// if interested about this, you can read more here. 
// https://redux-toolkit.js.org/tutorials/quick-start
// still left to do: create state slice inside features folder
// and then add that slice reducers to the store

