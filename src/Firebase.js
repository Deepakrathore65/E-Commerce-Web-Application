
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn9uRwIEj8Wh0tTLOL3xMIEn89aXjX8yc",
  authDomain: "fire-auth-1600b.firebaseapp.com",
  projectId: "fire-auth-1600b",
  storageBucket: "fire-auth-1600b.appspot.com",
  messagingSenderId: "1039760361043",
  appId: "1:1039760361043:web:1dc2de38f9240c21dc28a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)