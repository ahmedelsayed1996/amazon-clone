import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Logo from "../images/header-logo.png";
// import searchIcon from "../images/icons/searchIcon.png";
// import shoopingCart from "../images/icons/shopping-cart.png";
import "./header.css";

const Header = () => {
  const counter = useSelector((state) => state.count);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setsearch("");
  };
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-darke shadow-sm">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         <img src="./1.png" alt="" />
    //       </a>
    //       <i className="fa fa-location-dot deliver-icon mr-1"></i>
    //       <a className="navbar-brand deliver" href="#">
    //         Deliver to
    //         <br /> <strong>ASSIUT</strong>
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <form className="form-inline my-2 my-lg-0" style={{ width: "68%" }} onSubmit={handelSubmit}>
    //           <input
    //             className="form-control mr-sm-2 w-75"
    //             type="text"
    //             placeholder="Search Name..."
    //             aria-label="Search"
    //             style={{ width: "90% !important" }}
    //             onChange={(e)=>setsearch(e.target.value)}
    //             value={search}
    //           />
    //           <button
    //             className="btn shadow my-2 my-sm-0 bg-warning"
    //           >
    //             <i className="fa fa-search"></i>
    //           </button>
    //         </form>

    //         <ul className="navbar-nav mr-auto">
    //           <li
    //             className="nav-item "
    //             style={{ display: "grid", placeItems: "center" }}
    //           >
    //             <a
    //               id="noLogin"
    //               className="navbar-brand deliver"
    //               href="../Login&Register/signin.html"
    //             >
    //               Hello Sign in <br />
    //               <b style={{ lineHeight: " 1.5" }}>Accounts & Lists</b>
    //             </a>
    //             <a id="logged" className="navbar-brand deliver" href="#"></a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link text-white" href="#">
    //               <strong>Orders</strong>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="./header-logo.png" alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img
          src="./searchIcon.png"
          alt="search icon"
          className="header-searchIcon"
        />
      </div>
      {/* <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link> */}

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
    </div>
  );
};

export default Header;
