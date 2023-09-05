// taskStore.ts

import { create } from "zustand";
import { Task } from "../api/DummyData";

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  editTask: (taskId: number, updatedTask: Task) => void;
  selectedTask: Task | null; // Include selectedTask property
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  editTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      ),
    })),
  selectedTask: null, // Initialize selectedTask as null
}));
