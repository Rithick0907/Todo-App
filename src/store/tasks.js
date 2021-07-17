import { createSelector, createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./apiActions";
import { baseURL } from "../service/httpConfig";

const initialState = {
  taskList: [],
  loading: false,
  error: null,
};

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (tasks, action) => {},
    hydratingTasks: (tasks, action) => {
      tasks.loading = true;
      tasks.error = null;
    },
    hydrateTasks: (tasks, action) => {
      if (action.payload !== null) {
        tasks.taskList = [];
        const keys = Object.keys(action.payload);
        keys.map((key) => tasks.taskList.push({ key, ...action.payload[key] }));
      }
      tasks.loading = false;
    },
    hydrationFailed: (tasks, action) => {
      tasks.loading = false;
      tasks.error = action.payload;
    },
  },
});

export const { addTask, hydratingTasks, hydrateTasks, hydrationFailed } =
  tasks.actions;
export default tasks.reducer;

//Custom Actions
export const fetchTask = (uid) =>
  apiCallBegan({
    url: `${baseURL}/users/${uid}/tasks.json`,
    onStart: hydratingTasks.type,
    onSuccess: hydrateTasks.type,
    onError: hydrationFailed.type,
  });

export const updateTask = (uid, data) =>
  apiCallBegan({
    url: `${baseURL}/users/${uid}/tasks.json`,
    method: "POST",
    data,
  });

//Selectors
export const tasksSelector = createSelector(
  (store) => store.tasks,
  (tasks) => tasks.taskList
);
