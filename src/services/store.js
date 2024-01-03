import { configureStore } from "@reduxjs/toolkit";
import { articleApi, textApi } from "./article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [textApi.reducerPath]: textApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, textApi.middleware),
  // devTools: process.env.NODE_ENV !== "production",
});
