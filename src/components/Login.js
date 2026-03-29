import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMAGE } from "../utils/Logo";
import { checkValidate } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState(null); // Changed to null for cleaner logic

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickButton = () => {
    const validationMessage = checkValidate(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );
    setMessage(validationMessage);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setMessage(null); // Clear errors when switching modes
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="absolute inset-0 z-[-1]">
        <img
          src={BG_IMAGE}
          alt="Background"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      <div className="flex justify-center items-center min-h-[90vh]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[450px] p-16 bg-black/80 text-white rounded-md flex flex-col"
        >
          <h1 className="text-3xl font-bold mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 bg-[#333] rounded w-full focus:outline-none focus:ring-b-2 focus:ring-orange-500 transition-all"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-4 my-2 bg-[#333] rounded w-full focus:outline-none focus:ring-b-2 focus:ring-orange-500 transition-all"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-2 bg-[#333] rounded w-full focus:outline-none focus:ring-b-2 focus:ring-orange-500 transition-all"
          />

          {/* Improved Error Message Look */}
          {message && (
            <div className="text-[#e87c03] text-[13px] mt-2 px-1 flex items-start">
              <span className="mr-1 mt-[2px]">ⓘ</span> {message}
            </div>
          )}

          <button
            onClick={handleClickButton}
            type="submit"
            className="p-4 mt-8 mb-2 bg-[#e50914] font-bold rounded hover:bg-red-700 transition duration-200"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center justify-between text-[#b3b3b3] text-sm mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-1 w-4 h-4 accent-gray-500"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>

          <div className="mt-10">
            <p className="text-[#737373]">
              {isSignInForm ? "New to Netflix?" : "Already a user?"}{" "}
              <span
                className="text-white hover:underline cursor-pointer font-medium"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;