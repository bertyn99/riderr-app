import { ISignIn, ISignUp } from "../../types/auth.type";
import { rootApi } from "../rootApiSlice";

export const AuthApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<ISignIn, void>({
      query: (form) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: form,
        };
      },
    }),
    register: build.query<ISignUp, void>({
      query: (form) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: form,
        };
      },
    }),
  }),
});
