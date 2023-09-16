import React from 'react';

const GptSearchBar = () => {
  return (
    <div>
      <form className="bg-black p-2 m-2 bg-opacity-50">
        <input
          type="text"
          className="p-2 m-2 w-96"
          placeholder="Let's find something interesting to watch"
        />
        <button className="rounded-lg bg-red-500 p-2 m-2 text-white">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
