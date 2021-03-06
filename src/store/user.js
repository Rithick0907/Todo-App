import { loginURL, signupURL } from "../service/httpConfig";

import { apiCallBegan } from "./apiActions";
import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    token: null,
    uid: null,
    email: null,
  },
  loading: false,
  lastFetch: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticationPending: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    authenticationFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    login: (state, action) => {
      const { idToken: token, localId: uid, email } = action.payload;
      state.userData.token = token;
      state.userData.uid = uid;
      state.userData.email = email;
      state.lastFetch = Date.now();
      state.loading = false;
    },
    logout: (state, actions) => initialState,
  },
});

export const { authenticationPending, authenticationFailed, login, logout } =
  userSlice.actions;

//Custom Actions
export const registerUser = (data) =>
  apiCallBegan({
    url: signupURL,
    method: "POST",
    data,
    onStart: authenticationPending.type,
    onSuccess: login.type,
    onError: authenticationFailed.type,
    redirectTo: true,
    path: "/main",
  });

export const loginUser = (data) =>
  apiCallBegan({
    method: "POST",
    url: loginURL,
    data,
    onStart: authenticationPending.type,
    onSuccess: login.type,
    onError: authenticationFailed.type,
    redirectTo: true,
    path: "/main",
  });

//Selectors
export const userSelector = createSelector(
  (store) => store.user,
  (user) => user.userData
);

export const authenticationLoadingSelector = createSelector(
  (store) => store.user,
  (user) => user.loading
);

export const authenticationErrorSelector = createSelector(
  (store) => store.user,
  (user) => user.error
);

export default userSlice.reducer;
