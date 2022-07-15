import { ISignIn, ISignUp } from "../../types/auth.type";
import { rootApi } from "../rootApiSlice";

export const AuthApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, ISignIn>({
      query: (form) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: form,
        };
      },
    }),
    register: build.mutation<any, ISignUp>({
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

export const { useLoginMutation, useRegisterMutation } = AuthApi;
