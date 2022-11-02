import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

import auth from '@/pages/auth/store/AuthSlice';
import common, { commonSlice } from './common/commonSlice';
import { RootAction } from './type';
const rootReducer = combineReducers({
  common,
  auth,
});
const appReducers = (state: any, action: any) => {
  if (action.type === RootAction.LOGOUT) {
    return rootReducer(
      {
        auth: {},
        common: commonSlice.getInitialState(),
      },
      action,
    );
  }
  return rootReducer(state, action);
};

const middlewareHandler = (getDefaultMiddleware: any) => {
  return [...getDefaultMiddleware()];
};
//API slice Will include automatically generated redux reducer And a custom middleware
const rootStore = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;

setupListeners(rootStore.dispatch);
export default rootStore;
