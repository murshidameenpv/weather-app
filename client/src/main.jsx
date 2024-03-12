import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
