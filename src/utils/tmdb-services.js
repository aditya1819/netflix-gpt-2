import constant from './constants';

export const getNowPlayingMovies = async () => {
  console.log(constant.API_OPTIONS);

  const data = await fetch(
    `${constant.TMDB_BASE_URL}/movie/now_playing`,
    constant.API_OPTIONS
  );

  const jsonData = await data.json()

  console.log(jsonData);
};
