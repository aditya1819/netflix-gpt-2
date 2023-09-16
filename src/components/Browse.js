import React from 'react';
import Header from './Header';
import useFetchMovies from '../hooks/useFetchMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { categoryArray } from '../utils/constants';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useFetchMovies(categoryArray);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer categoryArray={categoryArray} />
        </>
      )}
    </div>
  );
};

export default Browse;
