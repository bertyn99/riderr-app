import { configureStore, combineReducers } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import { rootApi } from "../services/rootApiSlice";
const rootReducer = combineReducers({
  nav: navReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
