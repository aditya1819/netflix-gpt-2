import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const getTitle = (category) => {
  const words = category
    .split('_')
    .map((word) => word.at(0).toUpperCase() + word.slice(1));

  return words.join(' ');
};

const SecondaryContainer = ({ categoryArray }) => {
  const movies = useSelector((store) => store.movies);

  if (movies) {
    return (
      <div className="pb-10 md:pb-0 bg-black">
        <div className="md:-mt-52 relative z-20">
          {categoryArray.map((category) => (
            <MovieList title={getTitle(category)} movies={movies[category]} />
          ))}
        </div>
      </div>
    );
  }
};

export default SecondaryContainer;
