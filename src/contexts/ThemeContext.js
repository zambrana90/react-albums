import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode((prevLightMode) => !prevLightMode);
  };

  return (
    <ThemeContext.Provider
      value={{ lightMode: lightMode, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
