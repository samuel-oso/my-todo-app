import React, { createContext, useContext, useState, ReactNode } from "react";

interface AboutTaskContextProps {
  isAboutTaskOpen: boolean;
  openAboutTask: () => void;
  closeAboutTask: () => void;
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
