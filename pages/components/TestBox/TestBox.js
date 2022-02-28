import React, { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/TestContext";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./TestBox.module.scss";
const TestBox = () => {
  const { data } = useContext(TestContext);
  const { selectedTheme } = useContext(ThemeContext);
  let [idx, setIdx] = useState(0);
  let [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(parseInt(time) - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <div>
      <div className={s.testHeader}>
        <p style={{ marginBottom: "10px" }}>WPM: XX / ACC: XX</p>
        <p>{time}</p>
      </div>
      <div className={s[selectedTheme]}>
        <div className={s.paragraph}>
          {data.map((word, i) => {
            const clr = i === idx ? "blue" : "";
            return (
              <p
                key={i}
                className={`${i === idx && s.nextWord}`}
                style={{ color: word["color"] }}
              >
                {word[i]}
              </p>
            );
          })}
        </div>
        <InputHandler
          data={data}
          setTime={setTime}
          idx={idx}
          setIdx={setIdx}
          time={time}
        />
      </div>
    </div>
  );
};

const InputHandler = ({ data, idx, setIdx, setTime, time }) => {
  const { handleEntryColor, resetData } = useContext(TestContext);
  let [textEnter, setTextEnter] = useState("");
  const handleSpace = (e) => {
    if (e.keyCode === 32) {
      if (String(textEnter).trim() !== String(data[idx][idx])) {
        handleEntryColor(idx, "red");
      } else {
        handleEntryColor(idx, "#a6e22e");
      }
      setTextEnter("");
      setIdx(parseInt(idx) + 1);
    }
  };
  function handleReset() {
    setTextEnter("");
    setIdx(0);
    resetData();
    setTime(60);
  }
  return (
    <div className={s.testAns}>
      {time !== 0 ? (
        <input
          type="text"
          value={textEnter}
          onKeyDown={handleSpace}
          onChange={(e) => setTextEnter(e.target.value)}
        />
      ) : (
        <input
          type="text"
          value={textEnter}
          onKeyDown={handleSpace}
          disabled
          onChange={(e) => setTextEnter(e.target.value)}
        />
      )}
      <p onClick={handleReset}>redo</p>
    </div>
  );
};

export default TestBox;