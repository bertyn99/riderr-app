import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import { rootApi } from "../services/rootApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistCombineReducers,
} from "redux-persist";
import userReducer from "./slice/userSlice";
import driverReducer from "./slice/driverSlice";
import tripsReducer from "./slice/tripsSlice";
import { useDispatch } from "react-redux";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import devToolsEnhancer from "remote-redux-devtools";

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  nav: navReducer,
  user: userReducer,
  driver: driverReducer,
  trips: tripsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: [rootApi.reducerPath],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rootApi.middleware),
  enhancers: [
    /* devToolsEnhancer({}) */
  ],
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
setupListeners(store.dispatch);
