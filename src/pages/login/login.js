import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };

  const signUp = () => {
    navigate("/signup");
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIn}>
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={signUp}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};
