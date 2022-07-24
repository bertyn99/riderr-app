import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrips, Transport } from "../../types/trips.type";

const initialState: ITrips = {
  origin: null,
  destination: null,
  timeDeparture: null,
  typeVehicle: null,
  price: null,
  rating: null,
  createdAt: null,
};

export const tripsSlice = createSlice({
  name: "trips",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    setTransport: (state: ITrips, action: PayloadAction<Transport | null>) => {
      state.typeVehicle = action.payload;
    },
    setTrips: (state: ITrips, action: PayloadAction<ITrips>) => {
      console.log(action.payload);
      return (state = { ...state, ...action.payload });
    },
    deleteTrips: (state: ITrips) => {
      return (state = initialState);
    },
  },
});

export const { setTrips, setTransport, deleteTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
