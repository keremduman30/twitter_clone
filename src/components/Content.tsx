import { useEffect, useState } from "react";
import ContentShare from "./ContentShare";
import { Timestamp, collection, onSnapshot, query } from "@firebase/firestore";
import db from "../db/firebase";
import ContentListItem from "./ContentListItem";
export type PostType = {
  name?: string;
  post: string;
  timestamp?: Timestamp;
  image?: string;
};
const Content = () => {
  const [tweets, settweets] = useState<PostType[]>([]);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      const tweetList: PostType[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const name = data.name;
        const post = data.post;
        const image = data.image;
        const timestamp = data.timestamp;

        const tweet = {
          name,
          post,
          timestamp,
          image,
        };
        tweetList.push(tweet);
      });

      settweets(tweetList);
    });
  }, []);

  return (
    <div className="flex-[3] flex flex-col  border border-solid bg-gray-100  ">
      <ContentShare />
      {tweets.length > 0 && (
        <div className="mt-5 bg-white flex-1">
          {tweets.map((e) => (
            <ContentListItem item={e} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;
