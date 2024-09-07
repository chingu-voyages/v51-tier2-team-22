import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
})

// if interested about this, you can read more here. 
// https://redux-toolkit.js.org/tutorials/quick-start
// still left to do: create state slice inside features folder
// and then add that slice reducers to the store

