import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import apiMiddleware from "./middleware/apiMiddleware";
import persistedReducer from "./reducers";

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    apiMiddleware,
  ],
});

export const persistor = persistStore(store);

export default store;
