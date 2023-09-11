import { createSlice } from '@reduxjs/toolkit';
import constants from '../constants';

const moviesSlice = createSlice({
  name: constants.MOVIES_SLICE,
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    }
  }
});

export const { addNowPlayingMovies, addMovieTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
