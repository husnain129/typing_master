import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let [selectedTheme, setSelectedTheme] = useState("default");

  return (
    <ThemeContext.Provider
      value={{
        theme: ["default", "monokai", "nord"],
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
