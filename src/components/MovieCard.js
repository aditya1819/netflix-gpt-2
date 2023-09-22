import React from 'react';
import constants from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-28 md:w-48 pr-2 md:pr-4">
      <img
        alt="movie-poster"
        src={constants.IMAGES_BASE_URL + '/' + posterPath}
      />
    </div>
  );
};

export default MovieCard;
