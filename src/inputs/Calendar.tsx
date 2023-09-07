import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { TextInput } from "@mantine/core";

interface CalendarProps {
  onCalendarDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onCalendarDateSelect }) => {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleDateSelect = (date: Date) => {
    setValue(date);
    onCalendarDateSelect(date);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setValue(today);
    onCalendarDateSelect(today);
  };

  const renderDay = (date: Date) => {
    return <div onClick={() => handleDateSelect(date)}>{date.getDate()}</div>;
  };

  const formattedDate =
    value?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }) || "";

  return (
    <div className="px-24 py-20 h-390 shadow-xl hidden lg:block">
      <div className="relative">
        <div className="flex gap-12 mt-4 items-center absolute top-45 pb-12">
          <TextInput
            className="text-gray-700 rounded-lg shadow-sm calendarInput w-262"
            value={formattedDate}
            readOnly
          />

          <div
            className="cursor-pointer px-16 py-10 h-40 text-sm font-semibold text-gray700 rounded-lg shadow-sm bg-[#fff]"
            style={{ border: "1px solid #D0D5DD" }}
            onClick={handleTodayClick}
          >
            Today
          </div>
        </div>

        <DatePicker
          value={value}
          onChange={handleDateSelect}
          renderDay={renderDay}
        />
      </div>
    </div>
  );
};

export default Calendar;
