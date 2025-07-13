import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'; 
import MainPage from "../src/pages/mainPage/MainPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Navigate to="/main" replace /> },
      { path: "/main", element: <MainPage /> },
      //{ path: "home", element: <Home /> },
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

