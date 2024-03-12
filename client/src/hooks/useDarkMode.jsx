import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useDarkMode = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }

  return context;
};
