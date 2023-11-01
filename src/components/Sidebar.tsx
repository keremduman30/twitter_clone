import { useState } from "react";
import { sideBarIconList } from "../iconData/iconData";
import SideBarItem from "./SideBarItem";
import { FaTwitter } from "react-icons/fa6";
import SideBarUser from "./SidebarUser";

const Sidebar = () => {
  const icons = sideBarIconList;
  const [currentName, setCurrentName] = useState<string>("Home");

  return (
    <div className="flex-[1] flex flex-col justify-between">
      <div>
        <FaTwitter className="w-9 h-9 text-primary-base mt-5" />
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
          className=" rounded-full bg-primary-base w-[90%]  text-white font-medium hover:bg-primary-dark shadow-lg p-3  transform transition-colors duration-300"
        >
          Tweet
        </button>
      </div>
      <SideBarUser />
    </div>
  );
};

export default Sidebar;
