import React from "react";
import { useDispatch, useSelector } from "react-redux";
import changeCards from "../../store/action";
import { changeCounter } from "../../store/action";
import "./cards.css";
import { useAuth } from "../../context/GlobalProvider";

import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const getBasketTotal = (cards) =>
    cards.reduce((amount, item) => {
      return amount + item.price;
    }, 0);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  return (
    <>
      <div className="container-fluid ">
     <h3>Hello, {user ? `${user.email}` : "Guest"}</h3>
     
        {/* <h3 className="hello">Hello ahmed</h3> */}
        <h2 className="checkout-title">Your shopping Basket</h2>
        <hr />
        <div className="row ">
          <div className="col-lg-8 col-md-6">
            {cards.map((prd, index) => {
              return (
                <div className="checkoutProduct">
                  <img className="checkoutProduct-image" src={prd.image} />
                  <div className="checkoutProduct-info">
                    <p className="checkoutProduct-title">{prd.description}</p>
                    <p className="checkoutProduct-price">
                      <strong>$ </strong>
                      <strong> {prd.price}</strong>
                    </p>

                    <button
                      onClick={() => {
                        let index = cards.findIndex(
                          (ele) => ele.name === prd.name
                        );
                        cards.splice(index, 1);
                        dispatch(changeCards([...cards]));
                        dispatch(changeCounter(counter - 1));
                      }}
                    >
                      Remove from Basket
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="subtotal">
              <p>
                {" "}
                Subtotal: <strong>${getBasketTotal(cards)}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
              <button onClick={()=>user?alert("goood"):navigate("/login")}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
