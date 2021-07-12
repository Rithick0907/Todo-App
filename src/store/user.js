import { authenticateUser } from "./asyncThunk/authThunk";
import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userConfig: null,
    loading: false,
    error: null,
  },
  reducers: {
    login: (user, actions) => {},
    logout: (user, actions) => {},
  },
  extraReducers: {
    [authenticateUser.pending]: (user, actions) => {
      user.loading = true;
    },
    [authenticateUser.fulfilled]: (user, actions) => {
      user.loading = false;
      user.userConfig = actions.payload;
      user.error = null;
    },
    [authenticateUser.rejected]: (user, actions) => {
      user.loading = false;
      user.error = actions.error.message;
    },
  },
});

export const loadingSelector = createSelector(
  (store) => store.entities.user,
  (user) => user.loading
);

export const userSelector = createSelector(
  (store) => store.entities.user,
  (user) => user.userConfig
);

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
