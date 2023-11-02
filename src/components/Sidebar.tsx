import { useState } from "react";
import { sideBarIconList } from "../iconData/iconData";
import SideBarItem from "./SideBarItem";
import { FaTwitter } from "react-icons/fa6";
import SideBarUser from "./SidebarUser";

const Sidebar = () => {
  const icons = sideBarIconList;
  const [currentName, setCurrentName] = useState<string | undefined>("Home");

  return (
    <div className="lg:flex-[1] w-20  flex-col justify-between">
      <div className="flex flex-col items-center lg:items-start">
        <FaTwitter className="w-9 h-9 text-primary-base mt-5 " />
        {icons.map((e) => (
          <SideBarItem
            key={e.name}
            item={e}
            active={currentName}
            setCurrentName={setCurrentName}
          />
        ))}
        <button
          type="button"
          className="hidden lg:block rounded-full bg-primary-base w-[90%]  text-white font-medium hover:bg-primary-dark shadow-lg p-3  transform transition-colors duration-300"
        >
          Tweet
        </button>
      </div>
      <SideBarUser />
    </div>
  );
};

export default Sidebar;
