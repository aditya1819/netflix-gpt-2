import { useDispatch } from 'react-redux';
import constants from '../utils/constants';
import { setGptSearchMovies } from '../utils/store/moviesSlice';
import { useEffect } from 'react';

const useFetchMoviesByName = (names) => {
  const dispatch = useDispatch();

  const getMoviesByName = async () => {
    const getPromises = [];

    console.log(names);
    // /search/movie?include_adult=false&language=en-US&page=1

    names.forEach((name) => {
      const encodedSearchText = encodeURIComponent(name);
      getPromises.push(
        fetch(
          `${constants.TMDB_BASE_URL}/search/movie?query=${encodedSearchText}&include_adult=false&language=en-US&page=1`,
          constants.API_OPTIONS
        )
          .then((response) => response.json())
          .catch((error) => console.error(error))
      );
    });

    const responses = await Promise.all(getPromises);

    const movies = [];

    // apparently this is supposed to be done on BE
    // but anyways filtering here
    let i = 0;
    responses.forEach((response) => {
      const name = names[i++].slice(1, -1);

      response.results.forEach((movie) => {
        if (
          movie.title === name &&
          ['en', 'hi'].includes(movie.original_language) &&
          movie.overview
        ) {
          movies.push(movie);
        }
      });
    });

    console.log('movies: ', movies);

    dispatch(setGptSearchMovies(movies));
  };

  useEffect(() => {
    getMoviesByName();
  }, []);
};

export default useFetchMoviesByName;
