import { useState } from "react";
import db from "../db/firebase";
import { BsStars } from "react-icons/bs";
import { contentIconList } from "../iconData/iconData";
import { addDoc, collection } from "@firebase/firestore";
const ContentShare = () => {
  const [text, setText] = useState<string>("");
  const handlerClick = async () => {
    if (text.length > 0) {
      await addDoc(collection(db, "posts"), {
        post: text,
        name: "Kerem",
        timestamp: new Date(),
      });
      setText("");
    }
  };
  return (
    <div className="px-7 bg-white  shadow-sm  ">
      <div className="flex justify-between  my-2 border-b border-solid py-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <BsStars className="text-3xl text-primary-dark" />
      </div>

      <div className="flex gap-3  ">
        <img
          src={import.meta.env.VITE_USER}
          className="w-12 h-12 rounded-full mt-1"
          alt=""
        />
        <div className="flex flex-col w-full">
          <div className="border-b border-solid py-4">
            <textarea
              placeholder="What's Happening?"
              className="placeholder-gray-500 focus:outline-none w-full resize-none"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>

          <div className="flex justify-between my-5 items-center ">
            <div className="flex gap-5">
              {contentIconList.map((e) => (
                <span
                  key={e.icon}
                  className="text-primary-base text-xl cursor-pointer"
                >
                  <e.icon />
                </span>
              ))}
            </div>
            <button
              onClick={handlerClick}
              type="button"
              className={`w-32 p-2 rounded-full bg-primary-base text-white text-xl hover:bg-primary-dark   transform transition-colors duration-300 ${
                text === "" && "opacity-50"
              }`}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShare;
