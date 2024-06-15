import React from 'react';

import HomePage from './components/HomePage';
import Form from './components/Login/Form'
import { BrowserRouter, RouterProvider , createBrowserRouter } from 'react-router-dom';

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
}

   
  ])
 

  return (
    <div>
     < RouterProvider router = {routes}/>
     
    </div>
  );
}

export default App;
