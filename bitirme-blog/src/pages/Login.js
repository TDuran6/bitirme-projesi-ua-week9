import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login({ setISAuth }) {
  let navigate = useNavigate();
  
const signInwithGoogle = () => {
signInWithPopup(auth, provider).then((result) => {
localStorage.setItem("isAuth", true);
setISAuth(true);
  navigate("/");
   });
  };

  return (
  <div className="loginPage">
    <p>Sign In With Google to Continue</p>
    <button className="login-with-google-btn" onClick={signInwithGoogle}>
      Sign In with Google
      </button>
    </div>
    );
}

export default Login;
