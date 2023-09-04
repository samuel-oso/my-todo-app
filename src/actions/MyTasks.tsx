import React, { useState, useEffect } from "react";
import { Checkbox } from "@mantine/core";
import DummyData from "../api/DummyData";
import CustomPagination from "./CustomPagination";
import { useAboutTask } from "../contexts/AboutTaskContext";
interface Task {
  id: number;
  task: string;
  time: string;
  completed: boolean;
}

const MyTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 7;
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onDataFetched = (data: Task[]) => {
    setTasks(data);
  };

  useEffect(() => {}, []);

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  const tasksToDisplay = tasks.slice(startIndex, endIndex);

  const handleTaskClick = (taskId: number) => {
    setActiveTaskId(taskId === activeTaskId ? null : taskId);
  };

  const { openAboutTask } = useAboutTask();

  const handleAboutTaskClick = () => {
    openAboutTask();
  };

  return (
    <section>
      <p className="text-gray-900 font-semibold mb-16">My Tasks</p>
      <div className="flex flex-col gap-16 overflow-y-auto cursor-pointer">
        {tasksToDisplay.map((task) => (
          <div
            key={task.id}
            className={`px-24 py-16 flex justify-between items-center h-72 ${
              task.id === activeTaskId ? "bg-[#EAEDFE]" : ""
            }`}
            style={{ borderBottom: "1px solid #EAECF0" }}
            onClick={() => handleTaskClick(task.id)}
          >
            <Checkbox
              label={
                <div>
                  <p
                    className={`mb-4 text-sm font-medium ${
                      task.completed
                        ? "line-through text-[#D0D5DD]"
                        : "text-gray-900"
                    }`}
                  >
                    {task.task}
                  </p>
                  <p
                    className={`text-sm ${
                      task.completed
                        ? "line-through text-[#D0D5DD]"
                        : "text-gray-600"
                    } leading-[20px]`}
                  >
                    {task.time}
                  </p>
                </div>
              }
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <p className="text-sm text-gray-600 leading-[20px]">Today</p>
          </div>
        ))}
      </div>

      <button onClick={handleAboutTaskClick}>Open About Task</button>

      <CustomPagination
        total={Math.ceil(tasks.length / tasksPerPage)}
        value={currentPage}
        onChange={(newValue) => setCurrentPage(newValue)}
      />

      {/* Render DummyData component to fetch and pass data */}
      <DummyData onDataFetched={onDataFetched} />
    </section>
  );
};

export default MyTasks;
