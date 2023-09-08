export const isDataValid = (email, password, name, isSignIn) => {
  // Regular expression for a valid email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Regular expression for a valid password (at least 8 characters, containing at least one uppercase letter, one lowercase letter, and one digit)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const nameRegex = /^[A-Za-z\s'-]{3,}$/;

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
