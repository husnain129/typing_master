import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let [selectedTheme, setSelectedTheme] = useState("default");
  useEffect(() => {
    if (localStorage.getItem("selectTheme") !== null) {
      console.log(
        'localStorage.getItem("selectTheme")',
        localStorage.getItem("selectTheme")
      );
      setSelectedTheme(localStorage.getItem("selectTheme"));
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
