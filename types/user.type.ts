import { ITrips } from "./trips.type";

export type IUser = {
  email: string;
  firstName: string;
  lastName: string;
  tel: string;
  password?: string;
  trips?: ITrips[];
  acces_token: string;
  refresh_token: string;
};
