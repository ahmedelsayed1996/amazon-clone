
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./login.css";
import Logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]


export const Login = () => {

  //language
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t]);



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

        <h1>{t("login")}</h1>
        <form>
          <h5>{t("email")}</h5>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>{t("password")}</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIn}>

            {t("login2")}
          </button>
          <p>
           {t("rules")}
          </p>
          <button className="login-registerBtn" onClick={signUp}>
           {t("account")}

          </button>
        </form>
      </div>
    </div>
  );
};
