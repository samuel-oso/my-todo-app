import React, { useState } from "react";
import TasksCard from "./subComponents/TasksCard";
import TimingCard from "./subComponents/TimingCard";

const TasksDetails: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <section className="px-32 mt-32 flex justify-between pb-96">
      <TasksCard selectedDate={selectedDate} onDateSelect={handleDateSelect} />{" "}
      <TimingCard onCalendarDateChange={handleDateSelect} />
    </section>
  );
};

export default TasksDetails;
