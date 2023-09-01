import React, { useState } from "react";
import { Checkbox } from "@mantine/core";

interface Task {
  id: number;
  task: string;
  time: string;
  completed: boolean;
}

const MyTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      task: "Create Wire frame",
      time: "10:30 am - 11:30 am",
      completed: false,
    },
    {
      id: 2,
      task: "Task 2",
      time: "12:00 pm - 1:00 pm",
      completed: false,
    },
    {
      id: 3,
      task: "Task 2",
      time: "12:00 pm - 1:00 pm",
      completed: false,
    },
    {
      id: 4,
      task: "Task 2",
      time: "12:00 pm - 1:00 pm",
      completed: false,
    },
    {
      id: 5,
      task: "Task 2",
      time: "12:00 pm - 1:00 pm",
      completed: false,
    },
    {
      id: 6,
      task: "Task 2",
      time: "12:00 pm - 1:00 pm",
      completed: false,
    },
    {
      id: 7,
      task: "Task 2",
      time: "12:00 pm - 1:00 pm",
      completed: false,
    },
  ]);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="mt-32 ">
      <p className="text-gray-900 font-semibold mb-16">My Tasks</p>

      <div className="flex flex-col gap-16 overflow-y-auto max-h-[500px] scrollbar-hide">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="px-24 py-16 flex justify-between items-center h-72 bg-gray-50"
            style={{ borderBottom: "1px solid #EAECF0" }}
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
    </section>
  );
};

export default MyTasks;
