import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {},
  },
});

export const { addTask } = tasks.actions;
export default tasks.reducer;
