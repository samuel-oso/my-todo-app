// stores/aboutTaskStore.js
import { create } from "zustand";
import { Task } from "../api/DummyData";

// Define your AboutTask store
interface AboutTaskStore {
  isAboutTaskOpen: boolean;
  selectedTask: Task | null;
  openAboutTask: () => void;
  closeAboutTask: () => void;
  setSelectedTask: (task: Task | null) => void;
}

export const useAboutTaskStore = create<AboutTaskStore>((set) => ({
  isAboutTaskOpen: false,
  selectedTask: null,
  openAboutTask: () => set({ isAboutTaskOpen: true }),
  closeAboutTask: () => set({ isAboutTaskOpen: false }),
  setSelectedTask: (task) => set({ selectedTask: task }),
}));
