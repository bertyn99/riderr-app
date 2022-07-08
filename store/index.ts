import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({ nav: navReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
