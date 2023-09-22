import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
import constants from '../utils/constants';
import { toggleGptSearch } from '../utils/store/gptSlice';
import { setLocaleCode } from '../utils/store/configSlice';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleLocaleChange = (e) => {
    dispatch(setLocaleCode(e.target.value));
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="bg-gradient-to-b from-black w-full absolute">
      <div className="flex justify-between flex-col md:flex-row">
        <img
          className="w-48 p-2 m-2 ml-20 z-10"
          src={constants.NETFLIX_LOGO}
          alt="netflix-logo"
        />

        {location.pathname === '/browse' && (
          <div className="flex">
            {showGptSearch && (
              <div className="my-auto z-10">
                <select className="p-2 m-2 z-10" onChange={handleLocaleChange}>
                  {constants.SUPPORTED_LOCALES.map((item) => (
                    <option key={item.locale} value={item.locale}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              className="bg-slate-700 bg-opacity-50  text-white my-auto p-2 m-2 rounded-lg z-10 hover:bg-slate-800"
              onClick={handleGptToggle}
            >
              {showGptSearch ? 'Movies' : 'GPT Search'}
            </button>

            <img
              className="my-auto p-2 m-2 h-10 z-10"
              src={constants.USER_LOGO}
              alt="usericon"
            />
            <button
              className="bg-red-600 text-white my-auto p-2 m-2 rounded-lg z-10 hover:bg-red-700"
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
