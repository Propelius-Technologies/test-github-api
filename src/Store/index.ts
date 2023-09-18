import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
