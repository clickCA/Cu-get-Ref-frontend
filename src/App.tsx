import { useState } from 'react'
import './App.css'
import AuthenticationPage from './auth/register'
import Login from './auth/login';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: <AuthenticationPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App
