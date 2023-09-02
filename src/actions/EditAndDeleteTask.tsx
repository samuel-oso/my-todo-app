import { Button, Input, Textarea, UnstyledButton } from "@mantine/core";
import { ReactComponent as CloseIcon } from "../assets/closeBIcon.svg";
import { ReactComponent as CalendarB } from "../assets/calendarBIcon.svg";
import { ReactComponent as TimeB } from "../assets/timeBIcon.svg";
import { ReactComponent as Bell } from "../assets/notifyIcon.svg";

import { TimeInput } from "@mantine/dates";

const EditAndDeleteTask = () => {
  return (
    <div className="p-24 shadow-xl flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h4 className="text-gray-900 text-lg font-semibold">Add Task</h4>

        <UnstyledButton>
          <CloseIcon />
        </UnstyledButton>
      </div>

      <Textarea />

      <div className="flex items-center justify-between timeCard">
        <Input icon={<CalendarB />} defaultValue="12/03/1200" />

        <div className="flex  gap-16">
          <TimeInput icon={<TimeB />} defaultValue="00:00" />
          <TimeInput icon={<TimeB />} defaultValue="00:00" />
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
        >
          Cancel
        </Button>
        <Button className="w-162 !px-16 !py-10 h-40" radius="md">
          Add
        </Button>
      </div>
    </div>
  );
};

export default EditAndDeleteTask;
