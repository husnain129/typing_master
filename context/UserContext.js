import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let [user, setUser] = useState(false);
  let [regNo, setRegNo] = useState("");
  let [name, setName] = useState("");

  return (
    <UserContext.Provider
      value={{ user, setUser, regNo, setRegNo, name, setName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
