import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
      return () => {
        clearInterval(timer);
      };
    }, 1500);
  }, []);

  return (
    <>
      <div className="m-2 h-[600px] p-2 border border-gray-400 bg-slate-100 rounded-lg w-full overflow-y-scroll flex flex-col-reverse">
        {chatMessages &&
          chatMessages.map((c, i) => (
            <LiveMessage name={c.name} message={c.message} key={i} />
          ))}
      </div>
      <form
        className="w-full p-2 m-2 border border-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Archana", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-72 border border-gray-900 p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-2 bg-gray-400 text-white rounded-lg ml-4">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
