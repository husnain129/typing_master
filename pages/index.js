import { useContext } from "react";
import s from "../styles/Home.module.scss";
import Footer from "./components/Footer/Footer";
import TestBox from "./components/TestBox/TestBox";
import { ThemeContext } from "./context/ThemeContext";
export default function Home() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div className={s[selectedTheme]}>
      <div className={s.container}>
        <div className={s.testBox}>
          <TestBox />
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
