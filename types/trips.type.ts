export type ITrips = {
  id?: string;
  origin: Point | null;
  destination: Point | null;
  typeVehicle?: Transport | null;
  timeDeparture: string | null;
  totalTime?: number;
  price: number | null;
  rating: number | null;
  userId?: string;
  driverId?: string;
  createdAt: Date | null;
};

export type Point = {
  lat: number;
  lng: number;
  description: string;
};

export enum Transport {
  Car = "Car",
  Bike = "Bike",
  Bus = "Bus",
  Other = "Other",
}
