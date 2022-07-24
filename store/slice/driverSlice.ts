import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDriver } from "../../types/driver.type";
import { IUser } from "../../types/user.type";
import { RootState } from "../index";

// Define the initial state using that type
const initialState: IDriver = {
  email: "",
  firstName: "",
  lastName: "",
  tel: "",
  isPro: false,
  documents: [],
  trips: [],
  access_token: null,
  refresh_token: null,
};

export const driverSlice = createSlice({
  name: "driver",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setDriver: (state: IDriver, action: PayloadAction<IDriver>) => {
      console.log(action.payload);
      return (state = { ...state, ...action.payload });
    },
    logOutDriver: (state: IDriver) => {
      return (state = initialState);
    },
  },
});

export const { setDriver, logOutDriver } = driverSlice.actions;
export default driverSlice.reducer;
