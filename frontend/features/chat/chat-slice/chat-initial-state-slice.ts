export interface IchatInitialStateSlice {
  onlineUsersIds: string[];
  // status: "loading" | "failed" | "succeeded";
}

export const chatInitialStateSlice: IchatInitialStateSlice = {
  onlineUsersIds: [],
  // status: "loading",
};
