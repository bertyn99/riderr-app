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
  acces_token: "",
  refresh_token: "",
};

export const driverSlice = createSlice({
  name: "driver",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setDriver: (state: IDriver, action: PayloadAction<IDriver>) => {
      state = action.payload;
    },
    logOutDriver: (state: IDriver) => {
      state = initialState;
    },
  },
});

export const { setDriver, logOutDriver } = driverSlice.actions;
export default driverSlice.reducer;
