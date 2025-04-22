import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [{ sender: "bot", reply: "Hello, How can i help You" }],
  },
  reducers: {
    addUserMessage(state, action) {
      state.messages.push({ sender: "user", reply: action.payload });
    },
    addBotMessage(state, action) {
      state.messages.push({ sender: "bot", reply: action.payload });
    },
  },
});

export const { addUserMessage, addBotMessage } = chatSlice.actions;
export default chatSlice.reducer;
