import React, { useContext, useState, useRef, useEffect } from "react";
import { ChatContent } from "../context/ChatBotContext";

const getBotReply = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reply = `bot reply: you said "${input}"`;
      resolve(reply);
    }, 1500);
  });
};

const Dashboard = () => {
  const { chats, setUserChat, setBotChat } = useContext(ChatContent);
  const [input, setInput] = useState("");

  const chatScrollBottomRef = useRef(null);

  useEffect(() => {
    if (chatScrollBottomRef.current)
      chatScrollBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  // console.log(input);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Enter your response First");
      return;
    }
    setUserChat(input.trim());
    setInput("");

    const botInput = await getBotReply(input);
    setBotChat(botInput);
  };
  return (
    <div>
      {/*-----------------conversation chats----------------*/}
      <div
        style={{
          padding: "15px",
          width: "50%",
          height: "500px",
          overflowY: "scroll",
          border: "1px solid #ccc",
        }}
      >
        {chats &&
          chats.map((chat, ChatIndex) => (
            <div
              key={ChatIndex}
              style={{
                textAlign: chat.sender === "user" ? "right" : "left",
              }}
            >
              <p>
                <strong>{chat.sender} : </strong>
                {chat.msg}
              </p>
              {/*just to scroll down*/}

              <div ref={chatScrollBottomRef} />
            </div>
          ))}
      </div>
      {/*-----------------chat Input Box----------------*/}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Ask" />
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
