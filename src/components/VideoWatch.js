import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const VideoWatch = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.video);
  const [params] = useSearchParams();
  const id = params.get("v");
  const video = videos.filter((v) => v.id === id)[0];
  const { description, title, channelTitle } = video.snippet;
  console.log(video);
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex w-full">
        <div className="m-2">
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2 className="font-bold text-lg">{title}</h2>
          <div className="flex justify-between">
            <div>
              {channelTitle}
              <button className="bg-gray-200 rounded-lg px-4 py-2 mx-2">
                Subscribe
              </button>
            </div>
            <div>
              <button className="bg-gray-200 rounded-l-full px-4 py-2 border-r border-r-gray-400">
                👍🏻
              </button>
              <button className="bg-gray-200 rounded-r-full px-4 py-2 border-l border-l-gray-4">
                👎🏻
              </button>
              <button className="bg-gray-200 rounded-full px-4 py-2 border ml-4">
                Share
              </button>
              <button className="bg-gray-200 rounded-full px-4 py-2 border ml-4">
                Download
              </button>
            </div>
          </div>
          {/* <div className="m-2 bg-gray-200 p-5 rounded-lg">{description}</div> */}
          <CommentContainer />
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default VideoWatch;
