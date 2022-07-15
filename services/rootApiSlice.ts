import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKEND_URL } from "@env";
// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL, // e.g. https://yourapi.com
    mode: "cors",
    prepareHeaders: async (headers) => {
      const jsonUser = await AsyncStorage.getItem("@rdr_user");
      const user = jsonUser ? JSON.parse(jsonUser) : null;
      const hasUser = !!user && !!user!.accces_token;

      if (hasUser) {
        headers.set("Authorization", `Token ${user.userToken}`);
      }

      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: "rootApi",
  tagTypes: ["User", "Driver", "Trip"],
});
