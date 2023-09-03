import React, { useState } from "react";
import Calendar from "../inputs/Calendar";
import EditAddTask from "../actions/EditAddTask";

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
  return (
    <div className="w-394">
      {isEditAddTaskOpen ? (
        <EditAddTask onClose={onCloseEditAddTask} />
      ) : (
        <Calendar onCalendarDateSelect={onCalendarDateChange} />
      )}
    </div>
  );
};

export default TasksAction;
