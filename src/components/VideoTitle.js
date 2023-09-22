import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-8 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      {/* <p className="pt-10 text-lg w-1/4">{overview}</p> */}

      <div className="my-4">
        <button className="bg-white p-1 md:p-2 text-black md:pl-6 md:pr-6 md:m-2 rounded-sm font-semibold">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-slate-500 p-1 ml-2 md:p-2 md:pl-4 md:pr-4 md:m-2 rounded-sm bg-opacity-25 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
