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

const Header = () => {
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
    setsearch("");
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
      <form onSubmit={handelSubmit} style={{width:"60%"}}>
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

      {/* {userName} */}

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>
      </div>

      <Link to="/orders">
        <div className="header-option">
          <div className="header-optionLineOne">Returns</div>
          <div className="header-optionLineTwo">& Orders</div>
        </div>
      </Link>

      <div className="header-option">
        <div className="header-optionLineOne">Your</div>
        <div className="header-optionLineTwo">Prime</div>
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
            Cart{" "}
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
    </div >
  );
};

export default Header;
