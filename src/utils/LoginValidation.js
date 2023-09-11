import constants from './constants';

export const isDataValid = (email, password, name, isSignIn) => {
  // Regular expression for a valid email address
  const emailRegex = constants.EMAIL_REGEX;

  // Regular expression for a valid password (at least 8 characters, containing at least one uppercase letter, one lowercase letter, and one digit)
  const passwordRegex = constants.PASSWORD_REGEX;

  // Regex for valid name min 3 char and space allowed
  const nameRegex = constants.NAME_REGEX;

  if (!emailRegex.test(email)) {
    return 'Invalid email address';
  }

  if (!passwordRegex.test(password)) {
    return 'Invalid password';
  }

  if (!isSignIn && !nameRegex.test(name)) {
    return 'Invalid name';
  }
};
