import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  username: string;
  password: string;
}

const initialState : loginState = {
  username: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<loginState>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});
export const { loginUser } = loginSlice.actions;
export default loginSlice.reducer;
