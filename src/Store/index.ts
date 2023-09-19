import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./Users/Reducer";
import { repositoryApi } from "./Repositories/Reducer";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [repositoryApi.reducerPath]: repositoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      repositoryApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
