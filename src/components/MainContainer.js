import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const [movieId, setMovieId] = useState(null);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  useEffect(() => {
    const id = getRandomNumber();
    setMovieId(id);
  }, []);

  console.log(movieId)

  if (!movies) return;

  const mainMovie = movies.at(movieId);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
