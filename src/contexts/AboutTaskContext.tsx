import React, { createContext, useContext, useState, ReactNode } from "react";
import { Task } from "../actions/MyTasks";

interface AboutTaskContextProps {
  isAboutTaskOpen: boolean;
  openAboutTask: () => void;
  closeAboutTask: () => void;
  selectedTask: Task | null;
  setSelectedTask: (task: Task | null) => void;
}

const AboutTaskContext = createContext<AboutTaskContextProps | undefined>(
  undefined
);

interface AboutTaskProviderProps {
  children: ReactNode;
}

export const AboutTaskProvider: React.FC<AboutTaskProviderProps> = ({
  children,
}) => {
  const [isAboutTaskOpen, setIsAboutTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const openAboutTask = () => {
    setIsAboutTaskOpen(true);
  };

  const closeAboutTask = () => {
    setIsAboutTaskOpen(false);
  };

  return (
    <AboutTaskContext.Provider
      value={{
        isAboutTaskOpen,
        openAboutTask,
        closeAboutTask,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </AboutTaskContext.Provider>
  );
};

export const useAboutTask = (): AboutTaskContextProps => {
  const context = useContext(AboutTaskContext);
  if (context === undefined) {
    throw new Error("useAboutTask must be used within an AboutTaskProvider");
  }
  return context;
};
