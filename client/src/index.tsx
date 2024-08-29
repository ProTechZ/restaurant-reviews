import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home'
import Reviews from './components/ReviewsList';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
  path: "/reviews",
  element: <Reviews/>,
}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

