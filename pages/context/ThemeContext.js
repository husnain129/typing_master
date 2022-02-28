import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let [selectedTheme, setSelectedTheme] = useState("default");
  useEffect(() => {
    if (localStorage.getItem("selectTheme") !== undefined) {
      setSelectedTheme(localStorage.getItem("selectTheme"));
      console.log(localStorage.getItem("selectTheme"));
    }
  }, []);
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
