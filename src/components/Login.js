import React, { useState, useRef } from 'react';
import Header from './Header';
import { isDataValid } from '../utils/LoginValidation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from '@firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSubmit = () => {
    const message = isDataValid(
      email.current.value,
      password.current.value,
      fullName?.current?.value,
      isSignIn
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullName.current.value
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;

              dispatch(addUser({ uid, email, displayName }));

              navigate('/browse');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(`${errorCode}: ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  return (
    <div>
      <div className="login">
        <div>
          <Header />
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="w-1/4 bg-black bg-opacity-75 p-14">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="font-semibold text-3xl text-white m-2 mb-6">
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </div>
              {!isSignIn && (
                <div className="flex justify-center">
                  <input
                    ref={fullName}
                    type="text"
                    placeholder="Full Name"
                    className="p-3 m-2 rounded w-full bg-zinc-700 text-white"
                  />
                </div>
              )}
              <div className="flex justify-center">
                <input
                  ref={email}
                  type="text"
                  placeholder="Email Address"
                  className="p-3 m-2 rounded w-full bg-zinc-700 text-white"
                />
              </div>
              <div className="flex justify-center">
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="p-3 m-2 rounded w-full  bg-zinc-700 text-white"
                />
              </div>

              <div className="m-2 mt-0 text-red-500">
                <span className=""></span>
                {errorMessage}
              </div>

              <div className="flex justify-center">
                <button
                  className="p-3 m-2 my-6 w-full bg-red-700 text-white rounded"
                  onClick={handleSubmit}
                >
                  {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>
              </div>
            </form>

            <div className="flex">
              <div className="text-gray-400 m-2">
                {!isSignIn ? 'Already an user?' : 'New to Netlix?'}{' '}
              </div>
              <div
                className="text-white m-2 cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                {isSignIn ? 'Sign Up Now' : 'Sign In Now'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
