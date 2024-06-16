import React from 'react';

import HomePage from './components/HomePage';
import Form from './components/Login/Form'
import { BrowserRouter, RouterProvider , createBrowserRouter } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

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
}

   
  ])
 

  return (
    <div>
     < RouterProvider router = {routes}/>
     
    </div>
  );
}

export default App;
