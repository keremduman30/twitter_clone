import { useEffect, useState } from "react";
import { SidebarIconType } from "../iconData/iconData";

type SideBarItemType = {
  item: SidebarIconType;
  index: number;
};

const SideBarItem = ({ item, index }: SideBarItemType) => {
  const [currentIndex, setindex] = useState<number>(0);
  useEffect(() => {
    console.log(currentIndex + "current");
  }, [currentIndex]);

  return (
    <div className="block mt-5 mb-2">
      <div className="inline-block ">
        <div
          onClick={() => setindex(index)}
          className="group flex  items-center p-3 px-3 gap-3 cursor-pointer hover:bg-gray-200 rounded-full "
        >
          <span
            className={`group-hover:text-primary-dark w-7 h-7 text-2xl text-center flex items-center`}
          >
            <item.icon />
          </span>
          <h1 className={`group-hover:text-primary-dark font-bold text-lg `}>
            {item.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBarItem;
