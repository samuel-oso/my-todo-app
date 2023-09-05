import React from "react";
import Calendar from "../inputs/Calendar";
import EditAddTask from "../actions/EditAddTask";
import AboutTask from "../actions/AboutTask";
import useTaskStore from "../stores/TaskStore";
import { useAboutTaskStore } from "../stores/AboutTaskStore";

interface TasksActionProps {
  onCalendarDateChange: (date: Date) => void;
  onCloseEditAddTask: () => void; // Add this line
  editMode: boolean;
  addMode: boolean;
}

const TasksAction: React.FC<TasksActionProps> = ({ onCalendarDateChange }) => {
  const { isAboutTaskOpen, closeAboutTask } = useAboutTaskStore();
  const { addMode, editMode, resetMode } = useTaskStore(); // Import addMode and editMode from the Zustand store

  return (
    <div className="w-394">
      {addMode || editMode ? (
        <EditAddTask
          onClose={() => resetMode()} // Close EditAddTask and reset modes
          editMode={editMode}
          addMode={addMode}
        />
      ) : isAboutTaskOpen ? (
        <AboutTask onClose={closeAboutTask} />
      ) : (
        <Calendar onCalendarDateSelect={onCalendarDateChange} />
      )}
    </div>
  );
};

export default TasksAction;
