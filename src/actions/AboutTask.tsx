import { Button, UnstyledButton } from "@mantine/core";
import { ReactComponent as CloseIcon } from "../assets/closeIcon.svg";
import { ReactComponent as CalendarIcon } from "../assets/calendarIcon.svg";
import { ReactComponent as TimeIcon } from "../assets/timeIcon.svg";
import useEditAddTaskStore from "../stores/EditAddTaskStore";
import { useAboutTaskStore } from "../stores/AboutTaskStore";

interface AboutTaskProps {
  onClose: () => void;
}

const AboutTask: React.FC<AboutTaskProps> = ({ onClose }) => {
  const { selectedTask } = useAboutTaskStore();

  const { setEditMode } = useEditAddTaskStore();

  const handleEditClick = () => {
    console.log("Setting edit mode"); // Add this line for debugging
    setEditMode(true); // Set editMode to true
  };

  return (
    <div className="px-24 py-20 shadow-xl flex flex-col gap-16">
      {selectedTask && (
        <>
          <UnstyledButton
            onClick={onClose}
            className="w-full flex justify-end items-center"
          >
            <CloseIcon />
          </UnstyledButton>

          <div className="flex flex-col gap-32">
            <h4 className="text-lg font-semibold leading-[120%] text-gray-400">
              {selectedTask.task}
            </h4>

            <div className="flex flex-col gap-8 leading-[120%] font-medium text-gray-400">
              <div className="flex items-center gap-8">
                <CalendarIcon />
                <p>{selectedTask?.date}</p>
              </div>
              <div className="flex items-center gap-8">
                <TimeIcon />
                <p>
                  {selectedTask?.startTime} - {selectedTask?.endTime}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                className="w-162 !px-16 !py-10 h-40 text-gray-700"
                radius="md"
                style={{ border: "1px solid #D0D5DD" }}
              >
                Delete
              </Button>
              <Button
                className="w-162 !px-16 !py-10 h-40"
                radius="md"
                onClick={handleEditClick}
              >
                Edit
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutTask;
