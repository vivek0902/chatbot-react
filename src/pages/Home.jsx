import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import chatBotIcon from "../assets/chat-bot-icon.webp";
const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
  textAlign: "center",
  boxSizing: "border-box",
});

const Home = () => {
  const navigate = useNavigate();

  const handleChatRedirect = () => {
    alert("Please Log In First");
    navigate("/chat");
  };
  return (
    <HomeContainer>
      <Box
        component="img"
        src={chatBotIcon}
        alt="Chatbot Logo"
        sx={{
          width: 100, 
          height: "auto",
          marginBottom: 2, 
        }}
      />
      <Typography variant="h3" gutterBottom>
        Welcome to chatbot
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChatRedirect}
        sx={{ padding: "12px 24px", fontSize: "16px" }}
      >
        Start Chat
      </Button>
    </HomeContainer>
  );
};

export default Home;
