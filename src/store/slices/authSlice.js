import { createSlice } from "@reduxjs/toolkit";
import credentialsData from "../../utils/credentials";
const initialAuthState = {
  isAuthenticated: false,
  role: null,
  userId: null,
  credentials: credentialsData,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      const { userId, pass } = action.payload;
      const user = state.credentials.find(
        (c) => c.cred.userId === userId && c.cred.pass === pass
      );
      if (user) {
        state.isAuthenticated = true;
        state.role = user.role;
        state.userId = userId;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.role = null;
      state.userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
