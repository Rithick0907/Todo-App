const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
export const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
export const baseURL = "https://todo-app-372c1-default-rtdb.firebaseio.com/";
