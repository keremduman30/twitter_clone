import { SidebarIconType } from "../iconData/iconData";

type SideBarItemType = {
  item: SidebarIconType;
  active: string;
  setCurrentName(name: string): void;
};

const SideBarItem = ({ item, active, setCurrentName }: SideBarItemType) => {
  const isActive = active === item.name;

  return (
    <div className="group block mt-5 mb-2 cursor-pointer">
      <div className="inline-block ">
        <div
          onClick={() => setCurrentName(item.name)}
          className="group flex  items-center p-3 px-3 gap-3 cursor-pointer group-hover:bg-gray-200 rounded-full "
        >
          <span
            className={`group-hover:text-primary-dark w-7 h-7 text-2xl text-center flex items-center ${
              isActive ? "text-primary-dark font-bold" : ""
            }`}
          >
            <item.icon />
          </span>
          <h1
            className={`group-hover:text-primary-dark font-bold text-lg ${
              isActive ? "text-primary-dark font-bold" : ""
            }`}
          >
            {item.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBarItem;
