import { create } from "zustand";
import { Task } from "../api/DummyData";

const generateUniqueId = () => {
  // You can use a library like uuid to generate unique ids
  // Example using uuid:
  // import { v4 as uuidv4 } from "uuid";
  // return uuidv4();

  // For simplicity, using a timestamp as an id (this may not be completely unique)
  return Date.now();
};

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  editTask: (taskId: number, updatedTask: Task) => void;
  deleteTask: (taskId: number) => void; // Add deleteTask action
  selectedTask: Task | null;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) =>
    set((state) => ({
      // Generate a unique id for the new task
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
