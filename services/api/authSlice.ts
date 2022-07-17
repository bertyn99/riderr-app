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
    loginDriver: build.mutation<any, ISignIn>({
      query: (form) => {
        return {
          url: "/auth/driver/signin",
          method: "POST",
          body: form,
        };
      },
    }),
    registerDriver: build.mutation<any, ISignUp>({
      query: (form) => {
        return {
          url: "/auth/driver/signup",
          method: "POST",
          body: form,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterDriverMutation,
  useLoginDriverMutation,
} = AuthApi;
