import React from 'react';
import useFetchMoviesByName from '../hooks/useFetchMoviesByName';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const cleanString = (moviesString) => {
  if (moviesString.includes('\n')) {
    // [`\n  "The Shawshank Redemption",\n  "Schindler's List… of the Spotless Mind",\n  "Lion",\n  "Aashiqui 2"\n`]
    return moviesString.slice(5, -2).split(',\n  ');
  }
  return moviesString.slice(1, -1).split(', ');
};

const GptSuggestion = ({ moviesString }) => {
  const movieArray = cleanString(moviesString);

  console.log('movieArray', movieArray);

  useFetchMoviesByName(movieArray);

  const movies = useSelector((store) => store.movies?.gptSearchMovies);

  if (!movies) return null;

  return (
    <div className="bg-black bg-opacity-70 px-10 py-10">
      <MovieList title={"Here's something you might like"} movies={movies} />
    </div>
  );
};

export default GptSuggestion;
