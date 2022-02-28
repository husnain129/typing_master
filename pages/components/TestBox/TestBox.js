import React, { useContext, useState } from "react";
import { TestContext } from "../../context/TestContext";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./TestBox.module.scss";
const TestBox = () => {
  const { data } = useContext(TestContext);
  const { selectedTheme } = useContext(ThemeContext);
  let [idx, setIdx] = useState(0);
  let [time, setTime] = useState();

  return (
    <div>
      <p style={{ marginBottom: "10px", fontSize: "16pt" }}>
        WPM: XX / ACC: XX
      </p>
      <div className={s[selectedTheme]}>
        <div className={s.paragraph}>
          {data.map((word, i) => {
            return (
              <p key={i} style={{ color: word["color"] }}>
                {word[i]}
              </p>
            );
          })}
        </div>
        <InputHandler data={data} setTime={setTime} idx={idx} setIdx={setIdx} />
      </div>
    </div>
  );
};

const InputHandler = ({ data, idx, setIdx, setTime }) => {
  const { handleWrongEntry } = useContext(TestContext);
  let [textEnter, setTextEnter] = useState("");

  const handleSpace = (e) => {
    if (e.keyCode === 32) {
      if (String(textEnter).trim() !== String(data[idx][idx])) {
        handleWrongEntry(idx);
      }
      setTextEnter("");
      setIdx(parseInt(idx) + 1);
    }
  };
  return (
    <div className={s.testAns}>
      <input
        type="text"
        value={textEnter}
        onKeyDown={handleSpace}
        onChange={(e) => setTextEnter(e.target.value)}
      />
      <p>redo</p>
    </div>
  );
};

export default TestBox;
