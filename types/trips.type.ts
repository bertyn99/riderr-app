export type Trips = {
  id: string;
  origin: Point;
  destination: Point;
  typeVehicle: Transport;
  price: Number;
  rating: Number;
  userId?: string;
  driverId?: string;
  createdAt: Date;
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
