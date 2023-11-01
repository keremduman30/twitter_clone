import {
  AiOutlineMail,
  BsBookmark,
  CgList,
  CgMoreO,
  FaRegUser,
  HiHashtag,
  IoNotificationsOutline,
  RiHome7Fill,
} from "./icon";

export type SidebarIconType = {
  icon: string;
  name: string;
};
export const sideBarIconList: SidebarIconType[] = [
  { icon: RiHome7Fill, name: "Home" },
  { icon: HiHashtag, name: "Explore" },
  { icon: IoNotificationsOutline, name: "Notifications" },
  { icon: AiOutlineMail, name: "Messages" },
  { icon: BsBookmark, name: "Bookmarks" },
  { icon: CgList, name: "Lists" },
  { icon: FaRegUser, name: "Profile" },
  { icon: CgMoreO, name: "More" },
];
