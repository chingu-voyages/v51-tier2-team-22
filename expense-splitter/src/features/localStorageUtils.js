export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};
