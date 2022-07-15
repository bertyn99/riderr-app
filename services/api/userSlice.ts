import { IUser } from "../../types/user.type";
import { rootApi } from "../rootApiSlice";

export const AuthApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IUser, void>({
      query: (form) => "/user/<MdAccessAlarm />e",
    }),
    updateUser: build.query<IUser, void>({
      query: (form) => {
        return {
          url: "/user/me",
          method: "PUT",
          body: form,
        };
      },
    }),
  }),
});
