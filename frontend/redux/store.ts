import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/users/user-slice/user-slice";
import chatReducer from "@/features/chat/chat-slice/chat-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
