
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdzpqCD7yBJxZXmtb9oHbNj_ksrFUlcxc",
  authDomain: "blogproje-98bc6.firebaseapp.com",
  projectId: "blogproje-98bc6",
  storageBucket: "blogproje-98bc6.appspot.com",
  messagingSenderId: "827269200886",
  appId: "1:827269200886:web:621faaf0d086406e8125d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();