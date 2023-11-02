const SideBarUser = () => {
  return (
    <div className="hidden xl:flex my-5  justify-between items-center pr-8  rounded-full hover:bg-primary-light">
      <img
        className="w-11 h-11 rounded-full"
        src="https://avatars.githubusercontent.com/u/65291634?v=4"
        alt=""
      />
      <div className="flex flex-col justify-center my-2">
        <h1 className="font-bold text-md text-black">Kerem Duman</h1>
        <h1 className="text-sm text-gray-dark">@kerem_dmn</h1>
      </div>
      <div className="flex gap-1 ">
        <div className="w-1 h-1 rounded-full bg-gray-900" />
        <div className="w-1 h-1 rounded-full bg-gray-900" />
        <div className="w-1 h-1 rounded-full bg-gray-900" />
      </div>
    </div>
  );
};

export default SideBarUser;
