import { createSlice } from '@reduxjs/toolkit';
export interface CommonInitialState {
  hasSidebar: boolean;
  languageInput: 'en' | 'kr';
}

const initialState: CommonInitialState = {
  hasSidebar: false,
  languageInput: 'kr',
};
export const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    collapseSidebar(state) {
      state.hasSidebar = !state.hasSidebar;
    },
    changeLanguageInput(state, action) {
      state.languageInput = action.payload;
    },
  },
});

export const { collapseSidebar, changeLanguageInput } = commonSlice.actions;

export default commonSlice.reducer;
