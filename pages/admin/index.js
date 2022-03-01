import React, { useEffect, useState } from "react";
import { getReport } from "../../utils/getReport";
import s from "./admin.module.scss";
const Admin = () => {
  const [report, setReport] = useState([]);
  useEffect(() => {
    (async () => {
      // await addReport();
      const report = await getReport();
      setReport(report);
    })();
  }, []);
  return (
    <div className={s.container}>
      <div className={`${s.panel} ${s.panel_default}`}>
        <div className={s.panel_body}>
          <table className={s.table_latitude}>
            <caption style={{ marginBottom: "5vh" }}>
              Students Positions
            </caption>
            <thead>
              <th>Position</th>
              <th>Name</th>
              <th>Registration Number</th>
              <th>Typing Speed</th>
            </thead>

            <tbody>
              {report?.map((repo, idx) => {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td align="center">{repo.name}</td>
                    <td align="center">{repo.regNo}</td>
                    <td align="center">{repo.TypingSpeed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
