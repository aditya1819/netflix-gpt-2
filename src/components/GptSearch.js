import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const movies = useSelector((store) => store.movies?.gptSearchNames);

  console.log('pc', movies);

  return (
    <div className="nf-image-cover">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="h-28">
          <GptSearchBar />
        </div>
        {movies && (
          <div>
            <GptSuggestion moviesString={movies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;
