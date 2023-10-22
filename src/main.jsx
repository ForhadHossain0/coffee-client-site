import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import DataAdd from './component/DataAdd';
import DataUpdate from './component/DataUpdate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:'/data-add',
    element: <DataAdd></DataAdd>
  },
  {
    path:'/data-update/:id',
    element: <DataUpdate></DataUpdate>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
