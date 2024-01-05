// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARe_dyrk1Z3iH0YMpHJVNQ1zIQiIf_MPQ",
  authDomain: "auth-pro-17.firebaseapp.com",
  projectId: "auth-pro-17",
  storageBucket: "auth-pro-17.appspot.com",
  messagingSenderId: "403246523010",
  appId: "1:403246523010:web:8cb0de1bbf9cc6793e4a9b",
  measurementId: "G-EVWPN8TPXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};