import { create } from "zustand";
import { Task } from "../api/DummyData";

function generateUniqueId() {
  return new Date().getTime();
}

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  editTask: (taskId: number, updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
  selectedTask: Task | null;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) =>
    set((state) => ({
      tasks: [{ ...task, id: generateUniqueId() }, ...state.tasks],
    })),
  editTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      ),
    })),
  deleteTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
  selectedTask: null,
}));
