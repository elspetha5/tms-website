import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHxTzJR7QzDD8Oqwb3TCi6OY3zsRRWWmw",
  authDomain: "total-mobility-solution-6c7cc.firebaseapp.com",
  databaseURL:
    "https://total-mobility-solution-6c7cc-default-rtdb.firebaseio.com",
  projectId: "total-mobility-solution-6c7cc",
  storageBucket: "total-mobility-solution-6c7cc.firebasestorage.app",
  messagingSenderId: "1002124974884",
  appId: "1:1002124974884:web:cede353a2c7ae5c3f731b1",
  measurementId: "G-C6N2S710TM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
