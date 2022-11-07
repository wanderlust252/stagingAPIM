import { createSlice } from '@reduxjs/toolkit';
export interface AuthInitialState {
  access_token?: string;
}

const initialState: AuthInitialState = {};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.access_token = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
