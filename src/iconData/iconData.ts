import {
  AiOutlineMail,
  BsBookmark,
  CgList,
  CgMoreO,
  FaRegUser,
  HiHashtag,
  IoNotificationsOutline,
  RiHome7Fill,
  TfiGallery,
  AiOutlineFileGif,
  BsEmojiSmile,
  BsFillBarChartLineFill,
} from "./icon";

export type SidebarIconType = {
  icon: string;
  name?: string;
};
const sideBarIconList: SidebarIconType[] = [
  { icon: RiHome7Fill, name: "Home" },
  { icon: HiHashtag, name: "Explore" },
  { icon: IoNotificationsOutline, name: "Notifications" },
  { icon: AiOutlineMail, name: "Messages" },
  { icon: BsBookmark, name: "Bookmarks" },
  { icon: CgList, name: "Lists" },
  { icon: FaRegUser, name: "Profile" },
  { icon: CgMoreO, name: "More" },
];
const contentIconList: SidebarIconType[] = [
  { icon: TfiGallery },
  { icon: AiOutlineFileGif },
  { icon: BsEmojiSmile },
  { icon: AiOutlineMail },
  { icon: BsFillBarChartLineFill },
];

export { sideBarIconList, contentIconList };
