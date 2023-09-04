import React from "react";
import Calendar from "../inputs/Calendar";
import EditAddTask from "../actions/EditAddTask";
import AboutTask from "../actions/AboutTask";
import { useAboutTask } from "../contexts/AboutTaskContext";

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
  const { isAboutTaskOpen, closeAboutTask } = useAboutTask();

  return (
    <div className="w-394">
      {isAboutTaskOpen && !isEditAddTaskOpen ? (
        <AboutTask onClose={closeAboutTask} />
      ) : isEditAddTaskOpen ? (
        <EditAddTask onClose={onCloseEditAddTask} />
      ) : (
        <Calendar onCalendarDateSelect={onCalendarDateChange} />
      )}
    </div>
  );
};

export default TasksAction;
