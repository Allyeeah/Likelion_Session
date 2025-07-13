import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'; 
import MainPage from "../src/pages/mainPage/MainPage";
import './GlobalStyles.scss';
import MainLayout from './components/MainLayout';
import NotiPage from './pages/notiPage/NotiPage';
import NotiDetailPage from './pages/notiPage/NotiDetailPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Navigate to="/main" replace /> },
      {
        element: <MainLayout />,
        children: [
          { path: "/home", element: <MainPage /> },
          { path: "/noti", element: <NotiPage /> },
          {path: "/notidetail", element: <NotiDetailPage />},
        ],
        },
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

