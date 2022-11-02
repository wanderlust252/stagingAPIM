import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

import auth from '@/pages/auth/store/AuthSlice';
import common from './common/commonSlice';
// const appReducers = (state: any, action: any) => {
//   if (action.type === 'LOGOUT') {
//     AsyncStorage.clear();
//     return rootReducer(
//       {
//         authSlice: authData.getInitialState(),
//         masterDataSlice: masterData.getInitialState(),
//         commonSlice: common.getInitialState(),
//       },
//       action,
//     );
//   }
//   return rootReducer(state, action);
// };
const rootReducer = combineReducers({
  common,
  auth,
});

const middlewareHandler = (getDefaultMiddleware: any) => {
  return [...getDefaultMiddleware()];
};
//API slice Will include automatically generated redux reducer And a custom middleware
const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;

setupListeners(rootStore.dispatch);
export default rootStore;
