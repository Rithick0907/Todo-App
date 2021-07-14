import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authToken: null,
    uid: null,
    email: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {},
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
