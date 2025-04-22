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
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
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
            <div>
              <NavLink
                to="/"
                style={{ color: "white" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Button color="inherit">HOME</Button>
                <hr />
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/chat"
                style={{ color: "white" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Button color="inherit">CHAT</Button>
                <hr />
              </NavLink>
            </div>

            {!isAuth ? (
              <div>
                <NavLink
                  to="/login"
                  style={{ color: "white" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Button color="inherit">LOGIN</Button>
                  <hr />
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink to="" style={{ color: "white" }}>
                  <Button onClick={handleLogout} color="inherit">
                    LOG OUT
                  </Button>
                  <hr />
                </NavLink>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <div></div>
    </>
  );
};

export default NavBar;
