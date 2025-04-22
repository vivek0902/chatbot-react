import React from "react";
import { NavLink } from "react-router-dom";

// import { Toolbar, Divider, Typography, IconButton } from "@mui/material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  return (
    <>
      {/* <Toolbar>
        <IconButton>
          <SmartToyIcon />
        </IconButton>
        <Typography variant="h6">ChatBot</Typography>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider></Divider> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SmartToyIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ChatBot
            </Typography>
            <div className={({ isActive }) => (isActive ? "active" : "")}>
              <NavLink
                to="/"
                style={{ color: "white" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Button color="inherit">HOME</Button>
                <hr />
              </NavLink>
            </div>
            <div className={({ isActive }) => (isActive ? "active" : "")}>
              <NavLink
                to="/chat"
                style={{ color: "white" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Button color="inherit">CHAT</Button>
                <hr />
              </NavLink>
            </div>

            <div className={({ isActive }) => (isActive ? "active" : "")}>
              <NavLink
                to="/login"
                style={{ color: "white" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Button color="inherit">LOGIN</Button>
                <hr />
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <div></div>
    </>
  );
};

export default NavBar;
