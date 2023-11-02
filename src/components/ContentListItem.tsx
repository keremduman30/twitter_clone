import { PostType } from "./Content";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShare } from "react-icons/lu";
type ContentItemType = {
  item: PostType;
};

const ContentListItem = ({ item }: ContentItemType) => {
  return (
    <div className="px-7 flex  items-start gap-5 my-2 border-b border-solid ">
      <img
        src={import.meta.env.VITE_USER}
        className="w-12 h-12 rounded-full mt-3 "
        alt=""
      />
      <div className="flex flex-col justify-center my-2 w-full">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2">
              <span className="text-base font-bold">{item.name}</span>
              <span className="text-gray-400">@{item.name}</span>
              <span className="text-gray-400">
                {item.timestamp?.toDate().toLocaleTimeString("tr-TR")}
              </span>
            </div>
          </div>
          <div className="flex gap-1  cursor-pointer">
            <div className="w-1 h-1 rounded-full bg-gray-900" />
            <div className="w-1 h-1 rounded-full bg-gray-900" />
            <div className="w-1 h-1 rounded-full bg-gray-900" />
          </div>
        </div>
        <h1 className="text-xl mb-2">{item.post}</h1>
        {item.image && (
          <img
            src={item.image}
            className="w-full h-[500px] object-cover rounded-xl shadow-sm my-2 mb-2"
            alt=""
          />
        )}
        <div className="flex justify-between mr-5 my-2 text-xl ">
          <div>
            <FaRegComment className="cursor-pointer hover:text-primary-dark " />
          </div>
          <div>
            <AiOutlineRetweet className="cursor-pointer hover:text-primary-dark " />
          </div>
          <div>
            <MdOutlineFavoriteBorder className="cursor-pointer hover:text-red-600 " />
          </div>
          <div>
            <LuShare className="cursor-pointer hover:text-blue-500 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentListItem;
