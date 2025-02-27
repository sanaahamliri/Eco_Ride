import React, { createContext, useState, useContext, useEffect } from "react";
import { setAuthToken, authService } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setAuthToken(token);
          const userData = await authService.getCurrentUser();
          setUser(userData);
        } catch (error) {
          console.error("Failed to initialize auth:", error);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      const { token, user } = response.data;
      console.log(token, user);
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      console.log(user);
      setAuthToken(token);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (userData) => {
    console.log(userData);
    try {
      const response = await authService.register(userData);
      const { token, user } = response.data;
      setAuthToken(token);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
