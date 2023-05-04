import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDH74O6Nb7w0TpcSRXmI1oXEVaAxBKg-0Q",
  authDomain: "opensky-auth.firebaseapp.com",
  projectId: "opensky-auth",
  storageBucket: "opensky-auth.appspot.com",
  messagingSenderId: "550917011818",
  appId: "1:550917011818:web:74fdc978c708abdfae4d13",
  measurementId: "G-GNVNKJY2GG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);