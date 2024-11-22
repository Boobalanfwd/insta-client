import { NavLink } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import CreateIcon from "../icons/CreateIcon";
import { IoLogoInstagram } from "react-icons/io";

const SideNav = () => {
  return (
    <div className="h-full bg-black text-white p-6 border-r border-gray-700 flex flex-col  sm:items-start items-center">
      <div className="flex gap-3 items-center">
        <IoLogoInstagram className="h-10 w-10 sm:hidden block" />
        <h1 className="text-2xl font-extralight font-sans hidden md:block ">
          Instagram
        </h1>
      </div>

      <div className="flex flex-col mt-10 gap-4">
        <NavLink
          to="/"
          className="text-xl text-[#f5f5f5] flex gap-3 items-center"
        >
          <HomeIcon className="h-6 w-6" />
          <span className="hidden md:block">Home</span>
        </NavLink>
        <NavLink
          to="/post/add"
          className="text-xl text-[#f5f5f5] flex gap-3 items-center"
        >
          <CreateIcon className="h-6 w-6" />
          <span className="hidden md:block">Create Post</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
