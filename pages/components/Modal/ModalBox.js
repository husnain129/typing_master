import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { UserContext } from "../../../context/UserContext";
import s from "./Modal.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "30vh",
    width: "40vw",
  },
};

Modal.setAppElement("#__next");

const ModalBox = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { setUser } = useContext(UserContext);

  let [regNo, setRegNo] = useState("");
  let [error, setError] = useState("valid");

  useEffect(() => {
    setIsOpen(true);
  }, []);

  function handleSubmit() {
    const regex = /[A-Z]{2}[0-9]{2}-[A-Z]{3}-[0-9]{3}/gi;
    let t = regex.test(regNo);
    if (t) {
      localStorage.setItem("reg_no", regNo);
      setUser(true);
      setError("valid");
    } else {
      setError("Invalid Registration");
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={s.modalContainer}>
          <p>Enter Your Registration</p>
          <div className={s.inputContainer}>
            <input
              type="text"
              placeholder="SP19-BCS-092"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
            <p className={s.button} onClick={handleSubmit}>
              Submit
            </p>
          </div>
          {error && (
            <p
              style={{ opacity: error !== "valid" ? 1 : 0 }}
              className={s.error}
            >
              {error}
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalBox;
