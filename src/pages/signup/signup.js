import React from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { Link } from "react-router-dom";
import { auth, db, fs } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../images/Logo.png";

import { addDoc, collection, getDocs, doc, setDoc } from "@firebase/firestore";

export const Signup = () => {
  const localUser = JSON.parse(localStorage.getItem("userName"));
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [username, setUsername] = useState(localUser?.displayName);

  const user = auth.currentUser;
  const displayName = user ? user.displayName : "";

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (credentials) => {
        const userRef = doc(db, "users", credentials.user.uid);
        console.log(credentials.user.uid);
        setDoc(userRef, {
          userId: credentials.user.uid,
          email: credentials.user.email,
          username: username.toLowerCase().trim(),
        })
          .then(() => {
            setSuccessMsg(
              "Signup Successfull. You will now automatically get redirected to Login"
            );
            setUsername("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/");
            }, 1000);
          })
          .catch((error) => setErrorMsg(error.message));
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  const signIn = () => {
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSignup}>
          <h5>User Name</h5>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
          <h5>Email</h5>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <button className="login-signInBtn" type="submit">
            Sign Up
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={signIn}>
            You have already an account
          </button>
        </form>
      </div>
    </div>
  );
};
