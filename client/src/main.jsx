import React from "react";
import ReactDOM from "react-dom/client";
import router from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // import ThemeProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
