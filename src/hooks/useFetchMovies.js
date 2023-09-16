import { useDispatch } from 'react-redux';
import constants from '../utils/constants';
import { addMovies } from '../utils/store/moviesSlice';
import { useEffect } from 'react';

const useFetchMovies = (categories) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const getPromises = [];

    categories.forEach((category) => {
      getPromises.push(
        fetch(
          `${constants.TMDB_BASE_URL}/movie/${category}`,
          constants.API_OPTIONS
        )
          .then((response) => response.json())
          .catch((error) => console.error(error))
      );
    });

    const responses = await Promise.all(getPromises);

    let i = 0;
    responses.forEach(async (response) => {
      dispatch(
        addMovies({
          movies: await response.results,
          category: categories[i++]
        })
      );
    });
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchMovies;
