import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import s from "../styles/Home.module.scss";
import Footer from "./components/Footer/Footer";
import TestBox from "./components/TestBox/TestBox";
export default function Home() {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);

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
