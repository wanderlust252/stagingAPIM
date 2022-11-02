import { createSlice } from '@reduxjs/toolkit';
// export interface AuthInitialState {
//   access_token?: string;
//   profile?: UserProfile;
// }

// const initialState: AuthInitialState = {};
const authSlice = createSlice({
  name: 'auth',
  initialState: { loginStatus: false, authInfo: {} },
  reducers: {
    setLoginStatus(state, action) {
      state.loginStatus = action.payload;
    },
    setAuthInfo(state, action) {
      state.authInfo = action.payload;
    },
  },
});

export const { setLoginStatus, setAuthInfo } = authSlice.actions;

export default authSlice.reducer;
