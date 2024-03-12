/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};
