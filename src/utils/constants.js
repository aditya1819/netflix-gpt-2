const constants = Object.freeze({
  // validation
  EMAIL_REGEX: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  NAME_REGEX: /^[A-Za-z\s'-]{3,}$/,

  // images
  NETFLIX_LOGO:
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png',
  USER_LOGO: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',

  // redux
  USER_SLICE: 'user',
  MOVIES_SLICE: 'movies',
  GPT_SLICE: 'gpt',
  CONFIG_SLICE: 'config',

  // tmdb
  TMDB_BASE_URL: 'https://api.themoviedb.org/3',
  API_OPTIONS: {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
    }
  },
  IMAGES_BASE_URL: 'https://image.tmdb.org/t/p/w780',

  // movie categories
  POPULER: 'popular',
  NOW_PLAYING: 'now_playing',
  TOP_RATED: 'top_rated',
  UPCOMING: 'upcoming',

  // supported languages
  SUPPORTED_LOCALES: [
    {
      locale: 'en-in',
      name: 'English'
    },
    {
      locale: 'hi-in',
      name: 'Hindi'
    },
    {
      locale: 'es-es',
      name: 'Spanish'
    },
    {
      locale: 'de-de',
      name: 'German'
    }
  ],

  // gpt query
  getGptQuery(query) {
    return `Act as a movie recommendation system and suggest some movies for the query: ${query}. Give a comma separated list of 5 movies names only and prefer suggesting Hollywood and Bollywood movies. In reply just provide an array of movies names`;
  }
});

export const categoryArray = [
  constants.NOW_PLAYING,
  constants.POPULER,
  constants.TOP_RATED,
  constants.UPCOMING
];

export default constants;
