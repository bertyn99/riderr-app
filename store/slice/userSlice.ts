import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.type";
import { RootState } from "../index";

// Define the initial state using that type
const initialState: IUser = {
  email: null,
  firstName: null,
  lastName: null,
  tel: null,
  access_token: null,
  refresh_token: null,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setUser: (state: IUser, action: PayloadAction<IUser>) => {
      return (state = { ...state, ...action.payload });
    },
    logOut(state: IUser) {
      return (state = { ...initialState });
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
