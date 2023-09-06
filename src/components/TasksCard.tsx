import React, { useEffect, useRef } from "react";
import MyTasks from "../actions/MyTasks";
interface TasksCardProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void; // Prop to handle date selection
}

const TasksCard: React.FC<TasksCardProps> = ({
  selectedDate,
  onDateSelect,
}) => {
  const currentDate = selectedDate || new Date(); // Use selectedDate if available, otherwise use today's date

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create a ref for the selected date card
  const selectedDateCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll the selected date card into view when selectedDate changes
    if (selectedDateCardRef.current) {
      selectedDateCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedDate]);

  const dayCards = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const dayOfWeek = daysOfWeek[(firstDay + index) % 7];

    const isActive = currentDate.getDate() === day;

    const cardStyle = {
      border: isActive ? "none" : "1px solid #D0D5DD",
      cursor: "pointer",
    };

    const textStyle = {
      color: isActive ? "white" : "#344054",
    };

    const handleDateClick = () => {
      // Update the selected date when a date card is clicked
      const newSelectedDate = new Date(year, month, day);
      onDateSelect(newSelectedDate);
    };

    return (
      <div
        key={day}
        ref={isActive ? selectedDateCardRef : null}
        className={`px-16 py-10 min-w-[62px] h-68 flex flex-col justify-center items-center rounded-lg shadow-sm gap-8 text-sm font-semibold ${
          isActive
            ? "hover:bg-[#0e31f2] bg-[#3f5bf6]"
            : "hover:bg-[#67698c1a] bg-white"
        }`}
        style={cardStyle}
        onClick={handleDateClick}
      >
        <p style={textStyle}>{dayOfWeek}</p>
        <p style={textStyle}>{day}</p>
      </div>
    );
  });

  return (
    <div
      className="max-w-[842px] pl-32 pr-24 flex flex-col gap-32"
      style={{ borderRight: "1px solid #eaecf0" }}
    >
      <div>
        <p className="text-gray-900 font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </p>

        <div className="flex items-center gap-16 mt-16 overflow-auto scrollbar-hide">
          {dayCards}
        </div>
      </div>

      <MyTasks />
    </div>
  );
};

export default TasksCard;
