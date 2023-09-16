import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textContants } from '../utils/textContants';
import { openai } from '../utils/openai';
import constants from '../utils/constants';
import { setGptSearchNames } from '../utils/store/moviesSlice';

const GptSearchBar = () => {
  const localeCode = useSelector((store) => store.config?.locale);

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const handleGptSearch = async () => {
    if (searchText.current.value) {
      dispatch(setGptSearchNames(null));

      const query = constants.getGptQuery(searchText.current.value);
      // make API to open ai api
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo'
      });

      dispatch(setGptSearchNames(gptResults.choices[0].message.content));
    }
  };

  return (
    <div>
      <form
        className="bg-black p-2 m-2 bg-opacity-50"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 w-96 text-slate-900 placeholder-gray-600"
          placeholder={textContants[localeCode].placeholderText}
        />
        <button
          className="rounded-lg bg-red-500 p-2 m-2 text-white"
          onClick={handleGptSearch}
        >
          {textContants[localeCode].searchText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
