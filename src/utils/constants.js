const constant = Object.freeze({
  // validation
  EMAIL_REGEX: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  NAME_REGEX: /^[A-Za-z\s'-]{3,}$/,

  // images
  NETFLIX_LOGO:
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png',
  USER_LOGO: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',

  // redux
  USER_SLICE: 'user'
});

export default constant;
