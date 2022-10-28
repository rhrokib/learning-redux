import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface roleItem {
  id?: number;
  roleName: string;
  accessArea: string;
  designatedUser: string;
  status: number;
  rolePermison?: number[];
  users?: any[];
}

interface roleList {
  value: roleItem[];
}

const initialState: roleList = {
  value: [],
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<roleList>) => {
      // action.payload.value.map((x) => state.value.push(x));
      state.value = [...action.payload.value];
    },
  },
});
export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
