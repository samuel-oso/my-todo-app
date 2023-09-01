import React from "react";
import Calendar from "../../inputs/Calendar";

interface TimingCardProps {
  onCalendarDateChange: (date: Date) => void;
}

const TimingCard: React.FC<TimingCardProps> = ({ onCalendarDateChange }) => {
  return (
    <div className="px-24 py-20 w-394 h-390 shadow-xl">
      <Calendar onCalendarDateSelect={onCalendarDateChange} />
    </div>
  );
};

export default TimingCard;
