import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrips } from "../../types/trips.type";

const initialState: ITrips = {
  origin: null,
  destination: null,
  price: null,
  typeVehicle: null,
  rating: null,
  createdAt: null,
};

export const tripsSlice = createSlice({
  name: "trips",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setTrips: (state: ITrips, action: PayloadAction<ITrips>) => {
      state = action.payload;
    },
  },
});

export const { setTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
