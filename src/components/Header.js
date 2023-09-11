import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
import constants from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));

        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black w-full absolute">
      <div className="flex justify-between">
        <img
          className="w-48 p-4 m-4 ml-20"
          src={constants.NETFLIX_LOGO}
          alt="netflix-logo"
        />

        {location.pathname === '/browse' && (
          <div className="flex">
            <img
              className="my-auto p-2 m-2 h-10"
              src={constants.USER_LOGO}
              alt="usericon"
            />
            <button
              className="bg-red-600 text-white my-auto p-2 m-2 rounded-lg hover:bg-red-700"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
