import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const movies = useSelector((store) => store.movies?.gptSearchNames);

  console.log('pc', movies);

  return (
    <div className="nf-image-cover">
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center pt-36">
          <GptSearchBar />
        </div>
        <div className="">
          {movies && <GptSuggestion moviesString={movies} />}
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
