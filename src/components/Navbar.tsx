import { UnstyledButton } from "@mantine/core";
import Profile from "../assets/profileIcon.svg";
import Settings from "../assets/settingsIcon.svg";
import Notification from "../assets/notificationIcon.svg";

const Navbar = () => {
  return (
    <nav style={{ borderBottom: "1px solid #EAECF0" }} className="h-72">
      <div className="h-72 max-w-[1340px] m-auto">
        <div className="px-32 flex justify-between items-center h-full">
          <h2 className="font-bold">ToDo</h2>
          <div className="flex gap-16">
            <div className="flex gap-4">
              <UnstyledButton>
                <img src={Settings} alt="settings-icon" />
              </UnstyledButton>
              <UnstyledButton>
                <img src={Notification} alt="notification-icon" />
              </UnstyledButton>
            </div>

            <img src={Profile} alt="notification-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
