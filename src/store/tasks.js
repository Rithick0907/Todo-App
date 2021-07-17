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
    addTask: (tasks, action) => {
      tasks.taskList.push({
        key: action.payload.name,
        task: action.payload.task,
        createdAt: action.payload.createdAt,
      });
      tasks.loading = false;
    },
    removeTask: (tasks, action) => {
      const temp = tasks.taskList.filter(
        (task) => task.key !== action.payload.taskId
      );
      tasks.taskList = temp;
      tasks.loading = false;
    },
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

export const {
  addTask,
  removeTask,
  hydratingTasks,
  hydrateTasks,
  hydrationFailed,
} = tasks.actions;
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
    data: { ...data, createdAt: Date.now() },
    additionalData: { ...data, createdAt: Date.now() },
    onStart: hydratingTasks.type,
    onSuccess: addTask.type,
    onError: hydrationFailed.type,
  });

export const deleteTask = (uid, taskId) =>
  apiCallBegan({
    url: `${baseURL}/users/${uid}/tasks/${taskId}.json`,
    method: "DELETE",
    additionalData: { taskId },
    onStart: hydratingTasks.type,
    onSuccess: removeTask.type,
    onError: hydrationFailed.type,
  });

//Selectors
export const tasksSelector = createSelector(
  (store) => store.tasks,
  (tasks) => tasks.taskList
);

export const isTasksLoading = createSelector(
  (store) => store.tasks,
  (tasks) => tasks.loading
);
