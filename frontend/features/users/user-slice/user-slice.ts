import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { userInitialStateSlice } from "./user-initial-state-slice";

const UsersSlice = createSlice({
  name: "user",
  initialState: userInitialStateSlice,
  reducers: {},
});

export const {} = UsersSlice.actions;

export const getUser = (state: RootState) => state.user.user;

export default UsersSlice.reducer;
