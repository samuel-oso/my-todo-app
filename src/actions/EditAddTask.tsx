// EditAddTask.tsx
import React, { useState, useEffect } from "react";
import { Button, Textarea, UnstyledButton } from "@mantine/core";
import { ReactComponent as CloseIcon } from "../assets/closeBIcon.svg";
import { ReactComponent as CalendarB } from "../assets/calendarBIcon.svg";
import { ReactComponent as TimeB } from "../assets/timeBIcon.svg";
import { ReactComponent as Bell } from "../assets/notifyIcon.svg";
import { TimeInput, DateInput } from "@mantine/dates";
import useEditAddTaskStore from "../stores/EditAddTaskStore";
import { useTaskStore } from "../stores/TaskStore";
import { Task } from "../api/DummyData";
import { useAboutTaskStore } from "../stores/AboutTaskStore";

interface EditAddTaskProps {
  onClose: () => void;
  editMode: boolean;
  addMode: boolean;
}

const EditAddTask: React.FC<EditAddTaskProps> = ({ onClose, editMode }) => {
  const { addMode } = useEditAddTaskStore();
  const taskStore = useTaskStore();

  const aboutTaskStore = useAboutTaskStore();

  // take selected task from here
  const { selectedTask } = useAboutTaskStore();

  const [task, setTask] = useState<Task>(() => {
    if (editMode && selectedTask) {
      return selectedTask;
    }
    return {
      id: "",
      task: "",
      startTime: "00:00",
      endTime: "00:00",
      date: new Date(),
      completed: false,
    };
  });

  useEffect(() => {
    if (editMode) {
      const selectedTask = taskStore.tasks.find(
        (t) => t.id === taskStore.selectedTask?.id
      );
      if (selectedTask) {
        setTask(selectedTask);
      }
    }
  }, [editMode, taskStore.selectedTask, taskStore.tasks]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (addMode) {
      taskStore.addTask(task);
    } else if (editMode) {
      taskStore.editTask(task.id, task);
    }

    aboutTaskStore.setSelectedTask(task);

    onClose();
  };

  const isTaskEmpty = task.task.trim() === "";

  return (
    <div className="p-24 shadow-xl flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h4
          className={`text-gray-900 text-lg font-semibold ${
            editMode ? "text-red-600" : ""
          }`}
        >
          {editMode ? "Edit" : "Create new"} task
        </h4>
        <UnstyledButton onClick={onClose}>
          <CloseIcon />
        </UnstyledButton>
      </div>

      <Textarea name="task" value={task.task} onChange={handleInputChange} />
      {/* show selectedTask.task here in the text area already filled and editable when in edit mode */}

      <div className="flex items-center justify-between timeCard">
        <DateInput
          name="date"
          icon={<CalendarB />}
          value={task.date ? new Date(task.date) : null}
          valueFormat="DD/MM/YY"
          onChange={(dateValue) => {
            if (dateValue instanceof Date) {
              // Handle date input change here
              setTask((prevTask) => ({
                ...prevTask,
                date: dateValue.toISOString().split("T")[0], // Convert Date back to string
              }));
            }
          }}
        />

        <div className="flex gap-10">
          <TimeInput
            name="startTime"
            icon={<TimeB />}
            value={task.startTime}
            onChange={handleInputChange}
          />
          <TimeInput
            name="endTime"
            icon={<TimeB />}
            value={task.endTime}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <Bell />
          <p className="font-medium text-[#667085]">10 Minutes before</p>
        </div>
        <UnstyledButton>
          <CloseIcon className="w-16 h-16" />
        </UnstyledButton>
      </div>

      <div className="flex items-center justify-between mt-16">
        <Button
          variant="outline"
          className="w-162 !px-16 !py-10 h-40 text-gray-700"
          radius="md"
          style={{ border: "1px solid #D0D5DD" }}
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          className="w-162 !px-16 !py-10 h-40"
          radius="md"
          onClick={handleSave}
          disabled={isTaskEmpty}
        >
          {editMode ? "Save" : "Add"}{" "}
        </Button>
      </div>
    </div>
  );
};

export default EditAddTask;
