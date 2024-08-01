import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "login":
      return { ...state };
    case "logout":
  }
}

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
