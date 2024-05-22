import React from "react";
import {
  HAMBURGER_ICON,
  USER_IMG,
  YOUTUBE_ICON,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/configSlice";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-flow-col p-5  shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="sidebar"
          src={HAMBURGER_ICON}
          onClick={() => dispatch(toggleSideBar())}
        />
        <img
          className="h-8 mx-2 cursor-pointer"
          alt="youtube"
          src={YOUTUBE_ICON}
        />
      </div>
      <Search />
      <div className="col-span-1 justify-self-end">
        <img className="h-8 rounded-full" alt="user" src={USER_IMG} />
      </div>
    </div>
  );
};

export default Header;
