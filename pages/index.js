import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import s from "../styles/Home.module.scss";
import Footer from "./components/Footer/Footer";
import ModalBox from "./components/Modal/ModalBox";
import TestBox from "./components/TestBox/TestBox";
export default function Home() {
  const { selectedTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const [isRegNo, setIsRegNo] = useState(
    typeof localStorage !== "undefined" &&
      localStorage.getItem("reg_no") !== null
  );

  const [test, setTest] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("test") !== null
  );

  useEffect(() => {
    if (user) {
      setIsRegNo(true);
    }
  }, [user, setUser]);

  return (
    <div className={s[selectedTheme]}>
      <div className={s.container}>
        <div className={s.testBox}>
          {!test ? isRegNo ? <TestBox /> : <ModalBox /> : "Already done Test"}
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
