import { baseURL, instance } from "../../service/httpConfig";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiRequest = createAsyncThunk(
  "api/request",
  async (requestConfig, store) => {
    const { url, method, data } = requestConfig;
    const { getState, dispatch } = store;
    const { data: responseData } = await instance.request({
      baseURL,
      url,
      method,
      data,
    });
    return responseData;
  }
);
