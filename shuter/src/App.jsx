import React from 'react';

import HomePage from './components/HomePage';

import { BrowserRouter, RouterProvider , createBrowserRouter } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/auth/signup/Signup'

function App() {

  const routes = createBrowserRouter([
{
  path:"/",
  element:<HomePage/>
}
,

{
  path:"/home",
  element:<WelcomePage/>
},
{
  path:"/signup",
  element:<SignUp/>
}

   
  ])
 

  return (
    <div>
     < RouterProvider router = {routes}/>
     
    </div>
  );
}

export default App;
