import { createSlice } from '@reduxjs/toolkit';
export interface CommonInitialState {
  isCloseSidebar: boolean;
  languageInput: 'en' | 'kr';
}

const initialState: CommonInitialState = {
  isCloseSidebar: false,
  languageInput: 'kr',
};
export const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    collapseSidebar(state) {
      state.isCloseSidebar = !state.isCloseSidebar;
    },
    changeLanguageInput(state, action) {
      state.languageInput = action.payload;
    },
  },
});

export const { collapseSidebar, changeLanguageInput } = commonSlice.actions;

export default commonSlice.reducer;
