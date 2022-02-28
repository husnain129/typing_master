import React, { useContext, useRef, useState } from "react";
import { TestContext } from "../../context/TestContext";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./TestBox.module.scss";

const TestBox = () => {
  const { data } = useContext(TestContext);
  const { selectedTheme } = useContext(ThemeContext);
  let [idx, setIdx] = useState(0);
  let [time, setTime] = useState(30);
  let intervalRef = useRef(null);

  return (
    <div>
      <div className={s.testHeader}>
        <p style={{ marginBottom: "10px" }}>WPM: XX / ACC: XX</p>
        <p>{time}</p>
      </div>
      <div className={s[selectedTheme]}>
        <div className={s.paragraph}>
          {data.map((word, i) => {
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
          intervalRef={intervalRef}
        />
      </div>
    </div>
  );
};

const InputHandler = ({ data, idx, setIdx, setTime, time, intervalRef }) => {
  const { handleEntryColor, resetData } = useContext(TestContext);
  let [textEnter, setTextEnter] = useState("");

  const handleSpace = (e) => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;

            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

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
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    resetData();
    setTime(30);
    setIdx(0);
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
        <input type="text" value="" onKeyDown={handleSpace} disabled />
      )}
      <p onClick={handleReset}>redo</p>
    </div>
  );
};

export default TestBox;
