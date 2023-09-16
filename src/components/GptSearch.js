import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';

const GptSearch = () => {
  return (
    <div className="nf-image-cover">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <GptSearchBar />
        </div>
        <div>
          <GptSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
