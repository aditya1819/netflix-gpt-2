import { useDispatch, useSelector } from 'react-redux';
import constants from '../utils/constants';
import { addMovieTrailer } from '../utils/store/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const trailerExists = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    const getMovieVideos = async () => {
      let data = await fetch(
        `${constants.TMDB_BASE_URL}/movie/${id}/videos`,
        constants.API_OPTIONS
      );

      data = await data.json();

      let filteredData = data.results.filter((item) => item.type === 'Trailer');

      if (!filteredData) {
        filteredData = data;
      }

      dispatch(addMovieTrailer(filteredData[0]));
    };
    !trailerExists && getMovieVideos();
  }, [dispatch, id, trailerExists]);
};

export default useMovieTrailer;
