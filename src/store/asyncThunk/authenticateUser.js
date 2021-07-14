import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../service/httpConfig";

const authenticateUser = createAsyncThunk(
  "user/authentication",
  async ({ values, url }, thunkAPI) => {
    const { email, password } = values;
    try {
      const { data } = await instance({
        url,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email,
          password,
          returnSecureToken: true,
        },
      });
      return data;
    } catch (e) {
      if (
        e.response &&
        e.response.data &&
        e.response.data.error &&
        e.response.data.error.message
      ) {
        return thunkAPI.rejectWithValue(e.response.data.error.message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);

export default authenticateUser;
