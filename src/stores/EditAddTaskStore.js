// store.js
import create from "zustand";

// Create your Zustand store
const useTaskStore = create((set) => ({
  editMode: false,
  addMode: false,

  setEditMode: () => {
    console.log("Setting edit mode"); // Add this line for debugging
    set({ editMode: true, addMode: false });
  },
  setAddMode: () => {
    console.log("Setting add mode"); // Add this line for debugging
    set({ editMode: false, addMode: true });
  },
  resetMode: () => set({ editMode: false, addMode: false }),
}));

export default useTaskStore;
