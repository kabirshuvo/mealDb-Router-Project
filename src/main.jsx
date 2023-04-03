import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './compoments/AboutPage/AboutPage';
import ErrorPage from './compoments/ErrorPage/ErrorPage';
import FirstPage from './compoments/FirstPage/FirstPage';
import Home from './compoments/Home/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home >Hello world!</Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FirstPage></FirstPage>
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
