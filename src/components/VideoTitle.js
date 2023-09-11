import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="pt-10 text-lg w-1/4">{overview}</p>

      <div className="my-4">
        <button className="bg-white p-2 text-black pl-6 pr-6 m-2 rounded-sm font-semibold">
          ▷ Play
        </button>
        <button className="bg-slate-500 p-2 pl-4 pr-4 m-2 rounded-sm bg-opacity-25 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
