import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{

      path:"/",
      element: <Home>thsi homepage</Home>
    }]
  },
]);





import './index.css'
import Home from './components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='px-10'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
