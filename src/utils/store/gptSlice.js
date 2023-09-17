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
    },
    setShowGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    }
  }
});

export const { toggleGptSearch, setShowGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
