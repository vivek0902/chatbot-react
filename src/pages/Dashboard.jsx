import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserMessage, addBotMessage } from "../store/slices/chatSlice";

const getBotReply = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reply = `bot reply: you said "${input}"`;
      resolve(reply);
    }, 1500);
  });
};

const Dashboard = () => {
  const [input, setInput] = useState("");
  const chats = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
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
    dispatch(addUserMessage(input.trim()));

    setInput("");

    const botInput = await getBotReply(input);
    dispatch(addBotMessage(botInput));
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
                <strong>
                  {chat.sender === "user" ? "you said" : chat.sender} :{" "}
                </strong>
                {chat.reply}
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
