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

//  uncomment line below and reload page 2x for testing purposes or run in the browser console to clear the local storage or just remove manually in the local storage tab in dev tools
  localStorage.removeItem("appState");

// if interested about this, you can read more here. 
// https://redux-toolkit.js.org/tutorials/quick-start


