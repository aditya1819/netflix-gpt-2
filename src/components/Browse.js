import React from 'react';
import Header from './Header';
import useFetchMovies from '../hooks/useFetchMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { categoryArray } from '../utils/constants';
import GptSearch from './GptSearch';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGptSearchMovies,
  setGptSearchNames
} from '../utils/store/moviesSlice';

const Browse = () => {
  useFetchMovies(categoryArray);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  dispatch(setGptSearchNames(null));
  dispatch(setGptSearchMovies(null));

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
