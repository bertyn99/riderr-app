import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import { rootApi } from "../services/rootApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slice/userSlice";
import driverReducer from "./slice/driverSlice";
import tripsReducer from "./slice/tripsSlice";
const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  driver: driverReducer,
  trip: tripsReducer,

  [rootApi.reducerPath]: rootApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [`${rootApi.reducerPath}`],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),

  reducer: persistedReducer,
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
