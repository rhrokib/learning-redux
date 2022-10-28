import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginSlice";
import roleReducer from "../reducers/roleSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    role: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
