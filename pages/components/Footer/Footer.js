import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./Footer.module.scss";
const Footer = () => {
  const { theme, setSelectedTheme } = useContext(ThemeContext);
  return (
    <div className={s.container}>
      <p>Themes:</p>
      <div className={s.themeContainer}>
        {theme.map((e) => (
          <span key={e} onClick={() => setSelectedTheme(e)}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
