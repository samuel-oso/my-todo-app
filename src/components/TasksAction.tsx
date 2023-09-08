import React from "react";
import Calendar from "../inputs/Calendar";
import EditAddTask from "../actions/EditAddTask";
import AboutTask from "../actions/AboutTask";
import useEditAddTaskStore from "../stores/EditAddTaskStore";
import { useAboutTaskStore } from "../stores/AboutTaskStore";

interface TasksActionProps {
  onCalendarDateChange: (date: Date) => void;
  onCloseEditAddTask: () => void; 
  editMode: boolean;
  addMode: boolean;
}

const TasksAction: React.FC<TasksActionProps> = ({ onCalendarDateChange }) => {
  const { isAboutTaskOpen, closeAboutTask } = useAboutTaskStore();
  const { addMode, editMode, resetMode } = useEditAddTaskStore(); 
  return (
    <div className="w-394">
      {addMode || editMode ? (
        <EditAddTask
          onClose={() => resetMode()} 
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
