import { LANGUAGE } from '@/interfaces/enum';
import { createSlice } from '@reduxjs/toolkit';
import i18n from '@/i18n';

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
    changeLanguageInput(state, action) {
      i18n.changeLanguage(action.payload);
      state.languageInput = action.payload;
    },
  },
});

export const { changeLanguageInput } = commonSlice.actions;

export default commonSlice.reducer;
