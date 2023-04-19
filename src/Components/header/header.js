// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// // import Logo from "../images/header-logo.png";
// // import searchIcon from "../images/icons/searchIcon.png";
// // import shoopingCart from "../images/icons/shopping-cart.png";
// import "./header.css";
// import { auth } from "../../firebase";
// import { useAuth } from "../../context/GlobalProvider";

// const Header = () => {
//   const handleAuthentication = () => {
//     auth.signOut();
//   };
//    const { user } = useAuth();
//   const counter = useSelector((state) => state.count);
//   const [search, setsearch] = useState("");
//   const navigate = useNavigate();
//   const handelSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?name=${search}`);
//     setsearch("");
//   };
//   return (

//     <div className="header">
//       <Link to="/">
//         <img className="header-logo" src="./header-logo.png" alt="logo-img" />
//       </Link>
//       <div className="header-search">
//         <input className="header-searchInput" type="text" />
//         <img
//           src="./searchIcon.png"
//           alt="search icon"
//           className="header-searchIcon"
//         />
//       </div>

//       <div className="header-nav">
//         <Link to={!user && "/login"}>
//           <div className="header-option" onClick={handleAuthentication}>
//             <div className="header-optionLineOne">
//               Hello {user ? `${user.email}` : "Guest"}
//             </div>
//             <div className="header-optionLineTwo">
//               {user ? "Sign Out" : "Sign In"}
//             </div>
//           </div>
//         </Link>
//         </div>

//       <Link to="/orders">
//         <div className="header-option">
//           <div className="header-optionLineOne">Returns</div>
//           <div className="header-optionLineTwo">& Orders</div>
//         </div>
//       </Link>

//       <div className="header-option">
//         <div className="header-optionLineOne">Your</div>
//         <div className="header-optionLineTwo">Prime</div>
//       </div>

//       {/* <Link to="/checkout">
//           <div className="header-optionBasket">
//             <img src={shoopingCart} />
//             <span className="header-optionLineTwo header-basketCount">
//               {basket?.length}
//             </span>
//           </div>
//         </Link> */}
//       <span className="nv-b-item mx-2">
//         <NavLink className="nav-item" to="/cards">
//           <a className="nav-link text-white" href="cart.html">
//             <i
//               className="fas fa-shopping-cart"
//               style={{ fontSize: " 19pt;" }}
//             ></i>
//             Cart{" "}
//             <sup>
//               <span
//                 className="badge badge-warning p-1 font-weight-bold"
//                 id="cartCounter"
//               >
//                 {counter}
//               </span>
//             </sup>
//           </a>
//         </NavLink>
//       </span>
//     </div>
//   );
// };

// export default Header;
// ///////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Logo from "../images/header-logo.png";
// import searchIcon from "../images/icons/searchIcon.png";
// import shoopingCart from "../images/icons/shopping-cart.png";
import "./header.css";
import { auth } from "../../firebase";
import { useAuth } from "../../context/GlobalProvider";




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

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)


const Header = () => {


  
  //language
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])



  const handleAuthentication = () => {
    auth.signOut();
  };
  const { user } = useAuth();
  const counter = useSelector((state) => state.count);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    // setsearch("");
  };
  useEffect(() => {
    //  console.log(user.uid);
  }, []);
  // const usernameList = await usernameChecker(username)

  // if (!usernameList.length) {

  //   await updateProfile(auth.currentUser, {

  //     displayName: username.toLowerCase().trim()

  //   });
  // }

  // const userName = JSON.parse(localStorage.getItem('userName'));
  return (
    <div className="header ">
      <Link to="/">
        <img className="header-logo" src="./header-logo.png" alt="logo-img" />
      </Link>
      <form onSubmit={handelSubmit} style={{ width: "60%" }}>
        <div className="header-search ">
          <input
            className="header-searchInput"
            type="text"
            onChange={(ele) => setsearch(ele.target.value)}
          />
          <img
            src="./searchIcon.png"
            alt="search icon"
            className="header-searchIcon"
          />
        </div>
      </form>


      
      <div className="dropdown mx-2">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    // className={classNames('dropdown-item', {
                    //   disabled: currentLanguageCode === code,
                    // })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


      {/* {userName} */}

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionLineOne">
              {t("welcome_message")} {user ? `${user.email}` : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? `${t("signout")}` : `${t("signin")}`}
            </div>
          </div>
        </Link>
      </div>

      <Link to={user ? "/cards" : "/login" }>
        <div className="header-option">
          <div className="header-optionLineOne">{t("page_order")}</div>
          <div className="header-optionLineTwo">{t("page_order2")}</div>
        </div>
      </Link>

      <div className="header-option">
        <div className="header-optionLineOne">{t("your")}</div>
        <div className="header-optionLineTwo">{t("prim")}</div>
      </div>

      {/* <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoopingCart} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link> */}
      <span className="nv-b-item mx-2">
        <NavLink className="nav-item" to="/cards">
          <a className="nav-link text-white" href="cart.html">
            <i
              className="fas fa-shopping-cart"
              style={{ fontSize: " 19pt;" }}
            ></i>
            {t("Cart_page")}{" "}
            <sup>
              <span
                className="badge badge-warning p-1 font-weight-bold"
                id="cartCounter"
              >
                {counter}
              </span>
            </sup>
          </a>
        </NavLink>
      </span>
    </div>
  );
};

export default Header;
