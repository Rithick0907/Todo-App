import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiRequest = createAsyncThunk(
  "api/request",
  async (data, store) => {}
);
