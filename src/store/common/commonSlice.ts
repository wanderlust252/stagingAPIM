import { createSlice } from '@reduxjs/toolkit';
import { LANGUAGE } from '@/common/enum';

export interface CommonInitialState {
  collapse: boolean;
  languageInput: LANGUAGE;
}

const initialState: CommonInitialState = {
  collapse: false,
  languageInput: LANGUAGE.KR,
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
