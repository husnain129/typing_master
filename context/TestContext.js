import { createContext, useState } from "react";

const TestContext = createContext();

const TestProvider = ({ children }) => {
  const dataVal = String(
    "he find each might point before that stand around state own other should after that run turn any around present work system get fact one house we course about give that look now by change part man face other if and the tell many use work become problem while own long about without make because the get new give also real down hand first late another use it like write must the write again too again could number no group child it down become help this point stand system stand at she order not leave over again with general work "
  )
    .split(" ")
    .map((word, id) => {
      return {
        [id]: word,
        color: "",
      };
    });

  let [data, setData] = useState(dataVal);
  let [speed, setSpeed] = useState(0);

  const handleEntryColor = (idx, color) => {
    data[idx]["color"] = color;
  };

  const resetData = () => {
    data.map((e) => {
      e["color"] = e["color"] !== "" && "";
    });
  };

 

  return (
    <TestContext.Provider
      value={{ data, handleEntryColor, resetData, speed, setSpeed }}
    >
      {children}
    </TestContext.Provider>
  );
};

export { TestContext, TestProvider };
