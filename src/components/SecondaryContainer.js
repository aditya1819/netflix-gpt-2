import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies);

  if (movies) {
    return (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList title={'Now playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Upcoming'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    );
  }
};

export default SecondaryContainer;
