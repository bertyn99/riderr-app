import { Transport, ITrips } from "./trips.type";
import { IUser } from "./user.type";

export type IDriver = IUser & {
  isPro: boolean;
  documents: string[];
  vehicle?: Vehicle;
  trips?: ITrips[];
};
export type Vehicle = {
  type: Transport;
  vehicleModel?: string;
  buyAt?: Date;
  carBrand?: Brand;
  consommationType?: Consommation;
};

export enum Brand {
  Audi,
  BMW,
  Mercedes,
  Volkswagen,
  Volvo,
  Fiat,
  Nissan,
  Citroen,
  Other,
}

export enum Consommation {
  Diesel,
  Gasoline,
  Electric,
  BioEthanol,
}
