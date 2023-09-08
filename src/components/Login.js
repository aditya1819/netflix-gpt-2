import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="w-1/4 bg-black bg-opacity-75 p-14">
          <form action="" className="">
            <div className="font-semibold text-3xl text-white m-2 mb-6">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </div>
            {!isSignIn && (
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 m-2 rounded w-full bg-zinc-700 text-white"
                />
              </div>
            )}

            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Email Address"
                className="p-3 m-2 rounded w-full bg-zinc-700 text-white"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="password"
                placeholder="Password"
                className="p-3 m-2 rounded w-full  bg-zinc-700 text-white"
              />
            </div>
            <div className="flex justify-center">
              <button className="p-3 m-2 my-6 w-full bg-red-700 text-white rounded">
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
  );
};

export default Login;
