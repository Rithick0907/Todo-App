import { createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../service/firebase.utils";

export const authenticateUser = createAsyncThunk(
  "user/authentication",
  async ({ data, method }, store) => {
    const { email: userEmail, password } = data;
    const { user } =
      method === "signin"
        ? await firebase.auth().signInWithEmailAndPassword(userEmail, password)
        : await firebase
            .auth()
            .createUserWithEmailAndPassword(userEmail, password);
    const { uid, email, emailVerified, displayName, photoURL } = user;
    return { uid, email, emailVerified, displayName, photoURL };
  }
);
