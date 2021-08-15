import React, { useState, useEffect, Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import AuthService from "../services/auth.service";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import BoardUser from "./BoardUser";
import BoardModerator from "./BoardModerator";
import BoardAdmin from "./BoardAdmin";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <BrowserRouter>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <a
                        href="/"
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        aria-current="page"
                      >
                        Home
                      </a>
                      {showModeratorBoard && (
                        <a
                          href="/mod"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Moderator Board
                        </a>
                      )}
                      {showAdminBoard && (
                        <a
                          href="/admin"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Admin Board
                        </a>
                      )}
                      {currentUser && (
                        <a
                          href="/user"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          User Board
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          {currentUser && (
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          )}
                          {!currentUser && (
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open menu</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="grey"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </Menu.Button>
                          )}
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            (
                            {currentUser && (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={`/profile/${user.id}`}
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    {currentUser.username}
                                  </a>
                                )}
                              </Menu.Item>
                            )}
                            {currentUser && (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                            )}
                            {currentUser && (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/login"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    onClick={logOut}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            )}
                            {!currentUser && (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/login"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Login
                                  </a>
                                )}
                              </Menu.Item>
                            )}
                            {!currentUser && (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/register"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Sign Up
                                  </a>
                                )}
                              </Menu.Item>
                            )}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="/"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  DimaFit
                </a>
                {showModeratorBoard && (
                  <a
                    href="/mod"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Moderator Board
                  </a>
                )}
                {showAdminBoard && (
                  <a
                    href="/admin"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Admin Board
                  </a>
                )}
                {currentUser && (
                  <a
                    href="/user"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    User Board
                  </a>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {user && (
            <Route path="/profile/:id" element={<Profile userId={user.id} />} />
          )}

          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
