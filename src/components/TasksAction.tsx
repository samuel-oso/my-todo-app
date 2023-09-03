import React from "react";
import Calendar from "../inputs/Calendar";

interface TasksActionProps {
  onCalendarDateChange: (date: Date) => void;
}

const TasksAction: React.FC<TasksActionProps> = ({ onCalendarDateChange }) => {
  return (
    <div className="w-394">
      <div className="px-24 py-20 h-390 shadow-xl">
        <Calendar onCalendarDateSelect={onCalendarDateChange} />
      </div>

      {/* <AboutTask /> */}

      {/* <EditAndDeleteTask /> */}
    </div>
  );
};

export default TasksAction;
