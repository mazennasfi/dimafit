import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Register = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user).then(
      (response) => {
        setMessage(response.data.message);
        navigate("/login");
      },
      (error) => {
        setMessage("Verify you enter a valid email");
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleInput}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleRegister}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{" "}
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/"
            >
              Privacy Policy
            </a>
          </div>
          {message && (
            <div className="block text-sm text-left text-red-600 bg-red-200 border border-red-400 h-12 flex items-center p-4 rounded-none">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
