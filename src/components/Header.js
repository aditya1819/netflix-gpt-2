import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch will happen from onAuthChange handler
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  return (
    <div className="bg-gradient-to-b from-black w-full absolute">
      <div className="flex justify-between">
        <img
          className="w-48 p-4 m-4 ml-20"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />

        {location.pathname === '/browse' && (
          <div className="flex">
            <img
              className="my-auto p-2 m-2 h-10"
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
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
