import { sideBarIconList } from "../iconData/iconData";
import SideBarItem from "./SideBarItem";
import { FaTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const icons = sideBarIconList;

  return (
    <div className="flex-[1] justify-start">
      <FaTwitter className="w-9 h-9 text-primary-base mt-5" />
      {icons.map((e, i) => (
        <SideBarItem key={e.name} item={e} index={i} />
      ))}
      <button
        type="button"
        className=" rounded-full bg-primary-base w-[90%]  text-white font-medium hover:bg-primary-dark shadow-lg p-3  transform transition-colors duration-300"
      >
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;
