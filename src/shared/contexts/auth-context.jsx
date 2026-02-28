import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

import { storageKeys } from "../constants";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const FOUR_HOURS_MS = 4 * 24 * 60 * 60 * 1000;

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
        password,
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
      sessionStorage.removeItem(storageKeys.companyInfo);
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
          "Failed to send password reset email, please try again later",
        );
      }
      throw error;
    } finally {
      setIsAuthChanging(false);
    }
  }

  useEffect(() => {
    let idleTimer;

    const resetIdleTimer = () => {
      if (idleTimer) clearTimeout(idleTimer);

      if (auth.currentUser) {
        idleTimer = setTimeout(() => {
          logout();
        }, FOUR_HOURS_MS);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const lastSignIn = new Date(user.metadata.lastSignInTime).getTime();
        const now = Date.now();

        if (now - lastSignIn > SEVEN_DAYS_MS) {
          logout();
          return;
        }

        window.addEventListener("mousemove", resetIdleTimer);
        window.addEventListener("keydown", resetIdleTimer);
        window.addEventListener("click", resetIdleTimer);

        resetIdleTimer();
      } else {
        window.removeEventListener("mousemove", resetIdleTimer);
        window.removeEventListener("keydown", resetIdleTimer);
        window.removeEventListener("click", resetIdleTimer);
      }

      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
      window.removeEventListener("click", resetIdleTimer);
    };
  }, []);

  useEffect(() => {
    if (!currentUser) {
      sessionStorage.removeItem(storageKeys.companyInfo);
    }
  }, [currentUser]);

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
