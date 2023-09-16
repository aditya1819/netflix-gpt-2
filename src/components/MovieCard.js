import React from 'react';
import constants from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        alt="movie-poster"
        src={constants.IMAGES_BASE_URL + '/' + posterPath}
      />
    </div>
  );
};

export default MovieCard;
