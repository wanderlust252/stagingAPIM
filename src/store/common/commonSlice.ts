import { createSlice } from '@reduxjs/toolkit';
export interface CommonInitialState {
  collapse: boolean;
  languageInput: 'en' | 'kr';
}

const initialState: CommonInitialState = {
  collapse: false,
  languageInput: 'kr',
};
export const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    collapseSidebar(state) {
      state.collapse = !state.collapse;
    },
    changeLanguageInput(state, action) {
      state.languageInput = action.payload;
    },
  },
});

export const { collapseSidebar, changeLanguageInput } = commonSlice.actions;

export default commonSlice.reducer;
