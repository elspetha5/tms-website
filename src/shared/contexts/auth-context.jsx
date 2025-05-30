import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({
  currentUser: null,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  authError: "",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  async function login(email, password) {
    setAuthError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Firebase login error:", error);
      if (error.code && error.message) {
        setAuthError(error.message);
      } else {
        setAuthError("Failed to log in.");
      }
      throw error;
    }
  }

  async function logout() {
    setAuthError("");
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase logout error:", error);
      if (error.code && error.message) {
        setAuthError(error.message);
      } else {
        setAuthError("Failed to log out.");
      }
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    authError,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
