import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/home',
      element: <WelcomePage />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
