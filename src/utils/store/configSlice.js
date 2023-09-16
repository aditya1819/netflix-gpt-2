import { createSlice } from '@reduxjs/toolkit';
import constants from '../constants';

const configSlice = createSlice({
  name: constants.CONFIG_SLICE,
  initialState: {
    locale: 'en-in'
  },
  reducers: {
    setLocaleCode: (state, action) => {
      state.locale = action.payload;
    }
  }
});

export const { setLocaleCode } = configSlice.actions;

export default configSlice.reducer;
