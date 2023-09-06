import React, { useEffect, useState } from "react";
import { Checkbox, Loader } from "@mantine/core";
import CustomPagination from "./CustomPagination";
import { useAboutTaskStore } from "../stores/AboutTaskStore";
import { useTaskStore } from "../stores/TaskStore";
import { fetchTasks } from "../api/DummyData";
import { formatTaskDate } from "../inputs/DateUtils";

const MyTasks: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTaskToStore = useTaskStore((state) => state.addTask);
  const editTaskInStore = useTaskStore((state) => state.editTask);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 7;
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);

  const toggleTaskCompletion = (taskId: number) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (taskToUpdate) {
      editTaskInStore(taskId, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      });
    }
  };

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const tasksToDisplay = tasks.slice(startIndex, endIndex);

  const { setSelectedTask, openAboutTask } = useAboutTaskStore();

  const handleTaskClick = (taskId: number) => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    setActiveTaskId(taskId);
    openAboutTask();

    if (selectedTask !== undefined) {
      setSelectedTask(selectedTask);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Simulate a 2-second delay
      setTimeout(async () => {
        try {
          const data = await fetchTasks();
          data.forEach((task: any) => {
            addTaskToStore(task);
          });
        } catch (error) {
          console.error("Error fetching tasks:", error);
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    };

    fetchData();
  }, [addTaskToStore]);

  return (
    <section>
      <p className="text-gray-900 font-semibold mb-16">My Tasks</p>

      {isLoading ? (
        <div className="flex items-center justify-center h-300">
          <Loader size={40} variant="dots" />
        </div>
      ) : (
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
                      {task.startTime} - {task.endTime}
                    </p>
                  </div>
                }
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <p className="text-sm text-gray-600 leading-[20px]">
                {formatTaskDate(task.date)}
              </p>
            </div>
          ))}
        </div>
      )}

      <CustomPagination
        total={Math.ceil(tasks.length / tasksPerPage)}
        value={currentPage}
        onChange={(newValue) => setCurrentPage(newValue)}
      />
    </section>
  );
};

export default MyTasks;
