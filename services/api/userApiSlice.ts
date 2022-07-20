import { ITrips } from "../../types/trips.type";
import { IUser } from "../../types/user.type";
import { rootApi } from "../rootApiSlice";

export const UserApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IUser, void>({
      query: (form) => "/user/<MdAccessAlarm />e",
    }),
    updateUser: build.mutation<IUser, void>({
      query: (form) => {
        return {
          url: "/user/me",
          method: "PUT",
          body: form,
        };
      },
      createATrips: build.mutation<ITrips, ITrips>({
        query: (form) => {
          return {
            url: "/trips",
            method: "POST",
            body: form,
          };
        },
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateUserMutation,
  useCreateATripsMutation,
} = UserApi;
