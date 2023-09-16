import React from 'react';
import Header from './Header';
import useFetchMovies from '../hooks/useFetchMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import constants, { categoryArray } from '../utils/constants';

const Browse = () => {
  useFetchMovies(categoryArray);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer categoryArray={categoryArray} />
    </div>
  );
};

export default Browse;
