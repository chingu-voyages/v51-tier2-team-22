import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./features/groupsSlice";
import { loadState, saveState } from "./features/localStorageUtils";

const preloadedState = loadState()

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
    },
    preloadedState,
})

store.subscribe(() => {
    saveState(store.getState());
  });

//   run in the browser console to clear the local storage or just remove manually in the local storage tab in dev tools
//   localStorage.removeItem("appState");

// if interested about this, you can read more here. 
// https://redux-toolkit.js.org/tutorials/quick-start
// still left to do: create state slice inside features folder
// and then add that slice reducers to the store

