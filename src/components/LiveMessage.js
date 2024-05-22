import React from "react";
import { USER_IMG } from "../utils/constants";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img className="h-8 rounded-full" alt="user" src={USER_IMG} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default LiveMessage;
