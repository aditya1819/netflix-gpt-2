import React, { useEffect } from 'react';
import Header from './Header';
import { getNowPlayingMovies } from '../utils/tmdb-services';

const Browse = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await getNowPlayingMovies();
      console.log(data);
    };

    getData();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
