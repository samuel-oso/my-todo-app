import { create } from "zustand";

const useEditAddTaskStore = create((set) => ({
  editMode: false,
  addMode: false,

  setEditMode: () => {
    set({ editMode: true, addMode: false });
  },
  setAddMode: () => {
    set({ editMode: false, addMode: true });
  },
  resetMode: () => set({ editMode: false, addMode: false }),
}));

export default useEditAddTaskStore;
