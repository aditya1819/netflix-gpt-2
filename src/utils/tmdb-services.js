import constants from './constants';

export const getNowPlayingMovies = async () => {
  let data = await fetch(
    `${constants.TMDB_BASE_URL}/movie/now_playing`,
    constants.API_OPTIONS
  );

  data = await data.json();

  return data.results;
};
