import authenticateUser from "./asyncThunk/authenticateUser";
import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authToken: null,
    userData: null,
    loading: false,
    lastFetch: null,
    error: null,
  },
  reducers: {
    logout: (state, actions) => {
      state.authToken = null;
      state.userData = null;
      state.loading = false;
      state.lastFetch = null;
      state.error = null;
    },
  },
  extraReducers: {
    [authenticateUser.pending]: (state, actions) => {
      state.loading = true;
      state.error = null;
    },
    [authenticateUser.fulfilled]: (state, actions) => {
      const { idToken, ...otherValues } = actions.payload;
      state.loading = false;
      state.authToken = idToken;
      state.userData = { ...otherValues };
      state.error = null;
    },
    [authenticateUser.rejected]: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
  },
});

export const loadingSelector = createSelector(
  (store) => store.entities.user,
  (user) => user.loading
);

export const userSelector = createSelector(
  (store) => store.entities.user,
  (user) => user.authToken
);

export const { logout } = userSlice.actions;
export default userSlice.reducer;
