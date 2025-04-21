import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [userRole, setUserRole] = useState(null);
  const [credential, setCredential] = useState({
    userId: "vivek",
    currentPassword: "pass",
  });
  return (
    <AuthContext.Provider
      value={{ userRole, setUserRole, credential, setCredential }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
