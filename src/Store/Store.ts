import { configureStore } from "@reduxjs/toolkit";
import { realEstateApi } from "./api/cardApi";
import { propertyDetailApi } from "./api/cardWithDetailsApi";

export const store = configureStore({
  reducer: {
    [realEstateApi.reducerPath]: realEstateApi.reducer,
    [propertyDetailApi.reducerPath]: propertyDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(realEstateApi.middleware).concat(propertyDetailApi.middleware),
});
