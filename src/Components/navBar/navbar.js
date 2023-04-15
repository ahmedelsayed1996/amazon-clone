import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import edd from "../images/3eed.jpg";
const Navbar = () => {
  const counter = useSelector((state) => state.count);
  return (
    <div className="container-fluid pt-5">
      <div className="row  position-relative">
        <div className="col-12 nav-butt">
          <span className="nv-b-item mx-2">
            <strong>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                href="#"
              >
                All
              </NavLink>
            </strong>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/"
            >
              Home
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/accessories"
            >
              Accessories
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/electronics"
            >
              Electronics
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/clothing"
            >
              Clothing
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/computer"
            >
              Computer
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/fashion"
            >
              Fashion
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/grocery"
            >
              Grocery
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/mobile"
            >
              Mobile
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/videos"
            >
              Videos
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="tv"
            >
              TV
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="asd"
            >
              Help
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              Your Amazon.eg
            </NavLink>
          </span>

          <span>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              <img src={edd}  />
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
