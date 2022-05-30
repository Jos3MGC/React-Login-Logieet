import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  console.log("All Cookies", Cookies.get());
  const [id, setID] = useState(Cookies.get("idEmpresa"));
  console.log("UserProvider id: ", id);

  const value = { id, setID };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export { useUser, UserProvider };
