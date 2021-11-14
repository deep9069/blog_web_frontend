import React, { useState, useContext, useEffect } from "react";
const AuthContext = React.createContext(undefined);
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userSignedIn: false,
    name: "",
    email: "",
  });

  useEffect(() => {
    let authLocal = localStorage.getItem("auth");
    if (authLocal) {
      let authLocalObj = JSON.parse(authLocal);
      if (authLocal) {
        setAuth(authLocalObj);
      }
    }
  }, []);
  // taking last credentials from local storage
  const userSignIn = (name, email) => {
    setAuth({
      userSignedIn: true,
      name,
      email,
    });
  };

  const userSignOut = () => {
    setAuth({
      userSignedIn: false,
      name: "",
      email: "",
    });
  };
  const data = [auth, userSignIn, userSignOut];
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};
