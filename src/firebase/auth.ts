import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from "./firebaseConfig";

export const auth = getAuth(app);

export const db = getFirestore(app);

export const signUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const getCurrentUser = () => auth.currentUser;
