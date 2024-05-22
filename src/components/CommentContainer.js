import React from "react";
import Comment from "./Comment";
import { COMMENTS } from "../utils/constants";

const CommentList = ({ data }) => {
  return data.map((c, i) => (
    <div key={i}>
      <Comment data={c} />
      <div className="ml-5 pl-5 border-l border-l-gray-300">
        <CommentList data={c.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments </h1>
      <CommentList data={COMMENTS} />
    </div>
  );
};

export default CommentContainer;
