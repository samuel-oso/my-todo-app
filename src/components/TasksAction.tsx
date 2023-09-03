import React, { useState } from "react";
import Calendar from "../inputs/Calendar";
import EditAddTask from "../actions/EditAddTask";
import AboutTask from "../actions/AboutTask";

interface TasksActionProps {
  onCalendarDateChange: (date: Date) => void;
  isEditAddTaskOpen: boolean;
  onCloseEditAddTask: () => void;
}

const TasksAction: React.FC<TasksActionProps> = ({
  onCalendarDateChange,
  isEditAddTaskOpen,
  onCloseEditAddTask,
}) => {
  const [isAboutTaskOpen, setIsAboutTaskOpen] = useState(false);

  const handleAboutTaskClick = () => {
    setIsAboutTaskOpen(true);
  };

  return (
    <div className="w-394">
      {isAboutTaskOpen ? (
        <AboutTask onClose={() => setIsAboutTaskOpen(false)} />
      ) : isEditAddTaskOpen ? (
        <EditAddTask onClose={onCloseEditAddTask} />
      ) : (
        <Calendar onCalendarDateSelect={onCalendarDateChange} />
      )}

      {/* Add a button to open AboutTask */}
      <button onClick={handleAboutTaskClick}>Open About Task</button>
    </div>
  );
};

export default TasksAction;
