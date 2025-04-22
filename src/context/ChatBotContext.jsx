import React, { createContext, useState } from "react";

export const ChatContent = createContext();
export const ChatContentProvider = (props) => {
  const [chats, setChats] = useState([
    { sender: "Bot", msg: "How can I help you" },
  ]);
  const setUserChat = (text) => {
    setChats((prev) => [...prev, { sender: "user", msg: text }]);
  };
  const setBotChat = (text) => {
    setChats((prev) => [...prev, { sender: "bot", msg: text }]);
  };
  return (
    <ChatContent.Provider value={{ chats, setUserChat, setBotChat }}>
      {props.children}
    </ChatContent.Provider>
  );
};
