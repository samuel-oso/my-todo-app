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
    setIsEditAddTaskOpen(!isEditAddTaskOpen);
  };

  return (
    <main className="relative">
      <Navbar />
      <div className="max-w-[1340px] m-auto">
        <Header onCreateTaskClick={handleCreateTaskClick} />
        <main className="lg:px-32  mt-32 flex justify-between pb-100 flex-col lg:flex-row">
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
