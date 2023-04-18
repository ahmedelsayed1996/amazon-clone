import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import changeCards from "../../store/action";
import { changeCounter } from "../../store/action";
import "./cards.css";
import { useAuth } from "../../context/GlobalProvider";

import { useNavigate } from "react-router-dom";


import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';


const Cards = () => {

   //language
   const currentLanguageCode = cookies.get('i18next') || 'en'
   const { t } = useTranslation();


  const navigate = useNavigate();
  const { user } = useAuth();
  const getBasketTotal = (cards) =>
    cards.reduce((amount, item) => {
      return amount + item.price;
    }, 0);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  useEffect(()=>{
 localStorage.getItem("card",JSON.stringify(cards))

  },[cards]);

  return (
    <>
      <div className="container-fluid ">
        <h3>{t("welcome_message")} {user ? `${user.email}` : "Guest"}</h3>

        {/* <h3 className="hello">Hello ahmed</h3> */}
        <h2 className="checkout-title">{t("basket")}</h2>
        <hr />
        <div className="row ">
          <div className="col-lg-8 col-md-6">
            {cards.map((prd, index) => {
              return (
                <div className="checkoutProduct">
                  <img className="checkoutProduct-image" src={prd.image} />
                  <div className="checkoutProduct-info">
                    <p className="checkoutProduct-title">{currentLanguageCode==='en' ? `${prd.description}` : `${prd.descriptionar}`}</p>
                    <p className="checkoutProduct-price">
                      <strong>$ </strong>
                      <strong> {prd.price}</strong>
                    </p>

                    <button style={{  fontSize:"13px",borderWidth:"1px",borderRadius:"8px",borderStyle:"solid",padding:"0 10px 0 11px"}}
                      onClick={() => {
                        let index = cards.findIndex(
                          (ele) => ele.name === prd.name
                        );
                        cards.splice(index, 1);
                        dispatch(changeCards([...cards]));
                        dispatch(changeCounter(counter - 1));
                      }}
                    >
                      {t("remove")}
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
                {t("subtotal")} <strong>${getBasketTotal(cards)}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> {t("gift")}
              </small>
              <button onClick={() => user ? navigate("/checkout") : navigate("/login")}> {t("proceed")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
