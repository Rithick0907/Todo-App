import "firebase/auth";

import { apiRequest } from "../store/asyncThunk/apiRequestThunk";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHJDy6sfVM83sYexwRmJAldEjCdcVvi3c",
  authDomain: "todo-app-372c1.firebaseapp.com",
  databaseURL: "https://todo-app-372c1-default-rtdb.firebaseio.com",
  projectId: "todo-app-372c1",
  storageBucket: "todo-app-372c1.appspot.com",
  messagingSenderId: "245874058198",
  appId: "1:245874058198:web:43ddac9e8dcb31110a7a77",
};

firebase.initializeApp(firebaseConfig);

export const addUserToDB = async (userAuth, additionalData) => {
  const { dispatch } = additionalData;
  // const response = await dispatch(
  //   apiRequest({ url: `users/${userAuth.uid}.json` })
  // );
  // console.log(response);
};

export default firebase;
