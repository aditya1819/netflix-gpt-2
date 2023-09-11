import { useDispatch } from 'react-redux';
import constants from '../utils/constants';
import { addNowPlayingMovies } from '../utils/store/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    let data = await fetch(
      `${constants.TMDB_BASE_URL}/movie/now_playing`,
      constants.API_OPTIONS
    );

    data = await data.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
