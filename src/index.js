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
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import PostPage from './pages/postPage/PostPage';
import AskPage from './pages/askPage/AskPage';
import DetailPage from './pages/detailPage/DetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      
      {
        element: <MainLayout />,
        children: [
          { path: "/home", element: <MainPage /> },
          { path: "/noti", element: <NotiPage /> },
          { path: "/notidetail/:id", element: <NotiDetailPage /> },
          { path: "/post", element: <PostPage /> },
          { path: "/ask", element: <AskPage /> },
          { path: "/detail", element: <DetailPage /> },
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

