import { ITrips } from "./trips.type";

export type IUser = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  tel: string | null;
  password?: string;
  trips?: ITrips[];
  access_token: string | null;
  refresh_token: string | null;
};
