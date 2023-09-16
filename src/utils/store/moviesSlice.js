import { createSlice, current } from '@reduxjs/toolkit';
import constants, { categoryArray } from '../constants';

const categoryObject = {};

categoryArray.forEach((category) => {
  categoryObject[category] = null;
});

const moviesSlice = createSlice({
  name: constants.MOVIES_SLICE,
  initialState: {
    ...categoryObject,
    trailerVideo: null
  },
  reducers: {
    addMovies: (state, action) => {
      state[action.payload.category] = action.payload.movies;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    }
  }
});

export const { addMovies, addMovieTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
