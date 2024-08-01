import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import profileReducer from "@/store/slices/profileSlice";

const reducer = { profileReducer };

export const store = configureStore({
    reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();