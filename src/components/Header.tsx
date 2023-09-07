import { Button } from "@mantine/core";
import Plus from "../assets/plusIcon.svg";
import useEditAddTaskStore from "../stores/EditAddTaskStore";
import Microphone from "../assets/microphone.svg";

interface HeaderProps {
  onCreateTaskClick: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "Hello!";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  const { setAddMode } = useEditAddTaskStore();

  const handleAddClick = () => {
    setAddMode(); // Trigger the add mode
  };

  return (
    <section className="px-16 lg:px-32 pt-32 lg:pt-48 flex justify-between items-start">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl lg:text-[30px] text-gray-900">
          {greeting}
        </h1>
        <p className="text-gray-600">You've got some tasks to do.</p>
      </div>

      <Button
        leftIcon={<img src={Plus} alt="plus-icon" />}
        className="!px-16 !py-10 h-40 hidden lg:block"
        radius="md"
        onClick={handleAddClick}
      >
        Create New Task
      </Button>

      <div
        onClick={handleAddClick}
        style={{ background: "white" }}
        className="h-100 w-full bottom-0 fixed z-10 block lg:hidden"
      >
        <div
          style={{
            border: "1px solid #D0D5DD",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            width: "calc(100% - 32px)",
          }}
          className="rounded-lg bg-[#f9fafb] cursor-pointer mt-15 py-8 px-12 h-48 flex items-center justify-between gap-8 text-[#475467]"
        >
          <p>Input task</p>
          <img src={Microphone} alt="microphone" />
        </div>
      </div>
    </section>
  );
};

export default Header;
