import React, { useState } from 'react';
import constants from '../utils/constants';
import MovieModal from './MovieDetails/MovieModal';

const MovieCard = ({ posterPath, movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('open modal');
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="w-28 md:w-48 pr-2 md:pr-4">
        <div className="cursor-pointer" onClick={openModal}>
          <img
            alt="movie-poster"
            src={constants.IMAGES_BASE_URL + '/' + posterPath}
          />
        </div>
      </div>
      {isModalOpen && (
        <MovieModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          movie={movie}
        />
      )}
    </div>
  );
};

export default MovieCard;
