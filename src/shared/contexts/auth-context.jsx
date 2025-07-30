import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({
  currentUser: null,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  resetPassword: async () => {},
  authError: "",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthChanging, setIsAuthChanging] = useState(false);
  const [authError, setAuthError] = useState("");

  async function login(email, password) {
    setAuthError("");
    setIsAuthChanging(true);

    try {
      const tenantLookupUrl = `${
        import.meta.env.VITE_APPS_SCRIPT_URL
      }?dataType=tenantId&userEmail=${encodeURIComponent(email)}`;

      const response = await fetch(tenantLookupUrl, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
      });

      const text = await response.text();
      if (!response.ok || !text) {
        console.error("Apps Script lookup failed:", response.status, text);
        setAuthError("Failed to log in");
        throw new Error("Apps Script call failed or returned empty response");
      }

      const result = JSON.parse(text);

      if (result.error) {
        setAuthError("Failed to log in");
        throw result.error;
      }

      const tenantId = result.tenantId;
      auth.tenantId = tenantId ?? null;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error) {
      console.error("Firebase login error:", error);
      setAuthError(error.message ?? "Failed to log in");
      throw error;
    } finally {
      setIsAuthChanging(false);
    }
  }

  async function logout() {
    setAuthError("");
    setIsAuthChanging(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase logout error:", error);
      if (error.code && error.message) {
        setAuthError(error.message);
      } else {
        setAuthError("Failed to log out");
      }
      throw error;
    } finally {
      setIsAuthChanging(false);
    }
  }

  async function resetPassword(email) {
    setAuthError("");
    setIsAuthChanging(true);
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error("Firebase password reset error:", error);
      if (error.code && error.message) {
        setAuthError(error.message);
      } else {
        setAuthError(
          "Failed to send password reset email, please try again later"
        );
      }
      throw error;
    } finally {
      setIsAuthChanging(false);
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
    isAuthChanging,
    loading,
    login,
    logout,
    resetPassword,
    authError,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
