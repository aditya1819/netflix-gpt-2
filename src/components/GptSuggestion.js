import React from 'react';
import useFetchMoviesByName from '../hooks/useFetchMoviesByName';

const GptSuggestion = ({ movies }) => {
  const movieArray = movies?.slice(1, -1).split(', ');

  useFetchMoviesByName(movieArray);

  return <div className="text-white bg-black">{movieArray}</div>;
};

export default GptSuggestion;
