import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
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
    navigate("/chat");
  };
  return (
    <HomeContainer>
      <Typography variant="h3" gutterBottom>
        Welcome to chatbot
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChatRedirect}
        sx={{ padding: "12px 24px", fontSize: "16px" }}
      >
        Chat Here
      </Button>
    </HomeContainer>
  );
};

export default Home;
