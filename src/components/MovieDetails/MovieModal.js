import React from 'react';
import constants from '../../utils/constants';

const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  console.log(movie);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 bg-slate-900 p-4 rounded-lg w-10/12 md:max-w-screen-md md:w-full">
        <div>
          <img
            alt="movie-poster"
            src={constants.IMAGES_BASE_URL + '/' + movie?.backdrop_path}
          />
        </div>
        <div className="-mt-12 md:-mt-32 flex flex-col bg-slate-900 text-white">
          <div className=" bg-slate-900 text-white">
            <div className="flex">
              <div className="text-2xl md:text-3xl pb-2 md:p-2 ml-2 md:m-2">
                {movie.original_title}
              </div>
              <div className="pt-2 md:p-2 md:m-2">
                <div className="p-1 bg-slate-700 text-xs">
                  {movie.original_language?.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="md:text-xl ml-2 md:p-2 md:m-2">
              {movie.overview}
            </div>
            <div className="flex pl-1">
              <div className="p-2 m-2 bg-gray-700 w-fit">
                ★ {movie.vote_average?.toFixed(1)} / 10
              </div>
              <div className="p-2 m-2">({movie.vote_count} ratings)</div>
            </div>

            <button className="bg-white p-1 md:p-2 text-black md:pl-6 md:pr-6 md:m-2 rounded-sm font-semibold hover:bg-red-600 hover:text-white">
              ▷ Watch Now
            </button>
          </div>
        </div>

        <button
          className="absolute top-0 right-0 m-2 bg-gray-600 p-2 rounded-lg text-white bg-opacity-50 hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
