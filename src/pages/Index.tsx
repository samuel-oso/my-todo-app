import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TasksCard from "../components/TasksCard";
import TasksAction from "../components/TasksAction";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isEditAddTaskOpen, setIsEditAddTaskOpen] = useState(false);
  // Define isEditAddTaskOpen here

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCreateTaskClick = () => {
    setIsEditAddTaskOpen(true);
  };

  const handleCloseEditAddTask = () => {
    setIsEditAddTaskOpen(false);
  };

  return (
    <main>
      <Navbar />
      <div className="max-w-[1340px] m-auto">
        <Header onCreateTaskClick={handleCreateTaskClick} />
        <main className="px-32 mt-32 flex justify-between pb-96">
          <TasksCard
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
          <TasksAction
            onCalendarDateChange={handleDateSelect}
            onCloseEditAddTask={handleCloseEditAddTask}
            editMode={true}
            addMode={true}
          />
        </main>
      </div>
    </main>
  );
};

export default Index;
