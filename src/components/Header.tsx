import { Button } from "@mantine/core";
import Plus from "../assets/plusIcon.svg";
import useTaskStore from "../stores/EditAddTaskStore";

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

  const { setAddMode } = useTaskStore();

  const handleAddClick = () => {
    setAddMode(); // Trigger the add mode
  };

  return (
    <section className="px-32 pt-48 flex justify-between items-start">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-[30px] text-gray-900">{greeting}</h1>
        <p className="text-gray-600">You've got some tasks to do.</p>
      </div>

      <Button
        leftIcon={<img src={Plus} alt="plus-icon" />}
        className="!px-16 !py-10 h-40"
        radius="md"
        onClick={handleAddClick}
      >
        Create New Task
      </Button>
    </section>
  );
};

export default Header;
