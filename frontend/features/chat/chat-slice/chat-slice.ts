'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { chatInitialStateSlice } from "./chat-initial-state-slice";

const ChatSlice = createSlice({
  name: "chat",
  initialState: chatInitialStateSlice,
  reducers: {
    loadOnlineUsersIds (state, action: PayloadAction<string[]>) {
      state.onlineUsersIds = action.payload;
    }
  },
});

export const { loadOnlineUsersIds } = ChatSlice.actions;

export const getOnlineUsers = (state: RootState) => state.chat.onlineUsersIds;

export default ChatSlice.reducer;
