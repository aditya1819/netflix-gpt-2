import React from 'react';
import { useSelector } from 'react-redux';
import { textContants } from '../utils/textContants';

const GptSearchBar = () => {
  const localeCode = useSelector((store) => store.config?.locale);

  return (
    <div>
      <form className="bg-black p-2 m-2 bg-opacity-50">
        <input
          type="text"
          className="p-2 m-2 w-96 text-slate-900 placeholder-gray-600"
          placeholder={textContants[localeCode].placeholderText}
        />
        <button className="rounded-lg bg-red-500 p-2 m-2 text-white">
          {textContants[localeCode].searchText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
