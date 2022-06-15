import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

// Define a type for the slice state
interface NavState {
  origin: null | string;
  destination: null | string;
  travelTimeInformation: null | any;
}

// Define the initial state using that type
const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOrigin: (state: NavState, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setDestination: (state: NavState, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setTravelTime: (state: NavState, action: PayloadAction<any>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;

// Other code such as selectors can use the imported `RootState` type
/*  export const selectOrigin = (state: RootState) => state.origin.value;  */

export default navSlice.reducer;
