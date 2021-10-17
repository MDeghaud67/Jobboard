import { configureStore } from '@reduxjs/toolkit'
import userReducer from "slices/user";
import crudReducer from "slices/crud";


export const store = configureStore({
    reducer: {
        user: userReducer,
        crud: crudReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
});