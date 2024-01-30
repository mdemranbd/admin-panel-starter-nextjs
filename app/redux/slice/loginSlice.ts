import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface loginState {
  email: string;
  password: string;
}

const initialState: loginState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<loginState>) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser} = loginSlice.actions

export default loginSlice.reducer;
