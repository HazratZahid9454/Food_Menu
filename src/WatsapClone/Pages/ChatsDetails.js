import React, { useState } from "react";
import BottomTab from "../Components/BottomTab";
import TextMessage from "../Components/TextMessage";
import TopNavbar from "../Components/TopNavbar";

const ChatsDetails = ({ data }) => {
  const [Message, setMessage] = useState("");
  const [messageData, setmessageData] = useState([]);

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage("");
    setmessageData([Message, ...messageData]);
  };
  return data == "" ? (
    <p className="mt-72 ml-10">please click on one of the message</p>
  ) : (
    <div className="w-full relative">
      <TopNavbar data={data} />
      <>
        {messageData.map((msg) => {
          return (
            <div key={msg} className=" flex justify-start items-center">
              <TextMessage text={msg} />
            </div>
          );
        })}
      </>

      <BottomTab
        onSubmit={handleMessage}
        value={Message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default ChatsDetails;
