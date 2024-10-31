// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState(""); 
  const navigate = useNavigate();

  const login = (name) => {
    setIsAuthenticated(true);
    setAdminName(name); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminName("");
    navigate("/"); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
