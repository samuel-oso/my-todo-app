import React from "react";
import Calendar from "../../inputs/Calendar";
import AboutTask from "../../actions/AboutTask";
import EditAndDeleteTask from "../../actions/EditAndDeleteTask";

interface TimingCardProps {
  onCalendarDateChange: (date: Date) => void;
}

const TimingCard: React.FC<TimingCardProps> = ({ onCalendarDateChange }) => {
  return (
    <div className="w-394">
      {/* <div className="px-24 py-20 h-390 shadow-xl">
        <Calendar onCalendarDateSelect={onCalendarDateChange} />
      </div> */}

      <AboutTask />

      {/* <EditAndDeleteTask /> */}
    </div>
  );
};

export default TimingCard;
