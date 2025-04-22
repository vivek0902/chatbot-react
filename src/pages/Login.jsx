import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

{
  /* mui*/
}
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({ userId: "", password: "" });

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userId: formData.userId, pass: formData.password }));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CssBaseline />
          <Grid
            gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="username"
                  autoFocus
                  label="User Id"
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChanges}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="current-password"
                  label="PassWord"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChanges}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>

                <Box mt={5}></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Login;
