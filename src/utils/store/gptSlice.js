import { createSlice, current } from '@reduxjs/toolkit';
import constants from '../constants';

const gptSlice = createSlice({
  name: constants.GPT_SLICE,
  initialState: {
    showGptSearch: false
  },
  reducers: {
    toggleGptSearch: (state, _action) => {
      state.showGptSearch = !state.showGptSearch;
    }
  }
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
