import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { errorNotify, successNotify } from "../toast/Toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDHhU1vfZjnPolv6CDyc_YLWPSbl2znAIU",

  authDomain: "movie-9fbd2.firebaseapp.com",

  projectId: "movie-9fbd2",

  storageBucket: "movie-9fbd2.appspot.com",

  messagingSenderId: "912159492881",

  appId: "1:912159492881:web:3cb951225e273f56aa5ab0"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const CreateUser = async (name, surname, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: `${name} ${surname}`,
    });
    successNotify("New account created!");
  } catch (error) {
    errorNotify(error.message);
  }
};

export const UserLogin = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");

    {
      successNotify("Logged in!") && (
        <successNotify onConfirm={navigate("/")} />
      );
    }
  } catch (error) {
    errorNotify(error.message);
  }
};

export const logOut = (navigate) => {
  signOut(auth);
  successNotify("Logged out!");
  navigate("/login");
};

// Observes current user
export const UserObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, name } = user;
      setCurrentUser({ email, name });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, name })
      );
    } else {
      localStorage.removeItem("currentUser");
      setCurrentUser(false);
    }
  });
};
