import { createSlice } from '@reduxjs/toolkit';
import constants from '../constants';

const moviesSlice = createSlice({
  name: constants.MOVIES_SLICE,
  initialState: {
    nowPlayingMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    }
  }
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
