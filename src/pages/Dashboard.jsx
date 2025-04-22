import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserMessage, addBotMessage } from "../store/slices/chatSlice";

import {
  Box,
  Card,
  CardContent,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Fade,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

// Styled components for MUI chat template
const ChatContainer = styled(Card)(() => ({
  maxWidth: "1000px",
  margin: "40px auto",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  height: "700px",
  display: "flex",
  flexDirection: "column",
}));

const MessageContainer = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#e0e0e0",
    borderRadius: "3px",
  },
});

const Message = styled(Paper)(({ isUser }) => ({
  padding: "10px 16px",
  borderRadius: isUser ? "16px 16px 0 16px" : "16px 16px 16px 0",
  backgroundColor: isUser ? "#2196f3" : "#f5f5f5",
  color: isUser ? "#fff" : "#333",
  maxWidth: "80%",
  marginBottom: "12px",
  marginLeft: isUser ? "auto" : "0",
  marginRight: isUser ? "0" : "auto",
  position: "relative",
  transition: "all 0.3s ease",
}));

const InputContainer = styled(Box)({
  padding: "16px",
  borderTop: "1px solid #eee",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

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
  const [isTyping, setIsTyping] = useState(false);

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
    setIsTyping(true);
    const botInput = await getBotReply(input);
    dispatch(addBotMessage(botInput));
    setIsTyping(false);
  };
  return (
    <ChatContainer role="region" aria-label="Chat interface">
      {/*-----------------conversation chats----------------*/}
      <MessageContainer>
        {chats &&
          chats.map((chat, ChatIndex) => (
            <Fade in={true} key={ChatIndex} timeout={500}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                {chat.sender !== "user" && (
                  <Avatar sx={{ mr: 1, bgcolor: "#2196f3" }}>
                    <FaRobot />
                  </Avatar>
                )}
                <Message isUser={chat.sender === "user"}>
                  <Typography variant="body1">{chat.reply}</Typography>
                </Message>
              </Box>
            </Fade>
          ))}
        {isTyping && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 5 }}>
            <CircularProgress size={20} />
            <Typography variant="caption">Bot is typing...</Typography>
          </Box>
        )}
        <div ref={chatScrollBottomRef} />
      </MessageContainer>

      {/*-----------------chat Input Box----------------*/}
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <InputContainer>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="small"
            aria-label="Message input"
          />
          <IconButton
            type="submit"
            color="primary"
            disabled={!input.trim()}
            aria-label="Send message"
            sx={{
              backgroundColor: "#2196f3",
              color: "white",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
              "&.Mui-disabled": {
                backgroundColor: "#e0e0e0",
                color: "#9e9e9e",
              },
            }}
          >
            <IoSend />
          </IconButton>
        </InputContainer>
      </Box>
    </ChatContainer>
  );
};

export default Dashboard;
