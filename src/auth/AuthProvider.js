import { UserObserver } from "../auth/Firebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// Provides authentication to child components
const AuthProvider = ({ children }) => {
  const [userValue, setValue] = useState({});
  const [currentUser, setCurrentUser] = useState(userValue);

  useEffect(() => {
    UserObserver(setCurrentUser);
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setValue(items);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
