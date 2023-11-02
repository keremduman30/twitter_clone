import { AiOutlineSearch } from "react-icons/ai";
import { Timeline } from "react-twitter-widgets";

const RightSidebar = () => {
  return (
    <div className="hidden flex-[1] md:flex flex-col items-center mx-2 lg:mx-5 ">
      <div className="flex items-center gap-2 p-2 px-5 bg-gray-200 rounded-full  my-2 focus-within:ring-1 focus-within:ring-primary-base focus-within:bg-white">
        <AiOutlineSearch className="text-xl text-gray-dark focus-within:text-primary-base " />
        <input
          type="text"
          placeholder="search in twitter"
          className="placeholder-gray-400 bg-transparent focus:outline-none  "
        />
      </div>
      <div className="mt-5   ">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "lawik1907",
          }}
          options={{
            height: "1000",
            width: "300",
          }}
        />
      </div>
    </div>
  );
};

export default RightSidebar;
