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
    updateRole: (state, action: PayloadAction<roleItem>) => {
      const index = state.value.indexOf(action.payload);
      if (index !== -1) state.value.splice(index, 1);
    },
  },
});
export const { setRole, updateRole } = roleSlice.actions;
export default roleSlice.reducer;
