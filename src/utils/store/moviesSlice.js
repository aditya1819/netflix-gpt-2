import { createSlice } from '@reduxjs/toolkit';
import constants, { categoryArray } from '../constants';

const categoryObject = {};

categoryArray.forEach((category) => {
  categoryObject[category] = null;
});

const moviesSlice = createSlice({
  name: constants.MOVIES_SLICE,
  initialState: {
    ...categoryObject,
    trailerVideo: null,
    gptSearchMovies: null,
    gptSearchNames: null
  },
  reducers: {
    addMovies: (state, action) => {
      state[action.payload.category] = action.payload.movies;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    setGptSearchMovies: (state, action) => {
      state.gptSearchMovies = action.payload;
    },
    setGptSearchNames: (state, action) => {
      state.gptSearchNames = action.payload;
    }
  }
});

export const {
  addMovies,
  addMovieTrailer,
  setGptSearchMovies,
  setGptSearchNames
} = moviesSlice.actions;

export default moviesSlice.reducer;
