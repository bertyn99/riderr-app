import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.type";
import { RootState } from "../index";

// Define the initial state using that type
const initialState: IUser = {
  email: "",
  firstName: "",
  lastName: "",
  tel: "",
  acces_token: "",
  refresh_token: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setUser: (state: IUser, action: PayloadAction<IUser>) => {
      state = action.payload;
    },
    logOut: (state: IUser) => {
      state = initialState;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
