import React from 'react';
import useFetchMoviesByName from '../hooks/useFetchMoviesByName';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSuggestion = ({ moviesString }) => {
  const movieArray = moviesString?.slice(1, -1).split(', ');

  useFetchMoviesByName(movieArray);

  const movies = useSelector((store) => store.movies?.gptSearchMovies);

  if (!movies) return null;

  return (
    <div className="bg-black bg-opacity-70 px-10 py-10">
      <MovieList title={''} movies={movies} />
    </div>
  );
};

export default GptSuggestion;
