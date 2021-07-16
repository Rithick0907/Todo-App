import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "./tasks";
import userReducer from "./user";

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
