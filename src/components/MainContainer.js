import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import constants from '../utils/constants';

const MainContainer = () => {
  const [movieId, setMovieId] = useState(null);

  const movies = useSelector((store) => store.movies?.[constants.NOW_PLAYING]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  useEffect(() => {
    const id = getRandomNumber();
    setMovieId(id);
  }, []);

  if (!movies) return;

  const mainMovie = movies.at(movieId);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
