import { configureStore } from '@reduxjs/toolkit';
import { realEstateApi } from './api/cardApi';

export const store = configureStore({
    reducer: {
        [realEstateApi.reducerPath]: realEstateApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(realEstateApi.middleware),
});