import React from 'react';

import HomePage from './components/HomePage';
import Form from './components/Login/Form'
import { BrowserRouter, RouterProvider , createBrowserRouter } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/signup/Signup'

function App() {

  const routes = createBrowserRouter([
{
  path:"/",
  element:<HomePage/>
}
,
{
  path:"/login",
  element:<Form/>
},
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
