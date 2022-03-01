import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
