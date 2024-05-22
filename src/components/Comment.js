import React from "react";
import { USER_IMG } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-lg my-2">
      <img className="h-8 rounded-full" alt="user" src={USER_IMG} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
