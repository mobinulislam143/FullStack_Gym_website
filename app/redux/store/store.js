import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/app/redux/slice/userslice';

const store = configureStore({
    reducer: {
       
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
