import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userConfig: {},
    loading: false,
  },
  reducers: {
    login: (user, actions) => {},
    logout: (user, actions) => {},
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
