import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer();

  function login(email, password) {}

  function logout() {}

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("AuthCOntext was used outside the AuthProvider");
  }
}

export { AuthProvider, useAuth };
