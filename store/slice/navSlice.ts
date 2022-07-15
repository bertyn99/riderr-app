import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "../../types/trips.type";
import { RootState } from "../index";

// Define a type for the slice state
interface NavState {
  origin: null | Point;
  destination: null | Point;
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
    setOrigin: (state: NavState, action: PayloadAction<Point | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state: NavState, action: PayloadAction<Point | null>) => {
      state.destination = action.payload;
    },
    setTravelTime: (state: NavState, action: PayloadAction<any>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export default navSlice.reducer;
