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
    updateLastBotMessage(state, action) {
      const lastIndex = state.messages.length - 1;
      if (lastIndex >= 0 && state.messages[lastIndex].sender === "bot") {
        state.messages[lastIndex].reply += `\n${action.payload}`;
      }
    },
  },
});

export const { addUserMessage, addBotMessage, updateLastBotMessage } =
  chatSlice.actions;
export default chatSlice.reducer;
